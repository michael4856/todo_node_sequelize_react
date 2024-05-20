const {Sequelize, DataTypes} = require('sequelize')


const sequelize = new Sequelize(
    "todo_db", "root", "",
    {
        host:'localhost',
        dialect:'mysql',
        operatorsAliases:false
    }
)

sequelize.authenticate()
.then(()=>{console.log("db connected")})
.catch((e)=> console.log("error ", e))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.todos = require('./todoModel')(sequelize, DataTypes)

sequelize.sync({force:false})


module.exports = db