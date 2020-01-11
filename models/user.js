

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
    });




    User.associate = function (models) {
        User.hasMany(models.Pet, {
            foreignKey: "user_id"
        });
    };

    return User;
};


