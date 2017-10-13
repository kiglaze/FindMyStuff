module.exports = function (sequelize, DataTypes) {
    var Item = sequelize.define("Item", {
        // Each item has a name and a description
        name: DataTypes.STRING,
        description: DataTypes.STRING
    });

    Item.associate = function (models) {
        // An item should belong to a storage area compartment
        // An item can't be created without a storage area compartment due to the foreign key constraint
        Item.belongsTo(models.StorageAreaCompartment, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Item;
};
