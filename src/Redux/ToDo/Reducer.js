import {Toggle_TODO,Insert_TODO} from "./Types";

const initialState = {
    data : []
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



        default : return state

    }

}

export default Reducer;