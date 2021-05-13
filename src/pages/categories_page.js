import { useParams } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from "react-query"
import Polling from '../components/polling'
import '../App.css';

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
    const { isLoading, error, data } = useQuery(['repoData', eachCategories], () =>
        fetch(`https://embark-n-explore.herokuapp.com/categories/${eachCategories}`, {
            method: 'GET',
            headers: headers,
        }).then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='dark:bg-green-100 p-20 w-2/6'>
            <h1 className='text-left text-gray-700 text-5xl font-sans pb-7 font-black uppercase'>{data.type}</h1>
            {data.embark_n_explores.map((fullList, index) => (
                <div key={index} className='flex flex-wrap pt-20 pb-7 pl-2 pr-24 text-xl text-gray-700 font-semibold'>
                    <div className='uppercase text-sm font-bold'>Name of place or brand:
                    </div>
                    <h2 className='text-4xl pb-3 font-extrabold'>{fullList.brand_or_location}</h2>
                    <div className='uppercase text-sm font-bold'>Opening Hours:</div>
                    <h2 className='text-2xl pb-3'>{fullList.opening === "23:30:00.000" ? "" : `${fullList.opening} - ${fullList.closing}`}</h2>
                    <h2 >{fullList.closed_on === "None" ? "" : `Close on: ${fullList.closed_on}`}</h2>
                    <h2 >{fullList.address === undefined ? "" : `Address: ${fullList.address} Postal code: ${fullList.postal_code}`}</h2>
                    <h2 >{fullList.website === undefined ? "" : `Website: ${fullList.website}`}</h2>
                    <h2 >{fullList.contact === undefined ? "" : `Contact no.: ${fullList.contact}`}</h2>
                    <h2 >{fullList.remarks === undefined ? "" : `Remarks: ${fullList.remarks}`}</h2>
                    <h4 >Legit Votes: {fullList.legit_votes}</h4>
                    <h4 >Doubtful Votes: {fullList.not_legit}</h4>
                    <Polling eachData={fullList} />

                </div>
            ))}
            <div className='text-gray-700 text-xl bg-green-900 box-content h-100 w-10 box-border h-100 w-50 p-10'>
                Map / Image area
            </div>
        </div>

    )

}