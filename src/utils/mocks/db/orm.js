const { db } = require('../../lib/postgresql.conf');
const Animals = require('../../utils/schemas/postgres.tabs');


export async function modelSync(){
    try {
        await db.sync({force:true});
        console.log("All models were synchronized successfully.");
    } catch (error) {
        console.error('Unable to synchronize the models:', error);   
    }
};


export async function modelDrop(){
    try {
        await db.drop();
        console.log("All tables dropped!");
    } catch (error) {
        console.error('Was a fail to delete tables:', error);  
    }
};

export async function modelInsert(){
    try {
        const jane = await Animals.create({ id:1, name: "Jane", priority: 2 });
        console.log("Jane's auto-generated ID:", jane.id);
    } catch (error) {
        console.error('Was a fail to inserting data:', error);  
    }
};

export async function modelFind(){
    try {
        const users = await Animals.findAll();
        console.log(users.every(user => user instanceof Animals)); // true
        console.log("All users:", JSON.stringify(users, null, 2));
    } catch (error) {
        console.error('Was a fail finding:', error); 
    }
};
