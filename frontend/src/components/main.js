import React, { Component } from 'react';
import axios from 'axios';
import {createRoot} from 'react-dom/client';
const root=createRoot(document.getElementById('root'))
//SIGN UP FORM
class SignUp extends Component{
        state={
            name:"",
            destination:"",
            phone_number:"",
            number_of_days:"",
            dateOfArrival:""
        };
    handleChange1=(e)=>{
        this.setState({
            name:e.target.value,
        });
    }
    handleChange2=(e)=>{
        this.setState({
            destination:e.target.value,
        });
    }
    handleChange3=(e)=>{
        this.setState({
            phone_number:e.target.value,
        });
    }
    handleChange4=(e)=>{
        this.setState({
            number_of_days:e.target.value,
        });
    }
    handleChange5=(e)=>{
        this.setState({
            dateOfArrival:e.target.value,
        });
    }

    buttonClick=()=>{
        const customer={
            name:this.state.name,
            destination:this.state.destination,
            phone_number:this.state.phone_number,
            number_of_days:this.state.number_of_days,
            dateOfArrival:this.state.dateOfArrival
        };
        if(customer.name && customer.name.length>0 &&
            customer.destination && customer.destination.length>0 &&
            customer.phone_number && customer.phone_number.length>0 &&
            customer.number_of_days && customer.number_of_days.length>0 &&
            customer.dateOfArrival && customer.dateOfArrival.length>0)
            {
                axios
                    .post('http://localhost:5000/api/signup',customer,{headers:{"Content-Type" : "application/json"}})
                    .then((res)=>{
                        if(res.data){
                            this.setState({
                                name:"",
                                destination:"",
                                phone_number:"",
                                number_of_days:"",
                                dateOfArrival:""
                            })
                            console.log("all ok")
                            .catch((err)=> console.log(err.response.data));
                        }else{
                            console.log("Input empty");
                        }
                    })
            }
            else{
                console.log(customer.name.length);
                console.log(customer.destination.length);
                console.log(customer.phone_number.length);
                console.log(customer.number_of_days.length);
                console.log(customer.dateOfArrival.length);
            }

    }
    render(){
        return(
            <div style={{color:"white",fontSize:'25px', fontFamily:'Times New Roman', backgroundColor:'black',marginLeft:'300px', marginRight:'300px',border:'2px solid black', padding:'20px'}}>
                Name: <input type="text" onChange={this.handleChange1} value={this.state.name}/><br/>
                Destination: <input type="text" onChange={this.handleChange2} value={this.state.destination}/><br/>
                Phone Number: <input type="number" onChange={this.handleChange3} value={this.state.phone_number}/><br/>
                Number of days: <input type="text" onChange={this.handleChange4} value={this.state.number_of_days}/><br/>
                Date of Arrival(DD/MM/YYYY): <input type="text" onChange={this.handleChange5} value={this.state.dateOfArrival}/><br/>
                <button style={{fontSize:'30px', fontFamily:'Times New Roman', padding:'10px'}} onClick={this.buttonClick}>SIGN UP</button>
            </div>
        );
    }
}
root.render(<SignUp/>)
export default SignUp
