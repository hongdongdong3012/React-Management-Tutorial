import React, { Component } from "react";
import Customer from "./components/Customer";
import "./App.css";

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/any",
    name: "홍길동",
    birthday: "951203",
    gender: "남자",
    job: "대학생"
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/any",
    name: "홍길시",
    birthday: "961203",
    gender: "남자",
    job: "디자이너"
  },
  {
    id: 3,
    image: "https://placeimg.com/64/64/any",
    name: "홍길남",
    birthday: "971203",
    gender: "남자",
    job: "프로그래머"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
