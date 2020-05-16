import React, {Component} from 'react';

class Task extends Component{
    Style(){
        return{
            color: this.props.task.done ? 'gray': 'black',
            textDecoration: this.props.task.done ? 'line-through': 'none' 
        }
    }
    render(){
        const {task} = this.props;
        return(
            <div style={this.Style()}>
                {task.title} - 
                {task.description}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
                <button onClick={this.props.deleteTask.bind(this, task.id)}>x</button>
            </div>
        )
    }
}

export default Task;
