import React from 'react';
import {Todo} from '../components/Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return (  
            <div>
                {this.props.items.map((element,i) => (

                        <Todo text = {element} key={i}></Todo>

                    ))
                }
            </div>
        );
    }

}