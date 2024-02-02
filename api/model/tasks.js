const {contract} = require('../contract/contract')
const deteclashCheck = async (taskDate) =>{
    const tasks = await contract.methods.allTask().call();
    const foundTask = tasks.find(task=>task.date===taskDate);

    if(foundTask){
        return foundTask.name;
    }
    else{
        return "No Tasks Found";
    }
}
module.exports(dateclashCheck);