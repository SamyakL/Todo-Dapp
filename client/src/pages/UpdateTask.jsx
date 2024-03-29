import Navigation from "./Navigation";
import {useState} from "react";

const UpdateTask =({state}) =>{
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const closeModal = () => {
      setModalVisible(false);
      setModalContent("");
    };


    const {contract,account}=state;
    const updateTask =async(event)=>{
        event.preventDefault();
        const taskName = document.querySelector("#taskName").value;
        const taskDate = document.querySelector("#taskDate").value;
        const taskID = document.querySelector("#taskID").value;
        try{
            const res = await fetch("http://localhost:3000/api/ethereum/update-task",
            {
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body: JSON.stringify({taskDate:taskDate})
            }
            )
            // console.log("printing the res:")
            // console.log(res);
            const data = await res.json();
                // console.log(data);
            if(data.status===200){
                console.log("UPDATAIOON KA IF");
                await contract.methods.updateTask(taskID,taskName,taskDate).send({from:account});
            }
            else{
                throw new Error ("Task cannot be updated due to date clash");
            }
            
        }
        catch (error){
            console.log(error);
        }
    }
    return( <>
    <Navigation/>
    <div className="update_task todo_btn">
        <form onSubmit={updateTask}>
          <label>
            ID:
            <input id="taskID" />
          </label>
          <label>
            Name:
            <input id="taskName" />
          </label>
          <label>
            Date:
            <input id="taskDate" type="date" />
          </label>
          <button type="submit">Update Task</button>
        </form>

        {modalVisible && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <p>{modalContent}</p>
            </div>
          </div>
        )}
      </div>
    </>
);
}
export default UpdateTask;