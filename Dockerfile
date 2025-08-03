# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage with Caddy
FROM caddy:2-alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/caddy

# Copy Caddyfile
COPY Caddyfile /etc/caddy/Caddyfile

# Expose port 80 and 443
EXPOSE 80 443

# Caddy will automatically start with the Caddyfile
