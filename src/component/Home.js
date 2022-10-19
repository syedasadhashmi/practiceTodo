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
import Layout from '../component/ui/layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const [todoData, setTodoData] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);

  const submitHandler = () => {
    if (!title && !description) {
      alert('Enter Both title & description');
      return;
    } else if (title && description && !toggleSubmit) {
      setTodoData(
        todoData.map(item => {
          if (item.id === editItem) {
            return { ...item, title: title, description: description };
          }
          return item;
        })
      );
      setToggleSubmit(true);
      setTitle('');
      setdescription('');
      setEditItem(null);
    } else {
      const item = {
        id: new Date().getTime().toString(),
        title: title,
        description: description,
      };
      setTodoData([...todoData, item]);
      console.log(todoData);
      setTitle('');
      setdescription('');
    }
  };
  function deleteHandler(id) {
    const remainedTodo = todoData.filter(i => i.id !== id);
    setTodoData(remainedTodo);
  }
  function editHandler(id) {
    // const editDetails = todoData.findIndex(i => i.id === id);
    // console.log(todoData[editDetails]);
    // setTitle(todoData[editDetails]?.title);
    // setdescription(todoData[editDetails]?.description);
    setToggleSubmit(false);
    const editFind = todoData.find(i => i.id === id);
    setTitle(editFind.title);
    setdescription(editFind.description);
    setEditItem(id);
    console.log(editFind.id);
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
          {toggleSubmit ? (
            <Button mt={4} colorScheme="teal" onClick={submitHandler}>
              Submit
            </Button>
          ) : (
            <Button mt={4} colorScheme="teal" onClick={submitHandler}>
              Edit
            </Button>
          )}
        </form>
        <Divider />
        <Box>
          <Heading size={'small'}>Todo's List</Heading>
          <ul>
            {todoData.map((item, index) => {
              return (
                <li key={item.id}>
                  {item.title}
                  <Link to={`/Details/${item.id}`}>
                    <Button>Details</Button>
                  </Link>
                  <Button onClick={() => editHandler(item.id)}>Edit</Button>
                  <Button onClick={() => deleteHandler(item.id)}>Delete</Button>
                </li>
              );
            })}
          </ul>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
