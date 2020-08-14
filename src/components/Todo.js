import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {

        return (  
            <div>
                <center><table>
                    <tbody>
                        
                        <tr>
                            <th>id</th>
                            <th>texto</th>
                            <th>priority</th>
                            <th>dueDate</th>
                        </tr>
                        <tr>
                            <td>{this.props.text.id}</td>
                            <td>{this.props.text.text}</td>
                            <td>{this.props.text.priority}</td>
                            <td>{String(this.props.text.date)}</td>
                        </tr>
                    </tbody>
                </table></center>

                <br></br>

            </div>
        );
    }

}