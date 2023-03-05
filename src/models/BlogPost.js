const BlogPostModel = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
      id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      user_id: { type: DataTypes.INTEGER, forreignKey: true },
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    }, { underscore: true });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            forreignKey: 'user_id', as: 'users'
        })
    }
  
    return BlogPost;
  };
  
module.exports = BlogPostModel;