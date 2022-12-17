import { useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

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
  const editText = (id, newText) => {
    const currentItem = items.filter((item) => item.id === id);
    const newItem = {
      id: currentItem.id,
      value: newText,
    }
    deleteItem(id);
    setItems((oldList) => [...oldList, newItem]);
    setUpdatedText("");
    setShowEdit(-1);
  }

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
              <div key={item.id}>
                <li onClick={()=>{
                  setShowEdit(item.id);
                }}>
                  <span>{item.value}</span>
                  <button onClick={() => {
                    deleteItem(item.id);
                  }}
                  >
                    X</button>
                </li>
                {showEdit == item.id && (<div>
                  <input type="text" value={updatedText} onChange={(e) => {
                    setUpdatedText(e.target.value);
                  }} />
                  <button onClick={() => {
                    editText(item.id, updatedText)
                  }}>Update</button>
                </div>)}
              </div>
            )

          })
        }
      </ul>
    </div>


  )

}

export default App;
