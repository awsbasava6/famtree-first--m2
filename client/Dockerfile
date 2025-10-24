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

