
const Home = () => {

    const handleClick = (arg) => {
        console.log("clic " + arg);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={() => { handleClick('test'); }}>yo</button>        
        </div>
    );
}

export default Home;