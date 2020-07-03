const Sequelize = require('sequelize');
const {readdir} = require('fs');
const {join} = require('path');

const {DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, HOST} = require('../config');

module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(DB_NAME, DB_USER_NAME, DB_USER_PASSWORD, {
            host: HOST,
            dialect: 'mysql',
        });

        let models = {};

        function setModels() {
            readdir(join(process.cwd(), 'database', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(join(process.cwd(), 'database', 'models', modelName));
                });
            });
        }

        return {
            getModel: (modelName) => models[modelName],
            setModels,
        };
    }

    return {
        getInstance: () => {
            if (!instance)
                instance = initConnection();

            return instance;
        },
    };
})();
