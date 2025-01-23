# # Step 1: Use an official Node.js runtime as a parent image
# FROM FROM node:18 AS build

# # Step 2: Set the working directory inside the container
# WORKDIR /app

# # Step 3: Copy package.json and package-lock.json files into the container
# COPY package*.json ./

# # Step 4: Install app dependencies
# RUN npm install

# # Step 5: Copy the rest of your application into the container
# COPY . .

# # Step 6: Build the app for production
# RUN npm run build

# # Step 7: Use an NGINX image to serve the app
# FROM nginx:alpine

# # Step 8: Copy the build folder from the previous image into the NGINX server
# COPY --from=build /app/build /usr/share/nginx/html

# # Step 9: Expose the port the app will run on
# EXPOSE 80

# # Step 10: Command to run the NGINX server
# CMD ["nginx", "-g", "daemon off;"]







# Use the latest LTS version of Node.js
FROM node:18-alpine
 
# Set the working directory inside the container
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Copy the rest of your application files
COPY . .
 
# Expose the port your app runs on
EXPOSE 5173
 
# Define the command to run your app
CMD ["npm", "run", "dev"]