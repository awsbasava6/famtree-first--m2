
# ---------------------------
# Backend (Node.js + Express)
# ---------------------------
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy all source code
COPY . .

# Expose backend port
EXPOSE 5000

# Set environment variable (PORT comes from .env)
ENV NODE_ENV=production

# Start server
CMD ["node", "index.js"]
