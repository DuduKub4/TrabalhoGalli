import React, { useState } from 'react';
import { FormContainer, FormGroup, Label, Input, TextArea, Button } from '../styled-components/AddRecipeStyles';

const AddRecipe = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleAddRecipe = () => {
    const newRecipe = { id: Math.random().toString(), title, description };
    onAddRecipe(newRecipe);
    setMessage('Receita adicionada');
    setTimeout(() => setMessage(''), 3000); // Limpa a mensagem após 3 segundos
    setTitle('');
    setDescription('');
  };

  return (
    <FormContainer>
      <FormGroup>
        <Label htmlFor="title">Título:</Label>
        <Input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="description">Descrição:</Label>
        <TextArea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
      </FormGroup>
      <Button onClick={handleAddRecipe}>Adicionar Receita</Button>
      {message && <p>{message}</p>} {/* Exibe a mensagem se existir */}
    </FormContainer>
  );
};

export default AddRecipe;
