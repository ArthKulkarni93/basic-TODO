const zod = require("zod");

const create_Todo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const update_Todo = zod.object({
    id : zod.string()
})

module.exports = {
    create_Todo,
    update_Todo
}