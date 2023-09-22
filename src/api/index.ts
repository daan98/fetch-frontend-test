const doLogin = async (url : string, data : any) => {
    console.log('data: ', data, 'url: ', url);
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
        return 200
    } catch (error : any) {
        console.log('There was an error while authenticating: ', error);
        return 400;
    }
};

export {
    doLogin
}