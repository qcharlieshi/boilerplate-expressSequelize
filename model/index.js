//  npm install --save sequelize
//  npm install --save pg pg-hstore
//  Use the above two commands to setup Sequelize
//
//  Ensure postgres is running

let Sequelize = require('sequelize');


//new Sequelize takes in four parameters
// (Database, Username, Password, Configuration Object)
let db = new Sequelize('pokemon', 'oak', 'catchall', {
  host: 'postgres://localhost:3000',
  dialect: 'postgres',
  logging: off
});
//Turn logging on if you want to see the sql queries and insertions

//Simplier and faster implementation below
//EXAMPLE//// THIS IS THE SAME AS ABOVE
//let db = new Sequelize('postgres://oak:catchall@localhost:3000/pokemon');
//Most base implementation
//let db = new Sequelize('postgres://localhost:3000/pokemon');
//pokemon is your DB name, aka what you see when you open up Postgres


let Pokedex = db.define('pokedex', {
    name: { },
    description: { },
    type: { },
    ability: { },
    height: { },
    weight: { }
})



