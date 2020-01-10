
module.exports = function (sequelize, DataTypes) {
    var Medication = sequelize.define("Medication", {

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

    return Medication;
};
