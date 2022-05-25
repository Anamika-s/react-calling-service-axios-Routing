import React, { Component } from 'react'
import axios from 'axios';
export default class PersonEdit extends Component {
  state=
 { name:'',
    id:''
 }
 handleChange = event=>
 {
  this.setState({name : event.target.value}); 
   
  this.setState({id : event.target.value}); 
 }

 handleSubmit = event=>
 {
   event.preventDefault();
    
   const user = 
   {
     name: this.state.name 
   }
   axios.put(`https://jsonplaceholder.typicode.com/users/${this.state.id}` ,{user})
   .then(res=> 
   {
     console.log(res);
     console.log(res.data);

   })
 }

  
  render() {
    return (
        <> 
         

      <h2>Edit Person</h2>
      <form onSubmit={this.handleSubmit}>
        <div>
        <label>
          Enter Id
        </label>
        <input type="text" name="id" onChange={this.handleChange}/>
        </div>

        <div>
        <label>
          Enter Name
        </label>
        <input type="text" name="name" onChange={this.handleChange}/>
        </div>
<button type='submit'> Submit </button>
      </form>
      </>

       
    )
  }
}
