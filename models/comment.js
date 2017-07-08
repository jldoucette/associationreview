module.exports = function(sequelize, DataTypes) {
  var Comments = sequelize.define("Comments", {
    commentpost: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
      len: [1]
    }
    },
    user: {
      type: DataTypes.STRING
    }
  },
    {
      // We're saying that we want our Author to have Posts
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Comments.belongsTo(models.Blogs, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }


  );
  return Comments;
};