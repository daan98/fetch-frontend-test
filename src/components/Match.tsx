import React, { useEffect, useState } from 'react';

import { DogCard } from '.';
import { postMatchDogs, postDogs } from '../api';
import { DogInterface } from '../interface';

const Match = () => {
  
  const apiUrl : string = import.meta.env.VITE_API_BASE_URL;
  const dogsLiked = localStorage.getItem('dogsLiked');
  const dogsLikedArray : Array<string | null> = [dogsLiked]
  const [matchDog, setMatchDog] = useState<Array<string>>([]);
  const [dogFound, setDogFound] = useState<Array<DogInterface>>([]);

  useEffect(() => {
    const getMatchDog = async () => {
      setMatchDog(await postMatchDogs(apiUrl, dogsLikedArray));
    }
  },  []);

  return (
    <div>
      {/* <DogCard /> */}
    </div>
  );
};

export default Match;