import {Toggle_TODO,Insert_TODO} from "./Types";

const initialState = {
    data : []
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case Insert_TODO:


        case Toggle_TODO:



        default : return state

    }

}

export default Reducer;