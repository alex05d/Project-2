
module.exports = function (sequelize, DataTypes) {
    var Special_instruction = sequelize.define("Special_instruction", {

        instructions: {
            type: DataTypes.STRING
        },
        info: {
            type: DataTypes.STRING
        }
    });

    Special_instruction.associate = function (models) {
        Special_instruction.belongsTo(models.Pet);
    };

    return Special_instruction;
};
