module.exports = function (sequelize, DataTypes) {

    var Report = sequelize.define("Report", {

        plate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Report;
};