import React, {Component} from 'react';


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

    clickHandler


    render() {
        return (
            <div>
                <input type='text' value={this.state.input} onChange={this.changeHandler}/>
                <button onClick={this.clickHandler}>New</button>
            </div>
        );
    }
}

export default AddToDo;