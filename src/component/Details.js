import React from 'react';
import { useParams } from 'react-router-dom';
const Details = () => {
  const params = useParams();
  const id = params.id;
  return <div>Details {id}</div>;
};

export default Details;
