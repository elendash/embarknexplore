// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Home() {
    // const [allList, setAllList] = useState([]);
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

    fetch('http://localhost:1337/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => console.log(data), (err) => console.log(err));

    // useEffect(() => {
    //     fetch("http://localhost:1337/categories")
    //         .then(
    //             (data) => data.json(),
    //             (err) => console.log(err)
    //         )
    //         .then(
    //             (parsedData) => setAllList(parsedData),
    //             (err) => console.log(err)
    //         );
    // }, []);

    return (
        <>
            Home page
            {/* {allList} */}
        </>
    );
}