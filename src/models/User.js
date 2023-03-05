const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: DataTypes.INTEGER,
      display_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    }, { underscore: true });

    User.associate = (models) => {
      User.hasMany(models.BlogPost, {
        foreignKey: 'user_id', as: 'blogPosts'
      });
    }
  
    return User;
  };
  
module.exports = UserModel;