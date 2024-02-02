const express = require('express');
const app = express();
const PORT = 3000;
const cors = require("cors");
const tasks = require('./routes/routes')
app.use(cors());
app.use(express.json());         //we needed this, when create task is called , task date ki sent in a json format!
app.use('/api/ethereum',tasks)
app.listen(PORT, ()=>{
    console.log("Server running in the vscode terminal");
    
})
// const ABI = require("./ABI.json");
// const {Web3} = require("web3");
// const web3 = new Web3("https://hidden-proportionate-snow.ethereum-sepolia.quiknode.pro/be758c09d5c6b241806e1e5c786d2659f523d16f/")      //to get this , went to quicknode dashboard after logging ing waha pe eth sepholia hai, usme http ourl providewr, lene ka!
// const contracAddress = "0x382903598433a0B35F511BeaBE3e5B46D6D13f96";
// const contract = new web3.eth.Contract(ABI, contracAddress);       //creating  contract ka instance, after this we can iteract with the contract
//console.log(contract);      //just  to see it

//app.get("/api/ethereum/view-task/:id",async(req,res)=>{     //"" kke andr kuh bi likh skte hain, its just ki wohi postman me likhneka for that code to run
    // try{
    //     const {id} = req.params;
    //     console.log("request made here");
    //     const task = await contract.methods.viewTask(id).call() ;
    //     const {taskId,name,date} =task;
    //     const numId = Number(taskId);
    //     const taskObj = {
    //         numId,name,date
    //     }
    //     console.log(task);
    //     res.status(404).json({status:200,taskObj,message:"Tasks exists!"});        //status 200 means eve is ok! do bar karne ki jarurat nahi hai, but kr lo
    // }
    // catch(err){
    //     res.status(500).json({status:500,message:"task does not exists!"});     //500 mean not ok!
    //     console.log(err);
    // }
    //})
// app.get("/api/ethereum/all-task/",async(req,res)=>{
//     try{
        
//        // const {id} = req.params;
//         const tasks = await contract.methods.allTask().call();
//         if (tasks.length === 0) {
//             res.status(404).json({ status: 400, message: "No tasks!" });
//         }
        
//         else{
//             const taskList = tasks.map(({id,name,date})=>{       //thispart was tricky, as list aari hai, and usme sari task id BigInt hai!
//                 const taskId = Number (id);
//                 return ({taskId,name,date});
//             })
//             return res.status(200).json({ status: 200, taskList, message: "Well done, Sammy, you just did this by your own!" });
//         }
//         //res.status(200).json({status:200,tasks,message:"Well done , sammy you just did this by your own!"});
//         //console.log(tasks);
//     }
//     catch (err){
//         console.log("printing the all task function error:");
//         res.json("message: error from all task function ")
//         console.log(err);
//     }
    
// })

// const deteclashCheck = async (taskDate) =>{
//     const tasks = await contract.methods.allTask().call();
//     const foundTask = tasks.find(task=>task.date===taskDate);

//     if(foundTask){
//         return foundTask.name;
//     }
//     else{
//         return "No Tasks Found";
//     }
// }        api me tasks.js me dala ye fucntion, model view concept!
//app.post("/api/ethereum/create-task",async (req,res) => {
    // const {taskDate} = req.body;
    // const task = await deteclashCheck(taskDate);
    // try{
    //     console.log("Trying create task");
    //     if(task!=="No Tasks Found") {
    //         res.status(409).json({staus:409,message: "Date clash: task cannot be added"});
    //     }
    //     else{
    //         res.status(200).json({status:200,message:"Task can be added"});
    //     }
    // }
    // catch(error){
    //     console.log(error);
    // }



    // READ:!!!:  the below method , we cannot use that , vbeacuse inorder to perform write opreration on blockchain
    //we are providing the public key of our metamask. But inorder for anyone to make a transaction they need private key!
    //so either we neeed to give the server our private key , which would be against the principal of decentralisation
    //or do something else, 
    // await contract.methods.createtask("taskbypostman","12-12-12").send({from:"0x85f483A6AaE33246CCa72FA94dE3485523DFd80C"});        //now when you to perform writ operation on blockchain fro server, using web3,js, we use send()
    //so for that we will make this in such a way, that server will do only bsic checking and rest will not
    //for that now we will install our react  component!
    //for that split terminal-> cd .. (go back to todo, ie outside of api)->npm create vite@lates->give project name as client->select react,->javascript-> then you get orders for what to do next
    //after perfoming that in clinet in src creaet reqiured pages.
    //then in cleint terminal, install -> npm i react-router-dom        ye isliye taki hum diff pages bana sake within same react application

//})

// app.post("/api/ethereum/update-task",async (req,res)=>{
//     const {taskDate} = req.body;
//     const task = await deteclashCheck(taskDate);
//     try{
//         console.log("Trying create task");
//         if(task!=="No Tasks Found") {
//             res.status(409).json({status:409,message: "Date clash: task cannot be updated as there already a task on that day!"})
//         }
//         else{
//             res.status(200).json({status:200,message:"Task can be updated"})
//         }
//     }
//     catch(error){
//         console.log(error);
//     }
// })

// app.post("/api/ethereum/delete-task",async(req,res)=>{
//     try{
//         res.status(200).json({status:200,message:"on the right track !"});
//     }
//     catch (error){
//         console.log("printing error from delet task server.js");
//         console.log(error);
//     }
// })



//viewTask();