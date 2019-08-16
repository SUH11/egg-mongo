module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    const UserSchema = new Schema({
        name: {
            type: String
        },
        age: {
            type: Number
        },
        sex: {
            type: String
        },
        job: {
            type: String
        },
        lastTime: {
            type: Number
        }
    })

    const User = mongoose.model('Users', UserSchema)

    initUserData(User)

    return User
}

/**
 * 初始化一个测试用户
 * @param {Object} User 
 */
function initUserData(User) {
    User.find({}, (err, doc) => {
        if (err) {
            console.log(err)
            console.log('init user failed')
        } else if (!doc.length) {
            new User({
                name: 'UserInitName',
                age: 23,
                sex: 'girl',
                job: '程序媛',
                lastTime: Date.now()
            }).save()
        } else {
            console.log('-------------init user successfully--------------')
        }
    })
}