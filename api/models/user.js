import Sequelize from 'sequelize';
import sequelize from '../db';
import bcrypt from 'bcryptjs';

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: Sequelize.STRING,
    },
    lastName: {
        type: Sequelize.STRING,
    },
    telephone: {
        type: Sequelize.INTEGER,
        unique: true,
    },
    address: {
        type: Sequelize.STRING,
    },
    city: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    zip: {
        type: Sequelize.INTEGER,
    },
}, {
    freezeTableName: true,
});
User.prototype.authenticate = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const hashPassword = (user) => {
    if(user.password) {
        user.password = bcrypt.hashSync(user.password, 8);
    }
};
User.beforeBulkUpdate((options) => {
    options.individualHooks = true;
});
User.beforeCreate((user, options) =>
    hashPassword(user)
);
User.beforeUpdate((user, options) => {
    console.log(user);
    return hashPassword(user);
});

User.sync({force: true});

export default User;
