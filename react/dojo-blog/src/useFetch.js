import { useState, useEffect } from 'react';

//custom hook
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch');
                    }
                    return res.json()
                })
                .then((d) => {
                    setData(d);
                    setError(null);
                    setIsPending(false);
                })
                .catch((err) => {
                    if (err.name === "AbortError") {
                        console.log("fetch aborted");
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                });

        }, 500);

        return () => abortCont.abort();

    }, [url]);

    return {data, isPending, error};
}

export default useFetch;