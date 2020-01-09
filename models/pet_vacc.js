var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
    var pet_vaccinations = sequelize.define("pet_vaccinations", {
        vac_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        vac_name: {
            type: DataTypes.STRING
        },
        vac_status: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        vac_due_date: {
            type: DataTypes.DATE
        }
    });

    // needs connection back to pets
    pets.associate = function (models) {
        pets.hasMany(models.pet_vaccinations, {
            foreignKey: "vac_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    pet_vaccinations.associate = function (models) {
        pet_vaccinations.belongsTo(models.pets, {
            foreignKey: "pets_id",
            sourceKey: "vac_id"
        });
    };
    return pet_vaccinations;
};
