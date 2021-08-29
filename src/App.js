// import logo from './logo.svg';
import { Header } from './myComponents/Header';
import { Addtodo } from './myComponents/Addtodo';
import { Todos } from './myComponents/Todos';
import Footer from './myComponents/Footer';
import {About} from './myComponents/About';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  {/**array of object */ }

  // let todos = [ 
  //   {
  //     sno: 1,
  //     title: "hi i am darshan",
  //     desc: "i am a good person"
  //   },
  //   {
  //     sno: 2,
  //     title: "hi i am mayank",
  //     desc: "i am a good person"
  //   },
  //   {
  //     sno: 3,
  //     title: "hi i am dev",
  //     desc: "i am a good person"
  //   }
  // ]

  // this is the useState format that we have to use
  // const [todos, setTodos] = useState([
  //   {
  //     sno: 1,
  //     title: "hi i am darshan",
  //     desc: "i am a good person"
  //   },
  //   {
  //     sno: 2,
  //     title: "hi i am mayank",
  //     desc: "i am a good person"
  //   },
  //   {
  //     sno: 3,
  //     title: "hi i am dev",
  //     desc: "i am a good person"
  //   }
  // ]);

  if (localStorage.getItem("todos") === null) {
    var initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const [todos, setTodos] = useState(initTodo);

  const onDelete = (todo) => {
    console.log("hi i am delete fun", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);
    // whenever we gonaa update some values so in react we cant change dom value through above cmted code, we have to use useStates

    // filter returns new array
    setTodos(todos.filter((ele) => {
      return ele !== todo; // check each ele and return only those ele which are not equal to selected ele
    }))
    // localStorage.setItem("todos", JSON.stringify(todos));
  }

  const PushTodos = (title, desc) => {
    if (todos.length == 0) {
      var sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    // todos.push(myTodo);
    console.log(myTodo);
    setTodos([...todos, myTodo]);

  }
  //useEffect jyare pn todos change thase tyare te setitem change karse
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    // it should be wrap inside any tag
    <>
      <Router>
        <Header title="To Do" />
        {/* <Header/> */}
        <Switch>

          <Route exact path="/" render={() => {
            return (
              <>
                <Addtodo pushTodos={PushTodos} />
                <Todos todo={todos} onDelete={onDelete} />
              </>
            )
          }} >
          </Route>

          <Route exact path="/about">
            <About/>
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;


