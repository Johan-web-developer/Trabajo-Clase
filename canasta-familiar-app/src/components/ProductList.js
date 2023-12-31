import React, { useState } from 'react';

const ProductList = ({ products, onUpdate, onDelete }) => {
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState('');

  const handleEdit = (id, name) => {
    setEditingId(id);
    setNewName(name);
  };

  const handleSave = (id) => {
    onUpdate(id, newName);
    setEditingId(null);
    setNewName('');
  };

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {editingId === product.id ? (
            <>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
              <button onClick={() => handleSave(product.id)}>Guardar</button>
            </>
          ) : (
            <>
              {product.name}
              <button onClick={() => handleEdit(product.id, product.name)}>Editar</button>
              <button onClick={() => onDelete(product.id)}>Eliminar</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
