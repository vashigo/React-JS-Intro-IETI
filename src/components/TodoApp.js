import React from 'react';
import {TodoList} from '../components/TodoList';
import '../css/TodoApp.css';

export class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items: [], 
                    text: '', 
                    priority:'' };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    render() {
      return (
        <div>
          <h3>TODO</h3>
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <div>
                <div>
                    <label htmlFor="new-todo">
                    Ingrese Texto
                    </label>
                </div>
                <input
                id="new-todo"
                name="text"
                onChange={this.handleChange}
                value={this.state.text}
                />
            </div>
            <div>
                <label>
                    Ingrese Prioridad:
                </label>
            </div>
            <div>
                <select name="priority" value={this.state.priority} onChange={this.handleChange}>
                    <option value="">Seleccione Prioridad</option>
                    <option value="1">Uno</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                    <option value="4">Cuatro</option>
                    <option value="5">Cinco</option>
                </select>
            </div>
            <br></br>
            <button>
              Add #{this.state.items.length + 1}
            </button>
          </form>
        </div>
      );
    }
  
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
      if (!this.state.text.length) {
            alert("el campo texto esta vacio!");
      }
      else if(!this.state.priority.length){
        alert("ingrese una prioridad diferente de 0!");
      }
      else{
      const newItem = {
        text: this.state.text,
        priority: this.state.priority,
        date: new Date(),
        id: this.state.items.length + 1
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        text: ''
      }));}
    }
  }