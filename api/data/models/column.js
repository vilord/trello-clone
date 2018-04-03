'use strict';
module.exports = (sequelize, DataTypes) => {
  var Column = sequelize.define('Column', {
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
    },
    boardId: {
      field: 'board_id',
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {});
  Column.associate = function(models) {
    Column.belongsTo(models.Board, {
      onDelete: 'CASCADE',
      foreignKey: 'board_id',
    });
    Column.belongsTo(models.User, {
    	onDelete: 'CASCADE',
      foreignKey: 'user_id',
    });
    Column.hasMany(models.Task);
  };
  return Column;
};