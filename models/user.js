module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // Each user has a username, a name and a password hash
        username: DataTypes.STRING,
        name: DataTypes.STRING,
        passhash: DataTypes.STRING
    });

    User.associate = function (models) {
        // Associating User with Room
        // When a User is deleted, also delete any associated Rooms
        User.hasMany(models.Room, {
            onDelete: "cascade"
        });
    };

    return User;
};
