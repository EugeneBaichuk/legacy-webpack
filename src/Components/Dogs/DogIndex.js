import React, { useState, useEffect } from 'react';
import { Button, Spinner } from 'reactstrap';
import axios from 'axios';

import './Dogs.css';

const DogIndex = ({text}) => {
  const [url, setUrl] = useState('');

  const handleFetchDogImg = async () => {
    const res = await axios.get('https://dog.ceo/api/breeds/image/random');
    setUrl(res.data.message);
  };

  useEffect(() => {
    handleFetchDogImg();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <section className="section">
          <div className="d-flex justify-content-center mb-4">
            <Button color="secondary" onClick={handleFetchDogImg}>
              {text}
            </Button>
          </div>
          <div className="d-flex justify-content-center align-items-center border dog-container">
            {url ? 
              <img src={url} alt="Dog" className='dog-img' /> :
              <Spinner />
            }
          </div>
        </section>
      </div>
    </div>
  );
};

export default DogIndex;