// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
    if (typeof str === 'number') return str;
    if (!str) return str;
    return parseInt(str, 10) || 0;
}

class UserController extends Controller {
    async index() {
        const ctx = this.ctx;
        console.log(ctx.query);
        const query = {
            limit: toInt(ctx.query.pageSize) || 10,
            offset: (toInt(ctx.query.pageNum) - 1) * toInt(ctx.query.pageSize) || 0
        };
        const results = await ctx.model.User.findAndCountAll(query);
        // ctx.logger.info(results);
        ctx.body = {
            code: 0,
            msg: '操作成功1',
            count: results.count,
            data: results.rows
        }
    }

    async show() {
        const ctx = this.ctx;
        ctx.body = await ctx.model.User.findById(toInt(ctx.params.id));
    }

    async create() {
        const ctx = this.ctx;
        const {
            name,
            age,
            sex
        } = ctx.request.body;
        const user = await ctx.model.User.create({
            name,
            age,
            sex
        });
        console.log(user);
        ctx.body = {
            code: 0,
            msg: '操作成功'
        };
    }

    async update() {
        const ctx = this.ctx;
        const params = ctx.request.body;
        const id = toInt(params.id);
        const user = await ctx.model.User.findById(id);

        if (!user) {
            ctx.body = {
                code: 1,
                msg: '操作失败'
            }
            return;
        }

        const {
            name,
            age,
            sex
        } = ctx.request.body;
        await user.update({
            name,
            age,
            sex
        });
        ctx.body = {
            code: 0,
            msg: '操作成功'
        }
    }

    async destroy() {
        const ctx = this.ctx;
        const id = ctx.request.body.id;
        console.log(id);

        const user = await ctx.model.User.findById(id);
        // console.log(user);
        if (!user) {
            ctx.body = {
                code: 1,
                msg: '操作失败'
            }
            return;
        }
        await user.destroy();
        ctx.body = {
            code: 0,
            msg: '操作成功'
        }
    }
}

module.exports = UserController;