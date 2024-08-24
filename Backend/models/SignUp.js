const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{

const SignUp=sequelize.define("SignUp",{


    
    Firstname:
    {type:DataTypes.STRING,
    allowNull:false,
    },

    Lastname:
    {type:DataTypes.STRING,
    allowNull:false,
    },

   Email:
    {type:DataTypes.STRING,
    allowNull:false,
    },
    Password:
    {type:DataTypes.STRING,
    allowNull:false,
    },


    


})
return SignUp;

}
