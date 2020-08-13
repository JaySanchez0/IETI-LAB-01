import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <ul>
                {this.props.todoList.map((item,i)=>
                    <li><Todo key={'todo_'+i} text={item.text} priority={item.priority} dueDate={item.dueDate}></Todo></li>
                )}
            </ul>
        )
    }
}