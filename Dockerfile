# # Use the latest LTS version of Node.js
# FROM node:18-alpine
 
# # Set the working directory inside the container
# WORKDIR /app
 
# # Copy package.json and package-lock.json
# COPY package*.json ./
 
# # Install dependencies
# RUN npm install
 
# # Copy the rest of your application files
# COPY . .
 
# # Expose the port your app runs on
# EXPOSE 5173
 
# # Define the command to run your app
# CMD ["npm", "run", "dev"]

#################################Trying nginx#############################################


# Stage 1: Build React App
FROM node:18-alpine AS build
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application using Vite
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:latest

# Copy the build output from the first stage
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Replace the default NGINX config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default NGINX port
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
