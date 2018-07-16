import express from 'express'
import * as blog_con from '../controller/blog.controller'

export const blogRouter = () => {
    const router = express.Router()

    router.get('/all', blog_con.getAllBolg)
    router.post('/save', blog_con.saveBlog)


    return router
}