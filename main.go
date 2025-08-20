package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Define the API endpoint
	http.HandleFunc("/api/hi", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodPost {
			http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
			return
		}
		
		fmt.Println("hi") 
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("Message received"))
	})

	fmt.Println("Server running on http://localhost:8080")
	http.ListenAndServe(":8080", nil)
}