var Sequelize = require('sequelize');
module.exports = new Sequelize(process.env.DB_NAME,process.env.DB_ACCOUNT,process.env.DB_PASSWORD,{
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool:{
        max:5,min:0,idle:10000
    },
    timezone: '+08:00',
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci', 
        timestamps: true
    },
})
