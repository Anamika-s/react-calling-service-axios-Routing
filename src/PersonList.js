import React, { Component } from 'react'
import axios from 'axios';

export default class PersonList extends Component {
  state=
  {
    persons : []
  }
  componentDidMount()
  {
  // axios.get('https://jsonplaceholder.typicode.com/users')
  axios.get('http://localhost:8000/users')
  .then(res=>
    {
      const persons = res.data;
      
      this.setState({persons: res.data})
    // console.log(res.data);
    // console.log(this.state);
    })
  }
  render() {
    return (
      <>
      <h2> PersonList </h2>
            <ul>
          {
            this.state.persons.map(person=>
              
                <li> {person.name} </li>
            )
              }
            

            </ul>   
          </>
    )
  }

}
