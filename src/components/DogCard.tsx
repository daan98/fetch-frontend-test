import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt';

// Files created or added manually (with no package dependencies)
import { DogCardInterface } from '../interface';
import { fadeIn, slideIn } from "../utils/motion";

const DogCard = (props : DogCardInterface) => {
    
    const { index, img, name, zip_code, isLiked, age, breed } = props;

    return (
        <Tilt>
            <motion.div
                variants={ fadeIn("right", "", 0.3 * index, 1) }
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="zoom"
                className="dog-card bg-white shadow-card flex flex-col gap-2 justify-center p-5 rounded-lg duration-300 ease-in-out transition-all hover:duration-300 hover:ease-in-out hover:transition-all"
            >
                <div className="w-full">
                    <img 
                        className="dog-image w-full h-full max-w-[100px] my-0 mx-auto rounded-lg duration-300 ease-in-out transition-all hover:duration-300 hover:ease-in-out hover:transition-all" 
                        src={img}
                        alt="dog"
                    />
                </div>

                <p className="text-center text-secondary font-bold">Name: <span className="text-black font-normal">{name}</span></p>
                <p className="text-center text-secondary font-bold">Age: <span className="text-black font-normal">{age} {age > 1 ? "years" : "year"}</span> </p>
                <p className="text-center text-secondary font-bold">Breed: <span className="text-black font-normal capitalize">{breed}</span></p>
                <p className="text-center text-secondary font-bold">Location (zip code): <span className="text-black font-normal">{zip_code}</span></p>

                <div className="text-center">
                    {isLiked ? 
                        <FontAwesomeIcon icon={filledHeart} className="text-red-600 hover:cursor-pointer" />
                    :
                        <FontAwesomeIcon icon={emptyHeart} className="text-red-600 hover:cursor-pointer" />
                    }
                </div>
            </motion.div>
        </Tilt>
    );
};

export default DogCard