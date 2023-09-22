import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Files created or added manually (with no package dependencies)
import { dogImg } from '../assets/img';
import { DogCard, Filter, Footer, Header, Match } from '.'

/* 
    img: string      - DONE - 
    name: string     - DONE - 
    age: number      - DONE -
    zip_code: string - DONE -
    breed: string    - DONE -
 */

const SearchPage = () => {

    const [isLiked, setIsLiked] = useState(true);
    const dogs = [
        {
            index: 1,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 2,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 3,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 4,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 5,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 6,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
        {
            index: 7,
            name: "Mila",
            img: dogImg,
            isLiked: false,
            age: 2,
            zip_code: "86039",
            breed: "Golden Retriever"
        },
    ];

    return (
        <>
            <div className="px-2 py-6 flex gap-3 md:px-6">
                <div className="">
                    <Header />

                    <Match />
                    <h1
                        className="text-2xl text-secondary font-bold uppercase  text-center md:text-3xl"
                    >
                        Welcome to your favorite and most trusted dog finder
                    </h1>

                    <Filter />

                    <button
                        type="button"
                        className="bg-secondary px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all flex gap-2 flex-wrap items-center mx-auto my-0 hover:bg-secondaryHover hover:text-white hover:duration-300 hover:ease-in-out hover:transition-all"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    
                    <div className="flex gap-10 flex-wrap justify-center py-10 ">
                        {/* <DogCard
                            name='Mila'
                            img={dogImg}
                            isLiked={isLiked}
                            age={2}
                            zip_code='86039'
                            breed='Golden retriever'
                        /> */}
                        {dogs.map((dog, index) => (
                            <DogCard
                                key={index}
                                name={dog.name}
                                img={dog.img}
                                isLiked={dog.isLiked}
                                age={dog.age}
                                zip_code={dog.zip_code}
                                breed={dog.breed}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <Footer
                isPrevBtnVisible={true}
                isNextBtnVisible={true}
                next={"next"}
                prev={"prev"}
                onPagination={"prev"}
            />
        </>
    );
};

export default SearchPage;0