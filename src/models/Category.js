const CategoryModel = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    }, { underscore: true });
  
    return Category;
  };
  
module.exports = CategoryModel;