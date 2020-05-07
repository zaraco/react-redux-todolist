import React, {Component} from 'react';
import {connect} from 'react-redux';
import {insertTodo} from '../Redux/ToDo/Action.js'


class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    clickHandler = () =>{
        this.props.insertTodo (this.state.input)
        this.setState({input: ''})
    }


    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.changeHandler}/>
                <button onClick={this.clickHandler}>New</button>
            </div>
        );
    }
}

export default connect(null,{insertTodo}) (AddToDo) ;