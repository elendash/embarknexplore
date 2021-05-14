import { Redirect, useHistory, Link } from "react-router-dom";
import { useQuery, QueryClient, QueryClientProvider } from "react-query"


const queryClient = new QueryClient()
export default function Nav({ userAuth }) {
    return (
        <QueryClientProvider client={queryClient}>
            <CategoriesData />
        </QueryClientProvider>
    )
}
function CategoriesData({ userAuth }) {
    console.log(userAuth);
    const history = useHistory();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://embark-n-explore.herokuapp.com/categories').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    const handleLogout = () => {
        <Redirect to="/" />
    };

    return (
        <>
            <div className='dark:bg-gray-700 text-xl uppercase text-white font-bold grid md:grid-flow-col justify-items-center content-center p-8'>
                <div onClick={() => { history.push("/") }} className='p-4 pb-8 place-self-center'>
                    <Link to="/">Home</Link>
                </div>
                {data.map((categoriesId, index) => {
                    return (
                        <div key={index} className='p-4 pb-8 text-center place-self-center'>
                            <Link to={`/category/${categoriesId._id}`} >{categoriesId.type}</Link>
                        </div>
                    )
                })}
                <div className='p-4 pb-8 text-center place-self-center'>
                    <Link to="/signup">Sign Up Now</Link>
                </div>

                <div className='p-4 pb-8 place-self-center'>
                    <Link to="/login" onClick={() => { history.push("/login") }}>Login</Link>
                </div>
                {userAuth === "login" && (
                    <div className='p-4 pb-8 text-center place-self-center'>
                        <Link to="/create" onClick={() => { history.push("/create") }}>Add List</Link>
                    </div>)}
                {userAuth === "login" && (
                    <div className='p-4 pb-8 text-center place-self-center'>
                        <Link to="/logout" onClick={handleLogout}>Log out</Link>
                    </div>)}

            </div>
        </>
    )
}
