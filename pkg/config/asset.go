package config

import (
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

type MxLibrary struct {
	XMLName xml.Name `xml:"mxlibrary"`
	Entries string   `xml:",innerxml"`
}

type Entry struct {
	XML    string `json:"xml"`
	Width  int    `json:"w"`
	Height int    `json:"h"`
	Aspect string `json:"aspect"`
	Title  string `json:"title"`
}

type SVG struct {
	XMLName xml.Name `xml:"svg"`
	Width   string   `xml:"width,attr"`
	Height  string   `xml:"height,attr"`
}

func ReadAndConvertSVGFiles(rootDir, outputFilePath string) error {
	var entries []Entry

	err := filepath.Walk(rootDir, func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}

		if !info.IsDir() && strings.HasSuffix(info.Name(), ".svg") {
			if err != nil {
				return err
			}

			entry := Entry{
				XML:    fmt.Sprintf("https://raw.githubusercontent.com/bitesinbyte/azure-draw-io-assets/main/img/%s", info.Name()),
				Width:  48,
				Height: 48,
				Aspect: "fixed",
				Title:  strings.TrimSuffix(info.Name(), filepath.Ext(info.Name())),
			}
			entries = append(entries, entry)

			fmt.Printf("Processed file: %s\n", path)
		}

		return nil
	})

	if err != nil {
		return err
	}

	jsonData, err := json.Marshal(entries)
	if err != nil {
		return err
	}

	library := MxLibrary{
		Entries: string(jsonData),
	}

	output, err := xml.MarshalIndent(library, "", "  ")
	if err != nil {
		return err
	}

	output = []byte(xml.Header + string(output))
	if err := ioutil.WriteFile(outputFilePath, output, 0644); err != nil {
		return err
	}

	fmt.Printf("Generated mxlibrary file: %s\n", outputFilePath)
	return nil
}
