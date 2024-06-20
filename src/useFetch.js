import { useState, useEffect } from 'react';

const useFetch = (url) => { // custom hook function needs to start with "use"
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {  // then fires once the fetch is complete
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setData(data); // setBlogs is a function to update the state
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;