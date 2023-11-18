module.exports = (sequelize, DataTypes) =>{
    const Users = sequelize.define("Users", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: "O formato do e-mail é inválido",
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8, Infinity],
            },
        },
        token: {
            type: DataTypes.STRING,
        },
        tokenExpiration: {
            type: DataTypes.STRING,
        },
    })
    return Users; 
}