
module.exports = function (sequelize, DataTypes) {
    var Medication = sequelize.define("Medication", {

        needs_meds: {
            type: DataTypes.STRING,
            defaultValue: false,
        },
        medication_name: {
            type: DataTypes.STRING
        },
        medication_time: {
            type: DataTypes.STRING
        },
        dosage: {
            type: DataTypes.STRING
        }
    });

    return Medication;
};
