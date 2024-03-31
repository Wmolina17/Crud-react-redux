import { createSlice } from "@reduxjs/toolkit/react";
import { type PayloadAction } from "@reduxjs/toolkit"

export type UserId = string

export interface User {
    name: string,
    email: string,
    github: string,
}

export interface UserWithId extends User {
    id: UserId
}

const DEFAULT_STATE: UserWithId[] = [
    {
        id: "1",
        name: "miguel duran",
        email: "peter@gmail.com",
        github: "midudev"
    },
    {
        id: "2",
        name: "William Molina",
        email: "will@gmail.com",
        github: "wmolina17"
    },
    {
        id: "3",
        name: "Rose meriño",
        email: "rosa@gmail.com",
        github: "mrose"
    },
] 

const initialState: UserWithId[] = (() => {
    const  persistedState = localStorage.getItem("__redux__state__")
    if(persistedState) return JSON.parse(persistedState).users
    return DEFAULT_STATE
})()



export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()
            state.push({ id, ...action.payload })
            // return [ ...state ]
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id != id)
        },
        updateUsers: (state, action: PayloadAction<UserId>) => {
            
        },
        rollbackUser: (state, action : PayloadAction<UserWithId>) => {
            const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
            
            if(!isUserAlreadyDefined){
                state.push(action.payload)
                // return [...state]
            }
        }
    },
})

export default usersSlice.reducer

export const { addNewUser ,deleteUserById, rollbackUser, updateUsers } = usersSlice.actions