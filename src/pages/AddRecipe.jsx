import React, { useState } from 'react';
import axios from 'axios';
import styles from './AddRecipe.module.css'; // Importa o arquivo CSS do módulo

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://jsonplaceholder.typicode.com/posts', { title, body });
      alert('Recipe added successfully');
      // Reset form fields
      setTitle('');
      setBody('');
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Failed to add recipe');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Adicionar Receita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="body">Instructions:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        </div>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
