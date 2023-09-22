import React from 'react';
import { FooterInterface } from '../interface'

const Footer = (props : FooterInterface) => {
    const { isPrevBtnVisible, isNextBtnVisible, onPagination, next, prev } = props;
    return (
        <footer className='flex flex-col gap-3 justify-center pb-5 px-6 md:flex-row'>
            {isPrevBtnVisible ? 
            <button 
                type="button"
                className="bg-secondary text-white px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all hover:bg-secondaryHover hover:duration-300 hover:ease-in-out hover:transition-all" 
                onClick={() => onPagination(prev, true)}
            >
                Previous page
            </button>
            :
            null
            }

            {isNextBtnVisible ?
            <button 
                type="button" 
                className="bg-secondary text-white px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all hover:bg-secondaryHover hover:duration-300 hover:ease-in-out hover:transition-all" 
                onClick={() => onPagination(next, false)}
            >
                Next Page
            </button>
            :
            null}
        </footer>
    );
};

export default Footer;