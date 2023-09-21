import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';

// Files created or added manually (with no package dependencies)
import { dogImg } from '../assets/img';
import { DogCardInterface } from '../interface';

const DogCard = (props : DogCardInterface) => {
    
    const { img, name, zip_code, isLiked, age, breed } = props;

    return (
        <div className="dog-card bg-white shadow-card flex flex-col gap-2 justify-center p-5 rounded-lg duration-300 ease-in-out transition-all hover:duration-300 hover:ease-in-out hover:transition-all">
            <div className="w-full">
                <img 
                    className="dog-image w-full h-full max-w-[100px] my-0 mx-auto rounded-lg duration-300 ease-in-out transition-all hover:duration-300 hover:ease-in-out hover:transition-all" 
                    src={dogImg}
                    alt="dog"
                /> {/* field --> img */}
            </div>

            <p className="text-center text-secondary font-bold">Name: <span className="text-black font-normal">Mila</span></p> {/* field --> name */}
            <p className="text-center text-secondary font-bold">Age: <span className="text-black font-normal">2 years</span> </p> {/* field --> age */}
            <p className="text-center text-secondary font-bold">Breed: <span className="text-black font-normal">Golden retriever</span></p> {/* field --> breed */}
            <p className="text-center text-secondary font-bold">Location (zip code): <span className="text-black font-normal">86039</span></p> {/* field --> zip_code */}

            <div className="text-center">
                {isLiked ? 
                    <FontAwesomeIcon icon={filledHeart} className="text-red-600 hover:cursor-pointer" />
                :
                    <FontAwesomeIcon icon={emptyHeart} className="text-red-600 hover:cursor-pointer" />
                }
            </div>
        </div>
    );
};

export default DogCard