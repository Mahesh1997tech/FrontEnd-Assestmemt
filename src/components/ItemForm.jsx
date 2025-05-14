// src/components/ItemForm.js
import React, { useState, useEffect } from 'react';
import './ItemForm.css';

const ItemForm = ({ onAdd, onUpdate, editingItem }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (editingItem) {
      setName(editingItem.itemName);
      setDesc(editingItem.description);
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = {
      itemName: name,
      description: desc,
    };

    if (editingItem) {
      onUpdate(editingItem._id, item);
    } else {
      onAdd(item);
    }

    setName('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ItemForm;
