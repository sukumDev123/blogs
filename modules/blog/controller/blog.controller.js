import mongoose from "mongoose";
const Blog = mongoose.model('Blog')

const populateFun = populate_ => {
    let popu = populate_ ? populate_ : 'create_at'
    return `-${popu}`
}

export const getAllBolg = async (req, res, next) => {



    try {
        let limit = req.query.limitSize ? parseInt(req.query.limitSize) : 10
        limit = typeof limit == 'number' ? limit : ''
        let populate = populateFun(req.query.populate)
        if (limit || req.query.limitSize) {
            let find_ = await Blog.find().limit(limit || 10).populate(populate)
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


export const saveBlog = async (req, res, next) => {
    try {
        let blog = {
            name: req.body.name,
            detail: req.body.detail,
        }
        let blogsave = new Blog(blog)
        let save = await blogsave.save()
        res.json({
            data: JSON.stringify(blog)
        })
    } catch (error) {
        next({
            message: JSON.stringify(error),
            status: error.status
        })
    }
}