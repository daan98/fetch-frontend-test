import {useEffect, useState} from 'react';

import { getBreeds } from '../api';

const Filter = () => {
    
  const apiUrl : string = import.meta.env.VITE_API_BASE_URL;
  const [breeds, setBreeds] = useState<Array<string>>([]);
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [dogsToFilter, setDogsToFilter] = useState<Array<string>>([]);
  /* const dogsToFilter = localStorage.setItem('dogsToFilter', JSON.stringify([])); */

  useEffect(() => {
    const getFetchedBreeds = async () => {
      setBreeds(await getBreeds(apiUrl));
    };

    getFetchedBreeds();
  }, []);

  /* useEffect(() => {

  }, [dogsToFilter]); */

  /* const handleOnSelectBreed = (selectedBreed : any) => {
    selectedBreed.isSelected = true;
    selectedBreed.breed;
    setBreeds({...breeds, selectedBreed})
  }; */

  const handleSelectChange = (event : any) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option : any) => option.value);
    console.log('handleSelectChange: ', event.target.selectedOptions);
    console.log('selectedValues: ', selectedValues);
    const breedsArray : Array<string> = [...dogsToFilter, ...selectedValues];
    setDogsToFilter(breedsArray);
    console.log(breedsArray);
  };
    
  return (
    /* 
    {
          if (isShowMore) {
            return (
              <p
                key={index}
                className={dogsToFilter.find((clickedBreed : string) => clickedBreed === breed) ? "px-6 py-2 bg-primary rounded-full border border-secondary cursor-pointer" : "px-6 py-2 bg-white rounded-full border border-black cursor-pointer"}
                onClick={() => setDogsToFilter([...dogsToFilter, breed])}
              >
                {breed}
              </p>
            );
          } else {
            if (index <= 9) {
              return (
                <p
                  key={index}
                  className={dogsToFilter.find((clickedBreed : string) => clickedBreed === breed) ? "px-6 py-2 bg-primary rounded-full border border-secondary cursor-pointer" : "px-6 py-2 bg-white rounded-full border border-black cursor-pointer"}
                  onClick={() => setDogsToFilter([...dogsToFilter, breed])}
                >
                  {breed}
                </p>
              );
            }
          }
        }
     */
    <div className="flex flex-wrap gap-4 pt-6">
      <select className="w-1/4" value={dogsToFilter} onChange={(event : any) => handleSelectChange(event)} name="" id="" multiple>
        {breeds.map((breed, index) => (
          <option key={index} value={breed}>{ breed }</option>
        )
        )}
      </select>
        
      <button
        className="duration-300 ease-in-out transition-all hover:text-secondary hover:cursor-pointer hover:duration-300 hover:ease-in-out hover:transition-all"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        { !isShowMore ? "Show more..." : "Show less..." }
      </button>
    </div>
  );
};

export default Filter;