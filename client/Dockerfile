
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
