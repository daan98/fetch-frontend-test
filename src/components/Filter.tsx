import {useEffect, useState} from 'react';

import { getBreeds } from '../api';
import { FilterInterface } from '../interface';

const Filter = ( props : FilterInterface) => {

  const {
    breedsToFilter,
    breedsToFilterSetter,
    zipCode,
    minAge,
    maxAge,
    sort
  } = props;
    
  const apiUrl : string = import.meta.env.VITE_API_BASE_URL;
  const [breeds, setBreeds] = useState<Array<string>>([]);
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
    const breedsArray : Array<string> = [...breedsToFilter, ...selectedValues];
    breedsToFilterSetter(breedsArray);
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
    <div className="flex flex-wrap gap-4 pt-6 justify-center">
      <div>
        <h3
          className="text-lg text-secondary font-bold capitalize  text-center pb-2 md:text-xl"
        >
          Breeds
        </h3>

        <select
          className="w-fit rounded-lg p-2 text-center"
          value={breedsToFilter}
          onChange={(event : any) => handleSelectChange(event)}
          multiple
        >
          {breeds.map((breed, index) => (
            <option key={index} value={breed}>{ breed }</option>
          )
          )}
        </select>
      </div>

      <div className="flex flex-col">
        <label
          className="text-lg text-secondary font-bold capitalize  text-center pb-2 md:text-xl"
          htmlFor="zip_code"
        >
          zip codes
        </label>

        <input
          className=" w-fit rounded-lg p-2 text-center"
          type="text"
          placeholder="separate with space"
          id="zip_code"
          name="zip_code"
          onChange={(event : any) => zipCode(event.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          className="text-lg text-secondary font-bold capitalize  text-center pb-2 md:text-xl"
          htmlFor="min-age"
        >
          Min Age
        </label>

        <input
          className="w-fit rounded-lg p-2 text-center"
          type="number"
          id="min-age"
          name="min-age"
          onChange={(event : any) => minAge(event.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          className="text-lg text-secondary font-bold capitalize  text-center pb-2 md:text-xl"
          htmlFor="max-age"
        >
          Max Age
        </label>

        <input
          className="w-fit rounded-lg p-2 text-center"
          type="number"
          id="max-age"
          name="max-age"
          onChange={(event : any) => maxAge(event.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          className="text-lg text-secondary font-bold capitalize  text-center pb-2 md:text-xl"
          htmlFor="sort"
        >
          Sort by
        </label>

        <input
          className="w-fit rounded-lg p-2 text-center"
          type="text"
          placeholder="asc or desc"
          id="max-age"
          name="max-age"
          onChange={(event : any) => sort(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Filter;