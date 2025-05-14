
import React, { useEffect, useState } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/api/item');
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const addItem = async (item) => {
    const res = await fetch('http://localhost:5000/api/item', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const data = await res.json();
    setItems([...items, data]);
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/item/${id}`, {
      method: 'DELETE',
    });
    setItems(items.filter((item) => item._id !== id));
  };

  const updateItem = async (id, updatedData) => {
    const res = await fetch(`http://localhost:5000/api/item/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });
    const data = await res.json();
    setItems(items.map((item) => (item._id === id ? data : item)));
    setEditingItem(null);
  };

  return (
    <div>
      <h1>CRUD Items</h1>
      <ItemForm onAdd={addItem} onUpdate={updateItem} editingItem={editingItem} />
      <ItemList items={items} onDelete={deleteItem} onEdit={setEditingItem} />
    </div>
  );
}

export default App;
