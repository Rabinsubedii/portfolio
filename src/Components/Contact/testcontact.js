import React, { Component } from 'react';

class testcontact extends Component {
    constructor()
    {
        super();
        this.state = {
            name:"",
            password: "",
            nameError: "",
            passwordError:""
        }

    }
    Valid() {
        if (!this.state.name.includes("@")&& this.state.password.length<6)
        {
            this.setState({nameError:"Invalid Name", passwordError:"Password length should be more than 6 character"})
        }

        else if (!this.state.name.includes("@"))
        {
            this.setState({nameError:"Invalid Name"})
        }

        else if ( this.state.password.length<6)
        {
            this.setState({passwordError:"Message length should be more than 6 character"})
        }
        else {
            return true;
        }
    }
    submit() {
        this.setState(
            {nameError:"", passwordError:""}
        )
        if (this.Valid()) {
       alert("Sucessfully form submitted")
   }
    }
    render() {
        return (
            <div>
           
          
                        <input type="text" onChange={(event)=>{this.setState({name:event.target.value })}}></input>
                <p style={{ color: "red" }}>{ this.state.nameError}</p>
               
   
                        <input type="password" onChange={(event) => { this.setState({ password: event.target.value }) }}></input>
                        <p  style={{ color: "red" }}>{this.state.passwordError}</p>
                  
                    <button onClick={()=>this.submit()}>Submit</button>
            
            </div>
        );
    }
}
;

export default testcontact;