module.exports = (sequelize, DataTypes) => {
    // define (nomeMPdel, colunas, config)
        const Usuario = sequelize.define(
            "Usuario", {
                nome: DataTypes.STRING, 
                email: DataTypes.STRING,
                senha: DataTypes.STRING
            }, {
                tableName: "usuarios",
                timestamps: false
            }
        );
        
        Usuario.associate = (models) => {
            //relação 1:N (usuário tem vários posts)
            Usuario.hasMany(models.Post, { as: "posts",  foreignKey: "usuarios_id"} );
            //relação N:M (usuário curte vários posts)
            Usuario.belongsToMany(models.Post, {
                as: "curtiu", // alias da relação
                through: "curtidas", //tabela intermediária
                foreignKey: "usuarios_id",
                otherKey: "posts_id",
                timestamps: false
            })
        }   
        
        return Usuario;
    }  
