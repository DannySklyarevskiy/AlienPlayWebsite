# Development image with hot reload
FROM golang:1.24-alpine AS development

# Install air for hot reload
RUN go install github.com/air-verse/air@latest

WORKDIR /app

# Copy source code
COPY . .

# Expose port
EXPOSE 8080

# Command to run with hot reload
CMD ["air", "-c", ".air.toml"]