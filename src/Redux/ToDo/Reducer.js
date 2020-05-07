import {Toggle_TODO, Insert_TODO} from "./Types";

const initialState = {
    data: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Insert_TODO:
            return {
                ...state,
                data: [
                    ...state.data,
                    {
                        id: action.payload.id,
                        content: action.payload.content,
                        complete: false
                    }
                ]
            }


        case Toggle_TODO:
            const {id} = action.payload
            return {
                ...state,
                data: state.data.map((row) => {
                    if (row.id === id) {
                        return {
                            id: row.id,
                            content: row.content,
                            complete: !row.complete
                        }
                    } else {
                        return row
                    }

                })
            }


        default :
            return state

    }

}

export default Reducer;