const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "convertion",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      cop: {
        type: DataTypes.STRING,
      },
      usd: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );
};
