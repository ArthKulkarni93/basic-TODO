const express = require('express');
const cors = require('cors');
const { create_Todo, update_Todo } = require('./types');
const { todo_Table } = require('./db');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/todo',async (req,res)=>{
    const payload = req.body;
    const parsed = create_Todo.safeParse(payload);

    if(!parsed.success){
        return res.json({
            msg:"enter correct credentials"
        })
    }

    await todo_Table.create({
        title:req.body.title,
        description : req.body.description,
        completed : false
    })
    res.json({
        msg:"todo created "
    })
})

app.get('/todos',async (req,res)=>{
    const todos = await todo_Table.find({});
    
    res.json({
        todos 
    })
})

app.put('/completed',async (req,res)=>{
    const parsed = update_Todo.safeParse(req.body);
    
    if(!parsed.success) {
        return res.json({
            msg:"no such todo found"
        })
    }

    await todo_Table.updateOne({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo is completed"
    })



})

app.listen(3000,()=>console.log("running on 3000"));