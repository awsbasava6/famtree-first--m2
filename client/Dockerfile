
# Use official node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

# Make local binaries executable
RUN chmod +x ./node_modules/.bin/vite

# Build
RUN npm run build

# Optional: expose port
EXPOSE 3000

# Start command
CMD ["npm", "run", "preview"]
# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy remaining source files
COPY . .

# Fix vite permissions (this is critical)
RUN chmod +x node_modules/.bin/vite

# Build frontend
RUN npm run build

# Stage 2: Production (optional: serve with nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

>>>>>>> 9dc5f2f2df9ca83266444b90073f9751dfeea9c1
