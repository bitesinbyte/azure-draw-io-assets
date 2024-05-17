package main

import (
	"fmt"
	"github.com/bitesinbyte/azure-draw-io-assets/pkg/config"
	"github.com/bitesinbyte/azure-draw-io-assets/pkg/external"
)

func main() {
	// Load configuration from JSON file
	configData := config.LoadConfig("config.json")

	// check latest
	doesNewVersionAvailable, err := external.DoesNewVersionReleased(configData.CurrentVersion)
	if err != nil {
		fmt.Println(err)
		return
	}
	// if new run
	if doesNewVersionAvailable {
		err := external.DownloadAssetZip(configData.CurrentVersion + 1)
		if err != nil {
			fmt.Println(err)
			return
		}

		err = external.Cleanup(configData.CurrentVersion + 1)
		if err != nil {
			fmt.Println(err)
			return
		}

		err = config.ReadAndConvertSVGFiles("img", "assets/azure_latest.xml")
		if err != nil {
			return
		}

		configData.CurrentVersion = configData.CurrentVersion + 1
		config.SaveConfig("config.json", configData)
	}
	fmt.Printf("Done")
}
