import {useEffect, useState} from 'react';

const Filter = () => {
    const [breeds, setBreeds] = useState<Array<any>>([]);

    useEffect(() => {
      const getBreeds = () => {
        setBreeds([
          {
            breedName: 'dalmata',
            isSelected: false
          },
          {
            breedName: 'dalmata',
            isSelected: false
          },
          {
            breedName: 'golden retriever',
            isSelected: false
          },
          {
            breedName: 'golden retriever',
            isSelected: true
          },
          {
            breedName: 'dalmata',
            isSelected: false
          },
          {
            breedName: 'golden retriever',
            isSelected: true
          },
        ]);
      };

      getBreeds();
    }, []);

    /* const handleOnSelectBreed = (selectedBreed : any) => {
      selectedBreed.isSelected = true;
      selectedBreed.breed;
      setBreeds({...breeds, selectedBreed})
    }; */
    
    return (
      <div className="flex flex-wrap gap-4 pt-6">
          {breeds.map((breed, index) => (
            <p
              key={index}
              className={breed.isSelected ? "px-6 py-2 bg-primary rounded-full border border-secondary cursor-pointer" : "px-6 py-2 bg-white rounded-full border border-black cursor-pointer"}
            >
              {breed.breedName}
            </p>
          ))}
      </div>
    );
};

export default Filter;