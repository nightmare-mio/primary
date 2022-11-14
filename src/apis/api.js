/*
 * @Author: wanglongwei wanglongwei@yuqiaotech.com
 * @Date: 2022-07-17 23:08:21
 * @LastEditTime: 2022-11-15 00:28:50
 * @Description: 
 */


const catalogues = {
    get: "/api/catalogue/getindex",
}

const articles = {
    preview: "/api/article/articlepreview",
    note: "/api/article/note",
    dynamic: "/api/article/dynamic",
    articleid: '/api/article/'
}

const friendChain = {
    get: "/api/friendchain",
}

const auth = {
    user: "/api/auth/user"
}

const commentapi = {
    add: '/api/comment'
}
const poem = {
    kuangsan: '/api/poem/kuangsan'
}

export { catalogues, articles, friendChain, auth, commentapi, poem }