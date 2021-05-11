import { useParams } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function CategoriesPage() {
    return (
        <QueryClientProvider client={queryClient}>
            <Pages />
        </QueryClientProvider>
    )
}

function Pages() {
    const { eachCategories } = useParams();
    const headers = {
        'Content-Type': 'application/json',
    };
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`https://embark-n-explore.herokuapp.com/categories/${eachCategories}`, {
            method: 'GET',
            headers: headers,
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    console.log(data)
    const handleLegitVote = () => {
        console.log("legit")
        //{
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         legit_votes: +1,
        //     }),
    }

    const handleDoubtfulVote = () => {
        console.log("doubtful")
    }


    return (
        <div>
            <h1>{data.type}</h1>
            {data.embark_n_explores.map((fullList, index) => (
                <div key={index}>
                    <h2>Name of place or brand: {fullList.brand_or_location}</h2>
                    <h2>{fullList.opening === "23:30:00.000" ? "" : `Opening Hours: ${fullList.opening} - ${fullList.closing}`}</h2>
                    <h2>{fullList.closed_on === null ? "" : `${fullList.closed_on}`}</h2>
                    <h2>{fullList.address === undefined ? "" : `Address: ${fullList.address} Postal code: ${fullList.postal_code}`}</h2>
                    <h2>{fullList.website === undefined ? "" : `Website: ${fullList.website}`}</h2>
                    <h2>{fullList.contact === undefined ? "" : `Contact no.: ${fullList.contact}`}</h2>
                    <h2>{fullList.remarks === undefined ? "" : `Remarks: ${fullList.remarks}`}</h2>
                    <h4>Legit Votes: {fullList.legit_votes}</h4>
                    <h4>Doubtful Votes: {fullList.not_legit}</h4>
                    <button onClick={handleLegitVote} >Legit</button>
                    <button onClick={handleDoubtfulVote} >Doubtful</button>
                </div>
            ))}
        </div>
    )

}