import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = [[{text:"Learn React", priority:5, dueDate: new Date() },
    {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
    {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }],
    {text:'',dueDate:null,priority:0}];
    this.changeText= this.changeText.bind(this);
    this.changePriority= this.changePriority.bind(this);
    this.changeDate=this.changeDate.bind(this);
    this.submit = this.submit.bind(this);
  }

  render(){
    const todos = this.state[0];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          &lt;h1&gt;TODO React App&lt;/h1&gt;
          </p>
            Text: <input type="text" onChange={this.changeText} value={this.state.text}></input>
            priority: <input type="number" onChange={this.changePriority} value={this.state.priority}></input>
            Date: <input type="date" onChange={this.changeDate} value={this.state.dueDate}></input>
            <button onClick={this.submit}>Add</button>
          <TodoList todoList={todos}></TodoList>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  changeText(e){
    this.state[1].text = e.target.value;
    this.setState(this.state)
  }
  changeDate(e){
    console.log(e);
    this.state[1].dueDate= e.target.value;
    this.setState(this.state)
  }
  changePriority(e){
    this.state[1].priority= e.target.value;
    this.setState(this.state)
  }

  submit(e){
    this.state[0].push(this.state[1]);
    this.state[1] = {text:'',date:null,priority:0}; 
    this.setState(this.state);
    console.log(this.state);
  }
 

}

export default App;
