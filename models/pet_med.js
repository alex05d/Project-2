var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
    var medication = sequelize.define("medication", {
        med_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        needs_meds: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        medication_name: {
            type: DataTypes.STRING
        },
        medication_time: {
            type: DataTypes.TIME
        },
        dosage: {
            type: DataTypes.STRING
        }
    });

    pets.associate = function (models) {
        pets.hasMany(models.medication, {
            foreignKey: "med_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    medication.associate = function (models) {
        medication.belongsTo(models.pets, {
            foreignKey: "pets_id",
            sourceKey: "med_id"
        });
    };

    return medication;
};
