
# ===== Backend Dockerfile =====
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy rest of the app
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["node", "index.js"]
