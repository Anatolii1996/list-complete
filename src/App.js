import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!newItem) {
      alert("Enter some text");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    }
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  };
  const deleteItem = (id) => {
    const newArr = items.filter((item) => item.id !== id);
    setItems(newArr);
  };

  return (
    <div className='app'>
      <h1>ToDo list</h1>

      <input type="text" placeholder='Add an item...' value={newItem} onChange={
        (e) => {
          setNewItem(e.target.value);
        }
      } />
      <button onClick={addItem}>Add</button>
      <ul>
        {
          items.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.value}</span>
                <button onClick={() => {
                  deleteItem(item.id);
                }}
                >
                  X</button>
              </li>
            )

          })
        }
      </ul>
    </div>


  )

}

export default App;
