

module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {

        pets_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        pet_birthday: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        pet_gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pet_personality: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });





    return Pet;


};
