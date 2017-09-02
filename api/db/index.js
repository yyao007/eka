import Sequelize from 'sequelize';

const sequelize = new Sequelize('eka', 'yuan', '931005', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 30,
        min: 0,
        idle: 10000,
    },
})

export const updateOrCreate = async (model, where, newItem, update=false) => {
    try {
        let item = await model.findOne({where: where});
        if(!item) {
            return await model.create(newItem);
        }
        if (update) {
            return await model.update(newItem, {where: where})
        }
    } catch(err) {
        throw err;
    }
}

export default sequelize;
