import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // useEffect runs every time the component renders
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
            .then(res => {  // then fires once the fetch is complete
                return res.json();
            })
            .then(data => {
                setBlogs(data); // setBlogs is a function to update the state
                setIsPending(false);
            });
        }, 1000);
       
    }, []) // the empty array means it only runs on the first render

  return (
    <div className="home">
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}
 
export default Home;