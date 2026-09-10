import { useState, useEffect } from 'react';
import BlogList from './BlogList'
import Demo from './Demo'
import useFetch from './useFetch'

const Home = () => {

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        //setBlogs(newBlogs);
    }
    
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");

    //<BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's blogs" />
    return (
        <div className="home">
            <h2>Homepage</h2>

            <div>
                <button onClick={() => setName('luigi')}>change name</button>
                <p>{name}</p>
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />}
            </div>

        </div>
    );
}

export default Home;