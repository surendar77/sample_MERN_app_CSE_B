let express=require('express');
let router=express.Router();
let {users} =require('../models/users');
router.get("/viewemployees",async (req,res)=>{
    let result=await  users.find();
    res.send(result);
});
router.post("/assign-task",(req,res)=>{
    res.send("assign task route called");
})



router.delete("/deleteemployee/:id",async (req,res)=>{
    let result=await users.findByIdAndDelete(req.params.id)
    if(result){
        res.send("employee deleted success");
    }else{
        res.send("no user found");
    }
})
//in postman => choose delete method
//localhost:3000/api/hr/deleteemployee/6ab0d4278b577c7452bd4246





module.exports=router;