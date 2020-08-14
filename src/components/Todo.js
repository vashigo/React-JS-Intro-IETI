import React from 'react';

export class Todo extends React.Component {

    render() {

        return (  
            <div>
                <center><table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">texto</th>
                            <th scope="col">priority</th>
                            <th scope="col">dueDate</th>
                        </tr>
                        <tr>
                            <th scope="row">{this.props.text.id}</th>
                            <td>{this.props.text.text}</td>
                            <td>{this.props.text.priority}</td>
                            <td>{String(this.props.text.date)}</td>
                        </tr>
                    </thead>
                  
                </table></center>

                <br></br>

            </div>
        );
    }

}