
module.exports = function (sequelize, DataTypes) {
    var Pet_vaccination = sequelize.define("Pet_vaccination", {

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


    return Pet_vaccination;
};
