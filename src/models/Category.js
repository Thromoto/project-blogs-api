const CategoryModel = (sequelize, DataTypes) => {
    const User = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    }, { underscore: true });
  
    return User;
  };
  
module.exports = CategoryModel;