# Development stage with hot reload
FROM node:24-alpine AS development

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5173 

# Start development server with hot reload
CMD ["npm", "run", "dev"]