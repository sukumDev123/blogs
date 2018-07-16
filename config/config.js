import dev from './env/development'
import pro from './env/production'


process.env.NODE_ENV = process.env.NODE_ENV || 'developments'

const env = process.env.NODE_ENV === 'development' ? dev : pro


export default {
    env: env
}