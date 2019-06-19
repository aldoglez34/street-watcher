module.exports = function (sequelize, DataTypes) {

    var Infraction = sequelize.define("Infraction", {

        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

    });

    return Infraction;
};