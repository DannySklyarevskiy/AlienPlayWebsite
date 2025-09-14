package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {

	spareCount := 0
	destroyCount := 0

	http.HandleFunc("/api/sendVote", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return

		}

		bodyBytes, err := io.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Error reading request body", http.StatusInternalServerError)
			return
		}
		defer r.Body.Close()

		bodyString := string(bodyBytes)
		fmt.Printf("Received body: %s\n", bodyString)

		if bodyString == "\"spare\"" {
			spareCount++
		} else {
			destroyCount++
		}

		fmt.Printf("Spare count: %d, Destroy count: %d\n", spareCount, destroyCount)

		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Message received"))
	})

	fmt.Println("Server running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}
