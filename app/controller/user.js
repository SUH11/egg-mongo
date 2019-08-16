const Controller = require('egg').Controller

class UserController extends Controller {

    /**
     * 获取用户列表
     */
    async getUserList() {
        const { ctx, service} = this  // 从this获取service
        const users = await service.user.find() 

        ctx.body = {
            code: 0,
            message: 'success',
            data: users
        }
    }
}

module.exports = UserController
