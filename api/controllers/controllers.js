const {contract} = require('../contract/contract');
const [dateclashCheck] = require('../model/tasks');
const createTask = async(req,res)=>{
    const {taskDate} = req.body;
    const task = await deteclashCheck(taskDate);
    try{
        console.log("Trying create task");
        if(task!=="No Tasks Found") {
            res.status(409).json({staus:409,message: "Date clash: task cannot be added"});
        }
        else{
            res.status(200).json({status:200,message:"Task can be added"});
        }
    }
    catch(error){
        console.log(error);
    }
}
const updateTask = async(req,res)=>{
    const {taskDate} = req.body;
    const task = await deteclashCheck(taskDate);
    try{
        console.log("Trying create task");
        if(task!=="No Tasks Found") {
            res.status(409).json({status:409,message: "Date clash: task cannot be updated as there already a task on that day!"})
        }
        else{
            res.status(200).json({status:200,message:"Task can be updated"})
        }
    }
    catch(error){
        console.log(error);
    }
}
const deleteTask = async(req,res)=>{
    try{
        res.status(200).json({status:200,message:"on the right track !"});
    }
    catch (error){
        console.log("printing error from delet task server.js");
        console.log(error);
    }
}
const viewTask = async(req,res)=>{
    try{
        const {id} = req.params;
        console.log("request made here");
        const task = await contract.methods.viewTask(id).call() ;
        const {taskId,name,date} =task;
        const numId = Number(taskId);
        const taskObj = {
            numId,name,date
        }
        console.log(task);
        res.status(404).json({status:200,taskObj,message:"Tasks exists!"});        //status 200 means eve is ok! do bar karne ki jarurat nahi hai, but kr lo
    }
    catch(err){
        res.status(500).json({status:500,message:"task does not exists!"});     //500 mean not ok!
        console.log(err);
    }
}
const viewAllTask = async(req,res)=>{
    try{
        
        // const {id} = req.params;
         const tasks = await contract.methods.allTask().call();
         if (tasks.length === 0) {
             res.status(404).json({ status: 400, message: "No tasks!" });
         }
         
         else{
             const taskList = tasks.map(({id,name,date})=>{       //thispart was tricky, as list aari hai, and usme sari task id BigInt hai!
                 const taskId = Number (id);
                 return ({taskId,name,date});
             })
             return res.status(200).json({ status: 200, taskList, message: "Well done, Sammy, you just did this by your own!" });
         }
         //res.status(200).json({status:200,tasks,message:"Well done , sammy you just did this by your own!"});
         //console.log(tasks);
     }
     catch (err){
         console.log("printing the all task function error:");
         res.json("message: error from all task function ")
         console.log(err);
     }
}
module.exports={
    createTask,
    updateTask,
    deleteTask,
    viewAllTask,
    viewTask
}