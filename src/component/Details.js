import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <div>
      Details {id}
      {details?.map(item => {
        if (item.id === id) {
          return (
            <div key={item.id}>
              <h4>Todo Title: {item.title}</h4>
              <h4>Todo Description: {item.description}</h4>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Details;
