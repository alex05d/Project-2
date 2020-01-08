var owners = require("./owners");

module.exports = function (sequelize, DataTypes) {
    var pets = sequelize.define("pets", {
        pets_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
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

    owners.associate = function (models) {
        owners.hasMany(models.pets, {
            foreignKey: "pets_id",
            sourceKey: "owner_id",
            onDelete: "cascade"
        });
    };

    pets.associate = function (models) {
        pets.belongsTo(models.owners, {
            foreignKey: "owner_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    pets.associate = function (models) {
        pets.hasMany(models.pet_vaccinations, {
            foreignKey: "vac_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    pets.associate = function (models) {
        pets.hasMany(models.pet_feeding, {
            foreignKey: "feeding_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };


    pets.associate = function (models) {
        pets.hasMany(models.medication, {
            foreignKey: "med_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    pets.associate = function (models) {
        pets.hasMany(models.special_instructions, {
            foreignKey: "instruction_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    pets.associate = function (models) {
        pets.hasMany(models.appt, {
            foreignKey: "appt_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };


    return pets;
};
