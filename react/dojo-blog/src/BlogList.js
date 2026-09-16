import { Link } from 'react-router-dom'

const BlogList = ({blogs, title, handleDelete}) => {
    //const BlogList = (props) => {
    //const blogs = props.blogs;


    return (
        <div className="blog-list">
            <h2>{title}</h2>

            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    <Link to={`/blogs/${blog.id}`}>Read more</Link>
                    <br />
                    <br />
                    <button onClick={() => handleDelete(blog.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default BlogList;