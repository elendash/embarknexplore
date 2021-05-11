import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

export default function CategoriesPage(props) {
    const { eachCategories } = useParams();
    const category = (props.list === [] ? [] : props.list)
    const links = props.linkId
    const categoryType = category.filter((title) => title.eachCategories === title)

    //     const [allList, setAllList] = useState([]);
    //   useEffect(() => {
    //     fetch("https://embark-n-explore.herokuapp.com/categories")
    //       .then(
    //         (data) => data.json(),
    //         (err) => console.log(err)
    //       )
    //       .then(
    //         (parsedData) => setAllList(parsedData),
    //         (err) => console.log(err)
    //       );
    //   }, []);
    // console.log(allList === [] ? "empty" : allList[0].embark_n_explores[1].address)

    const handleLegitVote = () => {
        console.log("legit")
        // fetch('https://embark-n-explore.herokuapp.com/categories', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         legit_votes: +1,
        //     }),
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data));
    }
    // console.log(category.filter(() => id.eachCategories === category._id))

    const [findCategories, setFindCategories] = useState([]);
    // useEffect(() => {
    //     fetch("https://embark-n-explore.herokuapp.com/categories/:id")
    //         .then(
    //             (data) => data.json(),
    //             (err) => console.log(err)
    //         )
    //         .then(
    //             (parsedData) => setAllList(parsedData),
    //             (err) => console.log(err)
    //         );
    // }, []);

    const handleDoubtfulVote = () => {
        console.log("doubtful")
    }
    console.log(category[0].type)
    return (
        <div>
            <p>{category[0].type === undefined ? '' : category[0].type}</p>
            <h1>{categoryType}</h1>
            {categoryType.map((fullList, index) => (
                <div key={index}>
                    <h2>Name of place or brand: {fullList.embark_n_explores.brand_or_location}</h2>
                    <h2>{fullList.embark_n_explores.opening === "23:30:00.000" ? "" : `Opening Hours: ${fullList.embark_n_explores.opening} - ${fullList.embark_n_explores.closing}`}</h2>
                    <h2>{fullList.embark_n_explores.closed_on === null ? "" : `${fullList.embark_n_explores.closed_on}`}</h2>
                    <h2>{fullList.embark_n_explores.address === undefined ? "" : `Address: ${fullList.embark_n_explores.address} Postal code: ${fullList.embark_n_explores.postal_code}`}</h2>
                    <h2>{fullList.embark_n_explores.website === undefined ? "" : `Website: ${fullList.embark_n_explores.website}`}</h2>
                    <h2>{fullList.embark_n_explores.contact === undefined ? "" : `Contact no.: ${fullList.embark_n_explores.contact}`}</h2>
                    <h2>{fullList.embark_n_explores.remarks === undefined ? "" : `Remarks: ${fullList.embark_n_explores.remarks}`}</h2>
                    <h4>Legit Votes: {fullList.embark_n_explores.legit_votes}</h4>
                    <h4>Doubtful Votes: {fullList.embark_n_explores.not_legit}</h4>
                    <button onClick={handleLegitVote} >Legit</button>
                    <button onClick={handleDoubtfulVote} >Doubtful</button>
                </div>
            ))}
        </div>
    )
}