import Navigation from "./Navigation";
import {useState} from "react";
const DeleteTask =({state}) =>{
    const {contract,account}=state;
    const deleteTask =async(event) =>{
        event.preventDefault();
        const taskID = document.querySelector("#taskID").value;
        try{
            const res = await fetch("http://localhost:3000/api/ethereum/delete-task",{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                }
            }
            )

            const data = await res.json();
            if(data.status===200){
                console.log("nice work till here");
                try{
                    contract.methods.deletetask(taskID).send({from:account});
                }
                catch (error) {
                    console.log("contract delete wala function problem de raha hai :");
                    console.log(error);
                }
            }
            else{
                console.log("status is not 200!");
            }
        }
        catch (error){
            console.log(error);
        }
    }
    return <><Navigation/>
      <div className="delete_task todo_btn">
        <form onSubmit={deleteTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <button type="submit">Delete Task</button>
        </form>
      </div>
    </>
}
export default DeleteTask;