
module.exports = function (sequelize, DataTypes) {
    var Pet_feeding = sequelize.define("Pet_feeding", {

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


    return Pet_feeding;
};
