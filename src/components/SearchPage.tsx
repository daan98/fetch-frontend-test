import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

// Files created or added manually (with no package dependencies)
import { dogImg } from '../assets/img';
import { DogCard } from '.';

/* 
    img: string      - DONE - 
    name: string     - DONE - 
    age: number      - DONE -
    zip_code: string - DONE -
    breed: string    - DONE -
 */

const SearchPage = () => {

    const [isLiked, setIsLiked] = useState(true);


    return (
        <div className="px-2 py-6 flex gap-3 md:px-6">
            <div className="">
                <h1
                    className="text-2xl text-secondary font-bold uppercase  text-center md:text-3xl"
                >
                    Welcome to your favorite and most trusted dog finder
                </h1>
                
                <div className="flex gap-10 flex-wrap justify-center py-10 md:justify-between">
                    <DogCard
                        name='Mila'
                        img={dogImg}
                        isLiked={isLiked}
                        age={2}
                        zip_code='86039'
                        breed='Golden retriever'
                    />
                    {/* {dogs.map(dog => (
                        <DogCard
                            name={dog.name}
                            img={dog.img}
                            isLiked={isLiked}
                            age={dog.age}
                            zip_code={dog.zip_code}
                            breed={dog.breed}
                        />
                    ))} */}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;0