package utils

import "regexp"

func ExtractName(input string) string {
	// Define the regular expression pattern
	re := regexp.MustCompile(`\d+-icon-service-(.*)\.svg`)

	// Find the match
	matches := re.FindStringSubmatch(input)

	// Check if a match is found
	if len(matches) < 2 {
		return ""
	}

	// Return the extracted name
	return matches[1]
}
