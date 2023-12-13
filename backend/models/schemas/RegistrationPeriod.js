module.exports = (sequelize, DataTypes) => {
    const RegistrationPeriod = sequelize.define("Registration", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_registration_period",
            primaryKey: true,
            autoIncrement: true
        },
        isOpen: {
            field: "ds_is_open",
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        start: {
            field: "ds_start",
            type: DataTypes.DATE,
            allowNull: false
        },
        end: {
            field: "ds_end",
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    return RegistrationPeriod;
};
