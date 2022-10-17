import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Box,
  Textarea,
  Button,
  Divider,
  Heading,
} from '@chakra-ui/react';
import Layout from '../ui/layout';

const Todo = () => {
  const [todoData, setTodoData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');

  const submitHandler = () => {
    if (!title && !description) {
      alert('Enter Both title & description');
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      title: title,
      description: description,
    };
    setTodoData([...todoData, item]);
    console.log(todoData);
    setTitle('');
    setdescription('');
  };
  function deleteHandler(id) {
    const remainedTodo = todoData.filter(i => i.id !== id);
    setTodoData(remainedTodo);
  }
  return (
    <Layout>
      <Box height={'95vh'}>
        <form>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="description"
              value={description}
              onChange={e => setdescription(e.target.value)}
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" onClick={submitHandler}>
            Submit
          </Button>
        </form>
        <Divider />
        <Box>
          <Heading size={'small'}>Todo's List</Heading>
          <ul>
            {todoData.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.title}{' '}
                  <Button onClick={() => deleteHandler(item.id)}>Delete</Button>{' '}
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </Layout>
  );
};

export default Todo;
