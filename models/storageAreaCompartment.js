module.exports = function (sequelize, DataTypes) {
    var StorageAreaCompartment = sequelize.define("StorageAreaCompartment", {
        // Each storage area compartment has a name and a description
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    StorageAreaCompartment.associate = function (models) {
        // A storage area compartment should belong to a storage area
        // A storage area compartment can't be created without a storage area due to the foreign key constraint
        StorageAreaCompartment.belongsTo(models.StorageArea, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    StorageAreaCompartment.associate = function (models) {
        // Associating StorageAreaCompartment with Item
        // When a StorageAreaCompartment is deleted, also delete any associated Items
        // TODO: does the above statement make sense? What does it mean to delete items? Are they gone??
        StorageAreaCompartment.hasMany(models.Item, {
            onDelete: "cascade"
        });
    };
    
    return StorageAreaCompartment;
};
