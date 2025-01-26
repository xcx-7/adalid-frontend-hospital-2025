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
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with NGINX
FROM nginx:latest

# Adjust /app/build to match React's default build output folder
COPY --from=build /app/build /usr/share/nginx/html  

# Configure NGINX (Optional: Check the file path of your nginx.conf)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
