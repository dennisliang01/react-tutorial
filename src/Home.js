import { useState} from 'react';

const Home = () => {

    // let name = 'mario';
    const [name, setName] = useState('mario')
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        setName('luigi');
        setAge(30);
    }



    return ( 
        <div className="home">
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;