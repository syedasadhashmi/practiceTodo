import React, { useState, useEffect } from 'react';
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
  Center,
} from '@chakra-ui/react';
import Layout from '../component/ui/layout';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import { BiDetail } from 'react-icons/bi';
const getLocalTodos = () => {
  let todoList = localStorage.getItem('todos');
  console.log(todoList);
  if (todoList) {
    return JSON.parse(localStorage.getItem('todos'));
  } else {
    return [];
  }
};

const Home = () => {
  const [todoData, setTodoData] = useState(getLocalTodos());
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoData));
  }, [todoData]);

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
      <Center backgroundColor="#319795">
        <Box height={'95vh'}>
          <Box
            p={5}
            boxShadow={'md'}
            borderRadius={10}
            marginBottom={2}
            marginTop={5}
            backgroundColor="#edf2f7"
          >
            <form>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="title"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  size="lg"
                  style={{ border: '1px solid' }}
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="description"
                  value={description}
                  onChange={e => setdescription(e.target.value)}
                  size="lg"
                  style={{ border: '1px solid' }}
                />
              </FormControl>
              <Center>
                {toggleSubmit ? (
                  <Button mt={4} colorScheme="teal" onClick={submitHandler}>
                    Submit
                  </Button>
                ) : (
                  <Button mt={4} colorScheme="teal" onClick={submitHandler}>
                    Edit
                  </Button>
                )}
              </Center>
            </form>
          </Box>
          <Box p={5} marginTop={3} backgroundColor="#edf2f7" borderRadius={10}>
            <Center p={2}>
              <Heading fontSize={24}>Todo's List</Heading>
            </Center>
            <ul>
              {todoData.map((item, index) => {
                return (
                  <Box
                    boxShadow={'md'}
                    borderRadius={10}
                    margin={2}
                    p={5}
                    key={item.id}
                    width="500px"
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    {item.title}
                    <Box>
                      <Link to={`/Details/${item.id}`}>
                        <Button size={'sm'} marginRight={2}>
                          <BiDetail />
                        </Button>
                      </Link>
                      <Button
                        size={'sm'}
                        onClick={() => editHandler(item.id)}
                        marginRight={2}
                      >
                        <FiEdit />
                      </Button>
                      <Button
                        size={'sm'}
                        onClick={() => deleteHandler(item.id)}
                      >
                        <MdDelete />
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Center>
    </Layout>
  );
};

export default Home;
