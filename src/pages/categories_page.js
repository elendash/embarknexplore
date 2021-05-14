import { useParams } from 'react-router-dom';
import { useQuery, QueryClient, QueryClientProvider } from "react-query"
import Polling from '../components/polling'
import '../App.css';
import ImageData from '../components/imageData'

const queryClient = new QueryClient()

export default function CategoriesPage({ userAuth }) {
    console.log(userAuth)
    return (
        <QueryClientProvider client={queryClient}>
            <Pages />
        </QueryClientProvider>
    )
}

export function Pages({ userAuth }) {
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
    if (isLoading) return '.'
    if (error) return 'An error has occurred: ' + error.message

    // const imageData = () => {
    //     if (data.embark_n_explores[0] === "undefined") {
    //         console.log("image fail to load")
    //     } else {
    //         return `url(${data.embark_n_explores[0].image.name})`
    //     }
    // }
    return (
        <div className='flex flex-wrap'>
            < div className='dark:bg-green-100 p-20 w-2/6 tracking-wide flex flex-col divide-y-2 > * + * divide-gray-700' >
                <h1 className='flex flex-col text-left text-gray-700 text-5xl font-sans pb-7 font-black uppercase tracking-wide'>{data.type}</h1>
                {
                    data.embark_n_explores.map((fullList, index) => (
                        <div key={index} className='flex flex-col pt-20 pb-20 pl-2 pr-24 text-xl text-gray-700 font-semibold'>
                            <div className='text-sm font-bold uppercase '>Name of place or brand:</div>
                            <h2 className='text-4xl pb-3 font-extrabold'>{fullList.brand_or_location}</h2>
                            <div className='uppercase text-sm font-bold'>{fullList.opening === "23:30:00.000" ? "" : "Opening Hours:"}</div>
                            <h2 className='text-2xl pb-1 pr-5'>{fullList.opening === "23:30:00.000" ? "" : `${fullList.opening} - ${fullList.closing}`}</h2>
                            <div className='uppercase text-sm font-bold pt-6 pr-5'>{fullList.closed_on === "None" ? "" : "Close on:"}</div>
                            <h2 className='text-2xl pb-1'>{fullList.closed_on === "None" ? "" : `${fullList.closed_on}`}</h2>
                            <div className='uppercase text-sm font-bold pt-6 pr-5'>{fullList.address === undefined ? "" : "Address:"}</div>
                            {fullList.address === undefined ? "" : `${fullList.address}, Singapore ${fullList.postal_code}`}
                            <div className='uppercase text-sm font-bold pt-2 pr-5'>{fullList.website === undefined ? "" : "Website:"}</div>
                            <h2 >{fullList.website === undefined ? "" : fullList.website}</h2>
                            <div className='uppercase text-sm font-bold pt-6 pr-5'>{fullList.contact === undefined ? "" : "Contact no.:"}</div>
                            <h2 >{fullList.contact === undefined ? "" : fullList.contact}</h2>
                            <div className='uppercase text-sm font-bold pt-6 pr-5'>{fullList.remarks === undefined ? "" : "Remarks:"}</div>
                            <h2 >{fullList.remarks === undefined ? "" : fullList.remarks}</h2>
                            <div className='uppercase text-sm font-bold pt-6 pr-5'>Legit Votes: {fullList.legit_votes}  Doubtful Votes: {fullList.not_legit}</div>
                            <div className='text-sm font-normal pr-5 '>Content is validated by users' poll.</div>
                            <Polling eachData={fullList} />

                        </div>
                    ))
                }
                {/* <ImageData imagePlaceholder={data.embark_n_explores} /> */}
            </div >
            <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" className="object-full w-8/12 h-5/6" />

        </div >
    )

}

