import './App.css'
import { ListOfUsers } from './components/ListOfUsers'
import { CreateNewUser } from "./components/CreateNewUser"
import { Toaster } from "sonner"
import { UpdateUser } from './components/updateUser'

function App() {

  return (
    <>
      <h1 style={{ fontSize:"25px", fontWeight:"bold" }}>REACT  CRUD </h1>
      <br />
      <ListOfUsers></ListOfUsers>
      <br />
      <CreateNewUser></CreateNewUser>
      <Toaster richColors expand={true}></Toaster>
      <UpdateUser></UpdateUser>
    </>
  )
}

export default App
