import { useHistory, Link } from "react-router-dom";
import { useQuery, QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()
export default function Nav() {
    return (
        <QueryClientProvider client={queryClient}>
            <CategoriesData />
        </QueryClientProvider>
    )
}
function CategoriesData() {
    const history = useHistory();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://embark-n-explore.herokuapp.com/categories').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    return (
        <>
            <ul>
                <li onClick={() => { history.push("/") }}>
                    <Link to="/">Home</Link>
                </li>
                {data.map((categoriesId, index) => {
                    return (
                        <li key={index} >
                            <Link to={`/category/${categoriesId._id}`}>{categoriesId.type}</Link>
                        </li>
                    )
                })}
                <li>
                    <Link to="/create">Add List</Link>
                </li>
                <li>
                    <Link to="/login">Sign up/Login</Link>
                </li>
                <li>
                    <Link to="/logout">Log out</Link>
                </li>
            </ul>
        </>
    )
}
