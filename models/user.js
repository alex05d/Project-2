module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
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
        }
    });

    User.associate = function (models) {
        User.hasOne(models.Owner, {
            foreignKey: "user_id"
        });
    };

    return User;
};







