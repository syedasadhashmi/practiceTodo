import {
  Box,
  Button,
  Center,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from './ui/layout';
const Details = ({ todoData }) => {
  const { id } = useParams();
  //   const id = params.id;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem('todos'));
    console.log(getData);
    setDetails(getData);
  }, []);
  console.log(JSON.parse(localStorage.getItem('todos')));
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
            {details?.map(item => {
              if (item.id === id) {
                return (
                  <div key={item.id}>
                    <FormLabel>Description ID</FormLabel>
                    <Input
                      value={item.id}
                      size="md"
                      style={{ border: '1px solid' }}
                      readOnly
                    />
                    <FormLabel>Title</FormLabel>
                    <Input
                      value={item.title}
                      size="md"
                      style={{ border: '1px solid' }}
                      readOnly
                    />
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      value={item.description}
                      size="lg"
                      style={{ border: '1px solid' }}
                      readOnly
                    />
                  </div>
                );
              }
            })}
            <Center>
              <Link to={'/'}>
                <Button colorScheme="teal" mt={4}>
                  Back
                </Button>
              </Link>
            </Center>
          </Box>
        </Box>
      </Center>
    </Layout>
  );
};

export default Details;
