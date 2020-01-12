
module.exports = function (sequelize, DataTypes) {
    var Pet_vaccination = sequelize.define("Pet_vaccination", {

        vac_name: {
            type: DataTypes.STRING
        },
        vac_status: {
            type: DataTypes.STRING,
            defaultValue: false
        },
        vac_due_date: {
            type: DataTypes.STRING
        }
    });


    return Pet_vaccination;
};
