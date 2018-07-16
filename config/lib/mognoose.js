import mongoose from 'mongoose'
import glob from 'glob'
import path from 'path'
import config from '../config';

const modelPathFunction = () => {
    glob.sync('./modules/*/models/*').forEach(suc => {
        console.log(suc)
        require(path.resolve(suc))
    })
}

export async function databaseMongoose() {
    mongoose.set('debug', true);
    let error = null;

    try {
        let db = await mongoose.connect(config.env.db);
        modelPathFunction();
    } catch (err) {
        error = err;
    }

    return new Promise((resolve, reject) => {
        if (error == null) {
            resolve(`connect success db: ${config.env.db}`);
        } else {
            reject(`Mongoose File : ${error}`)
        }
    })
}