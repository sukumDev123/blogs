import {
    express_setup
} from './config/lib/express'
import {
    databaseMongoose
} from './config/lib/mognoose'
import http from 'http'

const port = process.env.PORT || 8080

const init = async () => {
    try {
        let dbMongo = await databaseMongoose()
        console.log(` ${dbMongo}`)
        http.createServer(express_setup()).listen(port, () => {
            console.log(`Start service bt port ${port}`)

        })
    } catch (error) {
        console.log(`${error}`)

    }
}

init()