const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports=(sequelize,DataTypes)=>{
    //CREATING SCHEMA OF TABLE
    //Users is the name of table.


    const Entry=sequelize.define("Entry",{

       

        // ID:{

        //     type:DataTypes.STRING,
        //     allowNull:false,

        // },
       
        Name:{

            type:DataTypes.STRING,
            allowNull:false,

        },

        
        Blood_Group:{

            type:DataTypes.STRING,
            allowNull:false,

        },

        
        Address:{

            type:DataTypes.STRING,
            allowNull:false,

        },



          
        Gender:{

            type:DataTypes.STRING,
            allowNull:false,

        },


          
        Age:{

            type:DataTypes.STRING,
            allowNull:false,

        },

        Diseases_Suffering:{

            type:DataTypes.STRING,
            allowNull:false,

        },


    })



    return Entry;
}