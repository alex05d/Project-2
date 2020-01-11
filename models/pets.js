

module.exports = function (sequelize, DataTypes) {
    var Pet = sequelize.define("Pet", {

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

    Pet.associate = function (models) {
        Pets.hasMany(models.Pet_vaccination, {
            foreignKey: "pet_id"
        });
    };

    Pet.associate = function (models) {
        Pet.hasMany(models.Pet_feeding, {
            foreignKey: "pet_id"
        });
    };


    Pet.associate = function (models) {
        Pet.hasMany(models.Medication, {
            foreignKey: "pet_id"
        });
    };

    Pet.associate = function (models) {
        Pet.hasMany(models.Special_instruction, {
            foreignKey: "pet_id"
        });
    };

    Pet.associate = function (models) {
        Pet.hasMany(models.Appt, {
            foreignKey: "pet_id"
        });
    };


    return Pet;


};
