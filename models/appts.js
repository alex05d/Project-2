var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
    var appt = sequelize.define("appt", {
        appt_id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        vet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vet_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });

    pets.associate = function (models) {
        pets.hasMany(models.appt, {
            foreignKey: "appt_id",
            sourceKey: "pets_id",
            onDelete: "cascade"
        });
    };

    appt.associate = function (models) {
        appt.belongsTo(models.pets, {
            foreignKey: "pets_id",
            sourceKey: "appt_id"
        });
    };

    return appt;
};
