import React, {Component} from 'react';

export default class TaskForm extends Component{
    state = {
        title: '',
        description: ''
    }
    save = e=>{
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }
    change = e=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.save}>
                <br />
                <input type="text" name="title" placeholder="Nueva tarea" onChange={this.change} value={this.state.title} />
                <br /><br />
                <textarea name="description" placeholder="Descripcion" onChange={this.change} value={this.state.description}></textarea>
                <br /><br />
                <button type="submit">Guardar tarea</button>
            </form>
        )
    }
}