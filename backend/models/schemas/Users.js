module.exports = (sequelize, DataTypes) =>{

    const Users = sequelize.define("Users", {
        id: {
            type: DataTypes.INTEGER,
            field: "co_users",
            primaryKey: true,
            autoIncrement: true
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
        },
    })

    return Users; 
    
}