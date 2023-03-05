const PostCategoryModel = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      post_id: { type: DataTypes.INTEGER, forreignKey: true },
      category_id:{ type: DataTypes.INTEGER, forreignKey: true },
    }, { underscore: true });

    PostCategory.associate = (models) => {
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          through: PostCategory,
          foreignKey: 'post_id',
          otherKey: 'categoryId',
        });
        models.Category.belongsToMany(models.BlogPost, {
          as: 'blog_posts',
          through: PostCategory,
          foreignKey: 'category_id',
          otherKey: 'postId',
        });
      };
  
    return PostCategory;
  };
  
module.exports = PostCategoryModel;