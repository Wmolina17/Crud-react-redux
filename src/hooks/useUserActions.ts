import { useAppDispatch } from "../hooks/store"
import { User, UserId, addNewUser, deleteUserById, updateUsers } from "../users/slice";

export const useUserActions = () => {
    const dispatch = useAppDispatch()

    const RemoveUser = ( id: UserId ) => {
        dispatch(deleteUserById(id))
    }

    const addUser = ( { name, email, github }:User ) => {
        dispatch(addNewUser({ name, email, github }))
    }

    const updateUser = ({ name, email, github }:User ) => {
        dispatch(updateUsers({name, email, github}))
    }
 
    return { addUser, RemoveUser, updateUser }
}