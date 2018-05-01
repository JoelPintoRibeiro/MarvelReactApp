import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoList from './TodoList';
import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom';


const TestJoel = () => <h1>Hello Character!</h1>

class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      term: '',
      counter: 0,
    }
  }ù


  onChangeTerm = (event) => {
    this.setState({ term: event.target.value });
  }

  onTermAdded = (event) => {
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();

    var val = this.state.term.trim();

    if (val) {
      this.setState({ items: [...this.state.items, this.state.term] })
      this.setState({ term: '' })
      this.setState({ counter: this.counter + 1 })
    }
  }
  onRemoveItem = (item) => {

    var itemsFiltered = this.state.items.filter(function (candidate) {
			return candidate !== item;
    });
    
    this.setState({items:itemsFiltered});

    console.log(item);
  }

  render() {
    return (
   

      <div className="row">
         <div>
      {/* <Switch>
      <Route exact path='/about-me' component={TestJoel}/>
    </Switch> */}
  </div>
        <div className="col-md-12">
          <span>Todo App Created By Joel Pinto Ribeiro</span>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "15px" }}>
              <input type="text" placeholder="Please enter a todo" value={this.state.term} onKeyDown={this.onTermAdded} onChange={this.onChangeTerm} autoFocus={true}>
              </input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12" style={{ marginTop: "15px" }}>
           {
            this.state.items.map((elem,index) => {0
                     return <TodoList key={index} item={elem} index={index} onRemoveItem={this.onRemoveItem.bind(this,elem)} />
                    })

                  }
            
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default TodoComponent;