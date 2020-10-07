# Node Version v12.18.4 
nvm install v12.18.4 
## To Run
##### Install Postgresql, to configure user and password
##### Create .env file into root directory as env-template.txt

npm install
##### npm run dev // Mode Debug
##### npm run Build // To Build dist
## Tests
Sales Module is tested with the diferent Cases
npm test

## Routes Render
#### Main Route 
http://localhost:3000/login
#### Products From DB
http://localhost:3000/products

#### Graphql Query Products/Product(ID)
http://localhost:3000/graphql

#### Get and Post, Products
http://localhost:3000/api/products


### Packages Used
npm i @babel/polyfill dotenv express morgan sequelize pg pg-hstore express-graphql graphql

npm i @babel/cli @babel/core @babel/node @babel/preset-env nodemon sequelize-cli standard -D
