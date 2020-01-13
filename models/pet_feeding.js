

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
            type: DataTypes.STRING,
            allowNull: false
        },
        afternoon_feeding: {
            type: DataTypes.STRING,
            allowNull: false
        },
        night_feeding: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Pet_feeding.associate = function (models) {
        Pet_feeding.belongsTo(models.Pet);
    };



    return Pet_feeding;
};
