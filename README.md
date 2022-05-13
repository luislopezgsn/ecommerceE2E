# :hibiscus: Ecommerce

E-commerce project developed using Spring Boot and React.js.

## Used Technologies

* Back-end: Spring (Boot, Data, Security), JPA / Hibernate, PostgreSQL, JUnit, Mockito
* Front-end: TypeScript, React.js, Redux, Jest, Bootstrap, CSS
* Security: JWT, OAuth2 Google, Facebook, Github
* REST API, GraphQL API
* AWS: EC2, S3, Min.io, PostgreSQL RDS
* Server Build: Maven
* Client Build: npm, yarn, webpack

## Features

* Authentication with JWT and Email validation.
* Authentication with Google, Facebook or Github
* Customers can search for the product according to the specified criteria.
* Customers can add and delete products from the shopping cart.
* Customers can order the products in the shopping cart.
* Customers can change their password and view their orders.
* Admin can add or modify a product.
* Admin can change the data of any user.
* Admin can view orders of all users.

## Run the application

To build the backend and its postgres, you should run the following command:

```bash
docker-compose build
```

To run the builds created before, you should run the following command:

```bash
docker-compose up
```

To run the frontend, you should go `fronted` folder and run the following commands:

```bash
npm install
yarn start
```

Navigate to the <http://localhost:3000> to see the webpage


> NOTE: Admin user for the webpage  
> admin@gmail.com / admin

## Swagger Documentation

<http://localhost:8080/swagger-ui.html>

## Screenshots

|                    Menu page                     |                     Product page                      |
|:------------------------------------------------:|:-----------------------------------------------------:|
| ![Menu page](https://i.ibb.co/dcp56tb/menu.jpg)  | ![Product page](https://i.ibb.co/1dBjdMy/product.jpg) |

|                         Email template                         |                      List of users                       |
|:--------------------------------------------------------------:|:--------------------------------------------------------:|
| ![Email template](https://i.ibb.co/bmKTLPJ/email-template.jpg) | ![List of users](https://i.ibb.co/T88cFZt/all-users.jpg) | 

|                      List of orders                       |                       User order page                       |
|:---------------------------------------------------------:|:-----------------------------------------------------------:|
| ![List of orders](https://i.ibb.co/T88cFZt/all-users.jpg) | ![User order page](https://i.ibb.co/4f7F0hk/all-orders.jpg) |

|                      User profile page                       |                       Add perfume page                        |
|:------------------------------------------------------------:|:-------------------------------------------------------------:|
| ![User profile page](https://i.ibb.co/KDF3FZX/user-page.jpg) | ![Add perfume page](https://i.ibb.co/KGKhJxR/add-perfume.jpg) |

|                    Edit perfume list                    |                        Edit perfume page                        |
|:-------------------------------------------------------:|:---------------------------------------------------------------:|
| ![Edit perfume list](https://i.ibb.co/fkFSnFy/edit.jpg) | ![Edit perfume page](https://i.ibb.co/cTddspr/edit-perfume.jpg) |
