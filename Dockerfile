FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY dist/Demo .

# FROM nginx:alpine

# COPY . /usr/share/nginx/html/

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]