var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
    var special_instructions = sequelize.define("special_instructions", {
        instuction_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
        instructions: {
            type: DataTypes.BOOLEAN
        },
        info: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 100]
            }
        }
    });

    pets.associate = function (models) {
        pets.hasMany(models.special_instructions, {
            foreignKey: "insturction_id",
            sourceKey: "pets_id"
        });
    };

    special_instructions.associate = function (models) {
        special_instructions.belongsTo(models.pets, {
            foreignKey: "pets_id",
            sourceKey: "instruction_id"
        });
    };
    return special_instructions;
};
