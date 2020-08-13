import React from 'react';

export default class Todo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var li = [{name:"text",value:this.props.text},{name:"priority",value:this.props.priority},{name:"date",value:this.props.dueDate}];
        return (
                    <h2>
                        {li.map((item)=> <div>{item.name+" : "+item.value}</div>)}
                    </h2>
                );
    }

}