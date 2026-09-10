import { useState } from 'react';

const Demo = () => {

    const [name, setName] = useState('mario');

    const handleChangeName = () => {
        const destName = name === "mario" ? "luigi" : "mario";
        setName(destName);
    }

    const handleClick = (e) => {
        console.log(e);
    }

    const handleClick2 = (arg) => {
        console.log("clic " + arg);
    }

    const handleClick3 = (arg, e) => {
        console.log(arg);
        console.log(e);
    }


    //on every render
    //useEffect(() => {});

    //only on first render
    //useEffect(() => {}, []);

    //on useState var update (+ on first render)
    //useEffect(() => {}, [name]);


    return (
        <div>
            <p>{name}</p>
            <p>
                <button onClick={handleChangeName}>Change name</button>
            </p>
            <div>
                <button onClick={handleClick}>yo</button>
                <button onClick={() => handleClick2('test')}>yo 2</button>
                <button onClick={(e) => handleClick3('test', e)}>yo 3</button>
            </div>
        </div>
    )
}

export default Demo;