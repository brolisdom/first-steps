import React, {Component} from 'react';
import './App.css';

import tasks from './sample/tasks.json';

// componentes
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends  Component{
  state = {
    tasks: tasks
  }
  addTask = (title, description)=>{
    const newTask = {
      title: title,
      description: description,
      id: 4
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }
  deleteTask = (id)=>{
    const newTasks = this.state.tasks.filter(task=> task.id !== id);
    this.setState({tasks: newTasks});
  }
  checkDone = (id)=>{
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: newTasks});
  }
  render(){
    return(
      <div>
        <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} checkDone={this.checkDone} />
        <TaskForm addTask={this.addTask} />
      </div>
    )
  }
}

// ejemplos
// function HolaMundo(){
//   return(
//     <div id="hello">Hola mundo</div>
//   )
// }

// propiedades
// function HolaMundo(props){
//   return(
//     <div id="hello">
//       <h1>{props.texto}</h1>
//       {props.sub}
//     </div>
//   )
// }

// estados(clase)
// class HolaMundo extends React.Component{
//   state = {
//     show: true
//   }
//   render(){
//     if(this.state.show){
//       return(
//       <div id="hello">
//         <h1>{this.props.texto}</h1>
//         <p>{this.props.sub}</p>
//         <button onClick={()=> this.setState({show: false})}>Cambiar</button>
//       </div>
//       )
//     } else{
//       return(
//         <div id="hello">
//           <h1>No hay elementos</h1>
//           <button onClick={()=> this.setState({show: true})}>Cambiar</button>
//         </div>
//       )
//     }
//   }
// }

// function App() {
//   return (
//     <div>
//       <p>Este es mi componente: </p>
//       <HolaMundo texto="Hola mundo" sub="Mi nombre es braulio"/>
//       <HolaMundo texto="Hola mundo" sub="Mi nombre es braulio"/>
//     </div>
//   );
// }

export default App;
