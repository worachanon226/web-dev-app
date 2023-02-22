import React from 'react'
import Cards from "./components/Cards"
import './App.css';

function App() {

  const foods = [
    {
      title: "อาหารคาว",
      name: "ข้าวผัด",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://almocooking.com/wp-content/uploads/2019/11/%E0%B8%AD%E0%B8%B2%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B8%88%E0%B8%B5%E0%B8%994.jpg"
    },
    {
      title: "อาหารหวาน",
      name: "บัวลอย",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      img: "https://s3.theasianparent.com/cdn-cgi/image/height=250/tap-assets-prod/wp-content/uploads/sites/25/2022/01/dumplings-in-coconut-cream.jpg"
    }
  ]

  let func = () => {
    console.log("h")
    alert("web dev")
  }

  return (
    <div className="App">
      <h1 className="header">โหวตอาหาร</h1>
      {foods.map((e, idx) =>
        <Cards key={idx} food={e} callback={func} />
      )}
    </div>
  );
}

export default App;
