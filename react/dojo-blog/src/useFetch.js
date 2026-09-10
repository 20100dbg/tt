import { useState, useEffect } from 'react';

//customm hook
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch');
                    }
                    return res.json()
                })
                .then((d) => {
                    console.log(d);
                    setData(d);
                    setError(null);
                })
                .catch((err) => {
                    setError(err.message);
                });
            setIsPending(false);

        }, 1600);
        
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;