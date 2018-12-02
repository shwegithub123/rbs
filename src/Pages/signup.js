import React, { Component } from 'react';
import './signup.css';
import {withRouter} from 'react-router-dom';


class Signup extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            price: '',
            list: []
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://localhost:1234/products')
            .then(response => response.json())
            .then(parsedJson => this.setState({ list: parsedJson }))
            .catch(error => console.log(error))

    }

    submit = () => {
        let obj = {}
        obj.name = this.state.name;
        obj.price = this.state.price;
        fetch('http://localhost:1234/products',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(res => res.json())
            .then(res => {
                this.fetchData();
            })

    }

    click = (value) => {
        this.props.history.push('/details/'+value._id)
    }

    clear = () => {
        this.state.name = " ";
        this.state.price = " ";
        console.log("hi");
    }
    render() {
        const rows = this.state.list && this.state.list.map((value, index) => {
            return (
                <tr key={index} >
                    <td onClick={()=>this.click(value)}>{value.name}</td>
                    <td>{value.price}</td>
                </tr>
            )
        })
        return (
            <div className="sstop">
                <input className="btm" type="text" placeholder="name" onChange={(event) => this.setState({ name: event.target.value })}></input><br />
                <input className="btm" type="password" placeholder="price" onChange={(event) => this.setState({ price: event.target.value })}></input><br />
                <button onClick={this.submit}>submit</button>
                <button className="Lmarg" onClick={this.clear}>Reset</button>

                <div>
                    <table>
                        <th>
                            <td>name</td>
                            <td>price</td>
                        </th>
                        <tbody>
                            {rows}
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }

}


export default  withRouter(Signup);