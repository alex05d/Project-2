var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
    var pet_feeding = sequelize.define("pet_feeding", {
        feeding_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        pet_food: {
            type: DataTypes.STRING,
            allowNull: false
        },
        food_amount: {
            type: DataTypes.STRING,
            allowNull: false
        },
        morning_feeding: {
            type: DataTypes.TIME,
            allowNull: false
        },
        afternoon_feeding: {
            type: DataTypes.TIME,
            allowNull: false
        },
        night_feeding: {
            type: DataTypes.TIME,
            allowNull: false
        }
    });

    pets.associate = function (models) {
        pets.hasMany(models.pet_feeding, {
            foreignKey: "feeding_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };


    pet_feeding.associate = function (models) {
        pet_feeding.belongsTo(models.pets, {
            foreignKey: "pets_id",
            sourcekey: "feeding_id"
        });
    };
    return pet_feeding;
};
