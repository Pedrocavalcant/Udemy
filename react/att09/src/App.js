import React, { Component } from 'react'
import Feed from './components/feed'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: 1, username: 'Matheus', curtidas: 10, comentarios: 2 },
        { id: 2, username: 'Pedro', curtidas: 5, comentarios: 4 },
        { id: 3, username: 'Lucas', curtidas: 20, comentarios: 15 },
        {id:4, username: 'Ricardo', curtidas:0, comentarios:0 }
      ]
    };
  }

  render() {
    return (
      <div>

        {this.state.feed.map((item) => {
          return (
            <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios ={item.comentarios}/>
          )
        })}

      </div>
    );
  }
}

export default App;