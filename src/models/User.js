module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, 
    { 
      underscore: true,
      timestamps: false,
    });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'user_id', as: 'blogPosts'
      });
    }
  
    return User;
  };
