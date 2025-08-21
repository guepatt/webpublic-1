FROM node:alpine3.20 as build

# ENV NODE_ENV=production

# Declare & set environment variables from .env file
#ARG REACT_APP_API_URL_
#ARG REACT_APP_STRIPE_API_TEST_PK

# ENV REACT_APP_API_URL_=$REACT_APP_API_URL_
# ENV REACT_APP_STRIPE_API_TEST_PK=$REACT_APP_STRIPE_API_TEST_PK

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

#Build app for production
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine3.19

# Copy the built React app to Nginx's web server directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the default nginx.conf provided by the docker image
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 3001 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
