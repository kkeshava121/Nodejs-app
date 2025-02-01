# Use official Node.js image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "index.js"]

