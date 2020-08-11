import React from 'react';
import './App.css';
import { CarList } from './CarList';
import { getCars } from './api'

function App() {
  const [carList, setCarList] = React.useState([])
  const [viewedList, setViewedList] = React.useState("4wd")

  React.useEffect(() => {
    getCars(viewedList)
    .then(res => {
      console.log("res", res)
      setCarList(res)
    })
  },[viewedList])

  const toggleList = React.useCallback(() => {
    if(viewedList === "4wd") {
      setViewedList("supercar")
    }
    else {
      setViewedList("4wd")
    }
  }, [viewedList])

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleList}>Switch Lists</button>
        <h1>Current: {viewedList}</h1>

        <CarList title="" carList={carList}/>
      </header>
    </div>
  );
}

export default App;
