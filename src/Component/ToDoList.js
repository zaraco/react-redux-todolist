import React from 'react';
import ToDo from './ToDo'
import {connect} from "react-redux";

const ToDoList = (props) => {
    console.log(props.todos)
    return (
        <div>
            <ul>
                {props.todos && props.todos.length ?
                    props.todos.map((row, index) => {
                        return <ToDo key={index} row={row}/>
                    })

                    : <li> Nothing </li>}
            </ul>

        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.data
    }
}

export default connect(mapStateToProps)(ToDoList);