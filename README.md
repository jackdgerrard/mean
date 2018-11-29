# MEAN STACK application for Server Side Web Frameworks module

## Technologies Used

[MongoDB](https://www.mongodb.com/)

[ExpressJS](https://expressjs.com/)

[Angular](https://angular.io/)

[NodeJS](https://nodejs.org/en/)

[NPM](https://www.npmjs.com/)

[Nodemon](https://nodemon.io/)

[Cors.js](https://github.com/expressjs/cors)

[jsonwebtoken](https://www.jsonwebtoken.io/)

[body-parser](https://www.npmjs.com/package/body-parser)

[Pure CSS](https://purecss.io/)

[Postman](https://www.getpostman.com/)

[passport](http://www.passportjs.org/) - Authenticates http requests and is used to protect express routes. Had issue with this following tutorial, found solution [here](https://stackoverflow.com/questions/50317738/fromauthheaderasbearertoken-is-not-working-in-node)

[passport-jwt](https://www.js.com/package/passport-jwt) An authentication strategy for Passport using web tokens

[bcrypt](https://www.npmjs.com/package/bcrypt) - hashing algorithm designed to be slow for security purposes; slows down dictionary attacks.

[Mongoose](https://www.npmjs.com/package/mongoose) is a MongoDB object modeling tool designed to work in an asynchronous environment. Had issue with this following tutorial, found solution [here](https://stackoverflow.com/questions/50448272/avoid-current-url-string-parser-is-deprecated-warning-by-setting-usenewurlpars)

## Specification from lecturer Jing Hua Ye

### Design, develop and implement a web App for Restaurant Reviewers

_Jing Hua Ye, CIT 13/09/2018_

#### 1 Introduction

In this project, you’ll build a Restaurant Reviews App that meets accessibility standards and provides
a responsive user experience. The application must include:

1. restaurant names,

1. a photograph,

1. address,

1. operating hours for each restaurant,

1. reviews (including the name of the reviewer, 5-star rating system and comments, date of review),

The application must include:

1. an application header,

1. a menu providing multiple ways to filter the restaurants.

1. When viewing a specific restaurant current reviews must be displayed along with a form for the user to submit their own review.

#### 2 Requirements

1. Users are able to sign up for an account to log in the application.
2. Users are able to sign in before start the application.
3. The application should contain a home section and an about section
4. The "Restaurants" section displays all the restaurants in the catalog.
   - User can use search to filter the catalog.
   - User can filter by type, clicking on one of the filters.
   - User can filter by neighborhood and cuisine type.
   - Sort the list using designated buttons.
   - Click on each restaurant in the list to see more details.
5. In restaurant details user can see picture, address and reviews. Review can be added and will be
   saved.
6. It allows users to submit a restaurant review via a new review form online and offline.
7. It allows users to mark a restaurant as a favourite.
8. All content-related images include appropriate alternate text.
9. Uses MongoDB to cache JSON responses from a Node.js server. There maybe a small variation in
   MySQL version.
   10.Try to meet the above requirements as much as you can.

#### 3 Submission

Submit the source code of the game through Blackboard. You need to give a quick presentation on your
final product.

## security considerations

This app uses bcryptjs to ecncrypt user's passwords, regex to validate emails in angular

## running the application

> install middleware and dependancies.

```bash
npm install
```

> to compile angular to public folder.

```bash
ng build --prod
```

> launch mongoDB on Linux

```bash
$ sudo service mongo start
```

> launch mongoDB on windows cmd as admin

```bash
net start MongoDB
```

> launches nodemon, and Express application

```bash
npm start
```

## Mongo Commands

[cheat sheet](https://blog.codecentric.de/files/2012/12/MongoDB-CheatSheet-v1_0.pdf)

### command for importing restaurants _after converting json to json array_

```
mongoimport --db restaurants --collection restaurants --file restaurantsjson --jsonArray
```

## Learning Resources

[Mongo Documentation](https://docs.mongodb.com/manual/)

[Express Generator documentation](https://expressjs.com/en/starter/generator.html)

[coursetro YouTube course on angular](https://www.youtube.com/watch?v=z4JUm0Bq9AM)

[Coursetro Angular course written version](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course)

[Node.JS documentation](https://nodejs.org/en/docs/)

[Brad Traversy's Youtube tutorial for creating a MEAN Application](https://www.youtube.com/watch?v=DQ9pZ2NKXRo)
