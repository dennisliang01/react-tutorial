import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect runs every time the component renders
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {  // then fires once the fetch is complete
                    if (!res.ok) {
                        throw Error('Could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setBlogs(data); // setBlogs is a function to update the state
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                })
        }, 1000);
       
    }, []) // the empty array means it only runs on the first render

  return (
    <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
    </div>
  );
}
 
export default Home;