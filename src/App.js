import React, { Component } from 'react';

class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = 
    {
      items : [],
      isLoaded: false,
    }
  }

  componentDidMount()
  {
    fetch('http://127.0.0.1:5000/users/details')
      .then(res => res.json())
      .then(json => {
        this.setState(
          {
            isLoaded: true,
            items: json,
          }
        )
      });
  }

  render()
  {

    var { isLoaded, items } = this.state;

    return(
      <div className="App">
         
            {items.map(item =>(
              <li>
                Data: {item.email} | {item.first_name} 
              </li>
            ))};
         
      </div>
    );
  }
}
export default App;