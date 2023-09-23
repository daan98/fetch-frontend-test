import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Files created or added manually (with no package dependencies)
import { dogImg } from '../assets/img';
import { DogCard, Filter, Footer, Header, Match } from '.'
import { SearchParamsInterface } from '../interface';
import { getDogSearch, getDogs } from '../api';

/* 
    img: string      - DONE - 
    name: string     - DONE - 
    age: number      - DONE -
    zip_code: string - DONE -
    breed: string    - DONE -
 */

const SearchPage = () => {

    const apiUrl : string                   = import.meta.env.VITE_API_BASE_URL;
    const [dogs, setDogs]                   = useState<any>({});
    const [isLiked, setIsLiked]             = useState<boolean>(true);
    const [dogsToFilter, setDogsToFilter]   = useState<Array<string>>([]);
    const [zipCode, setZipCode]             = useState<string>('');
    const [minAge, setMinAge]               = useState<number>();
    const [maxAge, setMaxAge]               = useState<number>();
    const [sort, setSort]                   = useState<string>('');
    const [searchClicked, setSearchClicked] = useState<number>(0)
    const [searchParams, setSearchParams]   = useState<SearchParamsInterface>({
        breedsToFilter: [],
        zipCode: [],
        minAge: undefined,
        maxAge: undefined,
        sort: ''
    });
    /* const dogs = [
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
    ]; */

    useEffect(() => {
        console.log('searchClicked: ', searchClicked);

        const fetchDogSearch = async () => {
            const { breedsToFilter, zipCode, minAge, maxAge, sort } = searchParams;
            
            if (!sort || sort.toLowerCase() === 'asc' || sort.toLowerCase() === 'desc') {
                setDogs(await getDogSearch(apiUrl, breedsToFilter, zipCode, minAge, maxAge, sort));
            }
        }

        const  fetchDogs = async () => {
            setDogs(await getDogs(apiUrl));
        };

        if (searchClicked !== 0) {
            fetchDogSearch();
            return;
        }

        fetchDogs();
    }, [searchClicked]);

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

                    <Filter
                        breedsToFilter={dogsToFilter}
                        breedsToFilterSetter={setDogsToFilter}
                        zipCode={setZipCode}
                        minAge={setMinAge}
                        maxAge={setMaxAge}
                        sort={setSort}
                    />

                    <button
                        type="button"
                        className="bg-secondary px-6 py-2 rounded-full font-bold duration-300 ease-in-out transition-all flex gap-2 flex-wrap items-center mx-auto my-0 hover:bg-secondaryHover hover:text-white hover:duration-300 hover:ease-in-out hover:transition-all"
                        onClick={() => {
                            setSearchParams({
                                breedsToFilter: dogsToFilter,
                                zipCode: zipCode.split(" "),
                                minAge,
                                maxAge,
                                sort
                            });
                            setSearchClicked(searchClicked + 1);
                        }}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    
                    <div className="flex gap-10 flex-wrap justify-center py-10 ">
                        {/* {dogs.map((dog, index) => (
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
                        ))} */}
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