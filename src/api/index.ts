const doLogin = async (url : string, data : any) => {
    try {
        const fetchedData = await fetch(`${url}/auth/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
            })
            .then((response) => response)
            .then((data) => console.log('data: ', data));
        console.log('fetchedData LOGIN: ', fetchedData);
        return 200
    } catch (error : any) {
        console.log('There was an error while authenticating: ', error);
        return 400;
    }
};

const doLogout = async (url : string) => {
    try {
        const fetchedData = await fetch(`${url}/auth/logout`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => response)
            .then((data) => console.log('data: ', data));
        return 200
    } catch (error : any) {
        console.log('There was an error while login out: ', error);
        return 400;
    }
};

const getBreeds = async (url : string) => {
    try {
        const fetchedData : Array<any> = await fetch(`${url}/dogs/breeds`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
            })
            .then((response) => response.json())
            .then((data) => {return data});
        console.log('fetchedData: ', fetchedData);
        return fetchedData
    } catch (error : any) {
        console.log('There was an error while getting breeds: ', error);
        return [];
    }
};

const getDogSearch = async (url : string, breeds ?: Array<string>, zipCodes ?: Array<string>, ageMin ?: number, ageMax ?: number, sort ?: string) => {
    try {
        const fetchedData = await fetch(
            `${url}/dogs/search?breeds=${breeds}&zipCodes=${zipCodes}&ageMin=${ageMin}&ageMax=${ageMax}&sort=field:[${sort}]`, {
                credentials: "include",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => response.json())
            .then((data) => {return data});
        return 200
    } catch (error : any) {
        console.log('There was an error while getting search result: ', error);
        return 400;
    }
};

const postDogs = async (url : string, dogsId : Array<string>) => {
    try {
        const fetchedData = await fetch(`${url}/dogs`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dogsId)
            })
            .then((response) => response)
            .then((data) => console.log('data: ', data));
        return 200
    } catch (error : any) {
        console.log('There was an error while posting dogs: ', error);
        return 400;
    }
};

const postMatchDogs = async (url : string, dogsId : Array<string | null>) => {
    try {
        const fetchedData : any = await fetch(`${url}/dogs/match`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dogsId)
            })
            .then((response) => response)
            .then((data) => {
                console.log('data: ', data);
                return data;
            });
        return fetchedData;
    } catch (error : any) {
        console.log('There was an error while posting matched dogs: ', error);
        return 400;
    }
};

export {
    doLogin,
    doLogout,
    getBreeds,
    getDogSearch,
    postDogs,
    postMatchDogs
}