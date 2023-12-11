module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_user",
            primaryKey: true,
            autoIncrement: true
        },
        superuser: {
            field: "ds_superuser",
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false 
        },
        name: {
            field: "ds_name",
            type: DataTypes.TEXT,
            allowNull: false
        },
        registry: {
            field: "ds_registry",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        school_year: {
            field: "ds_school_year",
            type: DataTypes.INTEGER,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "ds_email",
            validate: {
                isEmail: {
                    args: true,
                    msg: "O formato do e-mail é inválido",
                },
            },
        },
        password: {
            field: "ds_password",
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, Infinity],
            },
        },
        token: {
            field: "ds_token",
            type: DataTypes.STRING,
        }

    });

    return Users;
};
