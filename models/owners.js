

module.exports = function (sequelize, DataTypes) {
  var Owner = sequelize.define("Owner", {

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
      type: DataTypes.STRING
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    }
  });




  Owner.associate = function (models) {
    Owner.hasMany(models.Pet);
  };

  return Owner;
};


