import {express_setup} from './config/lib/express'
import http from 'http'

const port = process.env.PORT || 8080

http.createServer(express_setup()).listen(port , () => console.log(`Start service bt port ${port}`))