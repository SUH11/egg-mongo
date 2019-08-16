const Service = require('egg').Service

class UserSevice extends Service {

    /**
     * 查询所有的user
     */
    async find() {
        // 从数据库里查询
        const users = await this.ctx.model.User.find({})

        return Object.assign({}, {
            pageNum: 1,
            pageSize: 10,
            list: users
        })
    }
}

module.exports = UserSevice