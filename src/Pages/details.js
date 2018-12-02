import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Details extends Component {
    constructor(){
        super();
        this.state = {
            details : {}
        }
    }

    componentDidMount(){
       
        if(this.props.match.params && this.props.match.params.id){
            this.fetchData(this.props.match.params.id)
        }
    }


    fetchData = (id) => {
        fetch('http://localhost:1234/products/'+id)
            .then(response => response.json())
            .then(parsedJson => this.setState({ details: parsedJson }))
            .catch(error => console.log(error))
    }
    back = () =>{
        this.props.history.push('/signup')
    }
    render(){
    
        return(
            <div className="sstop">
                    <input type="button" onClick={this.back} value="Back" />
                    <label>{this.state.details && this.state.details.name}</label><br/>
                    <label>{this.state.details && this.state.details.price}</label><br/>
                    <label>{this.state.details && this.state.details.qty}</label><br/>
            </div>
           
        )
    }
}

export default withRouter(Details)