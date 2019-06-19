module.exports = function (sequelize, DataTypes) {

    var Plate = sequelize.define("Plate", {

        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        plate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        points: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return Plate;
};