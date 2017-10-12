module.exports = function (sequelize, DataTypes) {
    var StorageArea = sequelize.define("StorageArea", {
        // Each storage area has a name and a description
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    StorageArea.associate = function (models) {
        // A storage area should belong to a room
        // A storage area can't be created without a room due to the foreign key constraint
        StorageArea.belongsTo(models.Room, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    StorageArea.associate = function (models) {
        // Associating StorageArea with StorageAreaCompartment
        // When a StorageArea is deleted, also delete any associated StorageAreaCompartments
        StorageArea.hasMany(models.StorageAreaCompartment, {
            onDelete: "cascade"
        });
    };
    
    return StorageArea;
};
