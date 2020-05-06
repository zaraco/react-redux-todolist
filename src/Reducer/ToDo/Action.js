import {Toggle_TODO, Insert_TODO} from "./Types";


let initialId = 0

export const insertTodo = row => {
    return{
        type: Insert_TODO,
        payload: {
            id: ++initialId,
            content: row
        }
    }
}

export const toggleTodo = id => {
    return{
        type: Toggle_TODO,
        payload: {
            id

        }
    }
}


