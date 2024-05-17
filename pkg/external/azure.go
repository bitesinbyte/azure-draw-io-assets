package external

import (
	"archive/zip"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
)

const AssetUrl = "https://arch-center.azureedge.net/icons/Azure_Public_Service_Icons_V%d.zip"

func DoesNewVersionReleased(currentVersion int16) (bool, error) {
	var url = fmt.Sprintf(AssetUrl, currentVersion+1)
	req, err := http.Get(url)
	if err != nil {
		return false, err
	}
	return req.StatusCode == 200, nil
}

func Cleanup(version int16) error {
	var zipFilePath = fmt.Sprintf("Assets_V%d.zip", version)

	if err := os.Remove(zipFilePath); err != nil {
		return err
	}
	return nil
}
func DownloadAssetZip(version int16) error {
	var url = fmt.Sprintf(AssetUrl, version)
	response, err := http.Get(url)

	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			println(err)
		}
	}(response.Body)

	// Create the file
	var filePath = fmt.Sprintf("Assets_V%d.zip", version)
	out, err := os.Create(filePath)
	if err != nil {
		fmt.Printf("err: %s", err)
	}
	defer func(out *os.File) {
		err := out.Close()
		if err != nil {
			println(err)
		}
	}(out)

	// Write the body to file
	_, err = io.Copy(out, response.Body)

	err = unzipAndFlatten(filePath)
	if err != nil {
		return err
	}
	return err
}
func unzipAndFlatten(src string) error {
	var dest = "img"
	r, err := zip.OpenReader(src)
	if err != nil {
		return err
	}
	defer r.Close()

	for _, f := range r.File {
		if f.FileInfo().IsDir() {
			continue // Skip directories
		}

		fileName := filepath.Base(f.Name) // Get the file name without directories
		fpath := filepath.Join(dest, fileName)

		// Ensure no overwriting happens by appending a unique suffix if needed
		for i := 1; ; i++ {
			if _, err := os.Stat(fpath); os.IsNotExist(err) {
				break // File does not exist, safe to use fpath
			}
			fpath = filepath.Join(dest, fmt.Sprintf("%s_%d%s", strings.TrimSuffix(fileName, filepath.Ext(fileName)), i, filepath.Ext(fileName)))
		}

		if err := os.MkdirAll(filepath.Dir(fpath), os.ModePerm); err != nil {
			return err
		}

		outFile, err := os.OpenFile(fpath, os.O_WRONLY|os.O_CREATE|os.O_TRUNC, f.Mode())
		if err != nil {
			return err
		}

		rc, err := f.Open()
		if err != nil {
			return err
		}

		_, err = io.Copy(outFile, rc)
		outFile.Close()
		rc.Close()

		if err != nil {
			return err
		}
	}
	return nil
}
