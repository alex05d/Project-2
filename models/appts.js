
module.exports = function (sequelize, DataTypes) {
    var Appt = sequelize.define("Appt", {

        vet_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        vet_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        appt: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Appt.associate = function (models) {
        Appt.belongsTo(models.Pet);
    };


    return Appt;
};
