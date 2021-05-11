import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home() {
    const [allList, setAllList] = useState([]);
    // useEffect(() => {
    // fetch('http://localhost:1337/categories', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data));
    // })

    // fetch('https://embark-n-explore.herokuapp.com/categories', {
    //     method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // })
    //     .then(response => response.json())
    //     .then(data => console.log(data), (err) => console.log(err));


    return (
        <>
            Home page
            {/* {allList} */}
        </>
    );
}