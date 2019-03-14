// import React, { Component } from 'react';
// import './App.css';
// import List from './List';

// class App extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         todoItem: '',
//         items: []
//       }
//     }

//     handleSubmit = (event) => {
//       event.preventDefault()
//       this.setState({
//         items : [...this.state.items, this.state.todoItem],
//         todoItem : ''
//       })
//     }

//     handleChange = (event) => {
//       this.setState({
//         todoItem: event.target.value
//       })

//       console.log(this.state.todoItem)
//     }
  
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <input value={this.state.todoItem} onChange={this.handleChange} />
//           <button>Add</button>
//         </form>

//         <List items={this.state.items} />
//       </div>
//     )
//   }
// }

// export default App;

// =====================================================================================

// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//     constructor(props){
//       super(props)
//       this.state = {
//         items: [],
//         isLoading: true
//       }
//     }

//     // otomatis dijalankan
//     componentDidMount(){
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then(response => response.json())
//         .then(data => this.setState({ items: data, isLoading: false }))
//     }

//   render() {
//     const { items,isLoading } = this.state
    
//     if (isLoading) {
//       return <p>Loading Bro . . . .</p>
//     }

//     return (
//       <div>
//         <ul>
//           { items.map((item, index) => 
//             <li key={index}> {item.name} </li>
//           )}
//         </ul>
//       </div>
//     )
//   }
// }

// export default App;

// =====================================================================================
