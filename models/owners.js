var pets = require("./pets");

module.exports = function (sequelize, DataTypes) {
  var owners = sequelize.define("owner", {
    owner_id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING
    },
    last_name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    phone_number: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: true
      }
    }
  });

  owners.associate = function (models) {
    owners.hasMany(models.pets, {
      onDelete: "cascade"
    });
  };

  pets.associate = function (models) {
    pets.belongsTo(models.owners, {
      foreignKey: "pets_id",
      sourceKey: "owners_id",
      onDelete: "cascade"
    })
  }
  return owners;
};
