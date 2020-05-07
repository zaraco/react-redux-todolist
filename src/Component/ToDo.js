import React from 'react';
import {connect} from "react-redux";
import {toggleTodo} from '../Redux/ToDo/Action'

const ToDo = (props) => {
    return (
        <React.Fragment>
            <li onClick={()=> props.ttoggleTodo(props.row.id)}>
                {props.row && props.row.complete ? <span style={{color: 'green'}}>Done</span>
                : <span style={{color: 'red'}}>To do</span>} - {props.row.content}
            </li>
            
        </React.Fragment>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        ttoggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(null,mapDispatchToProps)(ToDo);