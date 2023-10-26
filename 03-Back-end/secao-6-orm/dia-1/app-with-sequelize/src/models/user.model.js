const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  }
  );

  return User;
};

module.exports = UserModel;