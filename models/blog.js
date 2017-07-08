module.exports = function(sequelize, DataTypes) {
  var Blogs = sequelize.define("Blogs", {
    blogtitle: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    blogpost: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "General"
    },
    status: {
      type: DataTypes.STRING
    },
    user: {
      type: DataTypes.STRING
    }
  },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // Associating Author with Posts
          // When an Author is deleted, also delete any associated Posts
          Blogs.hasMany(models.Comments, {
            onDelete: "cascade"
          });
        }
      }
    }

    
 
  );
  return Blogs;
};