const Home = () => {


    const handleClick = (e) => {
        console.log('hello, ninjas', e);
    
    }

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            {/* Anonymous function to pass in parameter */}
            <button onClick={(e) => handleClickAgain('Dennis', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;