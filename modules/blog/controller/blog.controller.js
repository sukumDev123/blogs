import mongoose from "mongoose";
const Blog = mongoose.model('Blog')
export const getAllBolg = async (req, res, next) => {



    try {
        let limit = req.query.limitSize ? parseInt(req.query.limitSize) : 10
        limit = typeof limit == 'number' ? limit : ''
        let populate = req.query.populate || 'create_at'
        if (limit) {
            let find_ = await Blog.find().limit(limit).populate(populater)
            res.json({
                data: find_
            })
        } else {
            next({
                message: "Type of limit need to Number is not string.",
                status: 400
            })
        }



        // console.log(`query populat : ${populate}`)
    } catch (error) {
        next({
            message: JSON.stringify(error),
            status: error.status ? error.status : 403
        })
    }
}