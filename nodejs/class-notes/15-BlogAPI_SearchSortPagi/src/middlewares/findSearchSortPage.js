"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Searching & Sorting & Pagination:

module.exports = (req, res, next) => {    

    // SEARCHING: URL?search[key1]=value1&search[key2]=value2
    const search = req.query?.search || {}
    // console.log(search)
    // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
    for (let key in search) search[key] = { $regex: search[key], $options: 'i' } // i: case Insensitive
    // console.log(search)

    // SORTING: URL?sort[key1]=1&sort[key2]=-1 (1: ASC, -1:DESC)
    const sort = req.query?.sort || {}
    // console.log(sort)

    // PAGINATION: URL?page=1&limit=10
    // const limit = req.query?.limit || 20
    // let limit = req.query?.limit || (process.env?.PAGE_SIZE || 20)
    // limit = Number(limit)
    let limit = Number(req.query?.limit)
    limit = limit > 0 ? limit : Number(process.env?.PAGE_SIZE || 20)
    // console.log('limit', typeof limit, limit)

    let page = Number(req.query?.page)
    page = (page > 0 ? page : 1) - 1 // Backend'de sayfaNo her zaman -1'dir.
    // console.log('page', typeof page, page)

    let skip = Number(req.query?.skip) // İstenirse url'de ?skip=10 gibi değer gönderilebilir.
    skip = skip > 0 ? skip : (page * limit)
    // console.log('skip', typeof skip, skip)

    // RUN:
    req.getModelList = async (Model, populate = null) => {

        return await Model.find(search).sort(sort).skip(skip).limit(limit).populate(populate)
    }

    // Details:
    req.getModelListDetails = async (Model) => {
        const data = await Model.find(search)
        let details = {
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }

    next()
}