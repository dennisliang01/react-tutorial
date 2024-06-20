import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    // useEffect runs every time the component renders
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {  // then fires once the fetch is complete
                return res.json();
            })
            .then(data => {
                console.log(data);
                setBlogs(data); // setBlogs is a function to update the state
            })
    }, []) // the empty array means it only runs on the first render

  return (
    <div className="home">
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}
 
export default Home;