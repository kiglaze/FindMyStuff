module.exports = function (sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        // Each room has a name and a description
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Room.associate = function (models) {
        // A Room should belong to a User
        // A Room can't be created without a User due to the foreign key constraint
        Room.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Room.associate = function (models) {
        // Associating Room with StorageArea
        // When a Room is deleted, also delete any associated StorageAreas
        Room.hasMany(models.StorageArea, {
            onDelete: "cascade"
        });
    };

    return Room;
};
