import { useState } from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import CreateTask from "./pages/CreateTask";
import AllTask from "./pages/AllTask";
import DeleteTask from "./pages/DeleteTask";
import Navigation from "./pages/Navigation";
import ViewTask from "./pages/ViewTask";
import Wallet from "./pages/Wallet";
import UpdateTask from './pages/UpdateTask';
//import UpdateTask from "./pages/UpdateTask";
import './App.css'

function App() {

  const [state,setState] = useState({web3:null, contract: null,account:null})
  const saveState = ({web3,contract,account})=>{
    setState({web3:web3,contract:contract,account:account})     //ye sab isliye so that data from wallet.jsx ca be sent to this appjsx
  }
  const router = createBrowserRouter([
    {path:'/',element:<Wallet saveState = { saveState }/>},
    {path:'/view-All-Tasks',element:<AllTask />},
    {path:'/create-Task',element:<CreateTask state={state}/>},
    {path:'/delete-Task',element:<DeleteTask state={state}/>},
    {path:'/view-Task',element:<ViewTask />},
    {path:'/update-task',element:<UpdateTask state={state}/>}
    
  ])

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
