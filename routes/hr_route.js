let express=require('express');
let router=express.Router();
router.get("/viewemployees",(req,res)=>{
    res.send("View employees route");
});
router.post("/assign-task",(req,res)=>{
    res.send("assign task route");
})
// localhost:3000/api/hr/viewtasks => GET
// localhost:3000/api/hr/deleteEmp => Delete
module.exports=router;