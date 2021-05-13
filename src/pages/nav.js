import { Redirect, useHistory, Link } from "react-router-dom";
import { useQuery, QueryClient, QueryClientProvider } from "react-query"
import Cookie from "js-cookie";


const queryClient = new QueryClient()
export default function Nav(props) {
    const userAuth = props.user
    const setUserAuth = props.setUser
    console.log(userAuth)

    return (
        <QueryClientProvider client={queryClient}>
            <CategoriesData users={userAuth} setUsers={setUserAuth} />
        </QueryClientProvider>
    )
}
function CategoriesData(props) {
    const userAuth = props.users
    const setUserAuth = props.setUsers
    console.log(userAuth)
    const history = useHistory();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch('https://embark-n-explore.herokuapp.com/categories').then(res =>
            res.json()
        )
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    const handleLogout = () => {
        Cookie.remove("token");
        setUserAuth("Logout");
        <Redirect to="/" />
    };

    return (
        <>
            <ul>
                <li onClick={() => { history.push("/") }}>
                    <Link to="/">Home</Link>
                </li>
                {data.map((categoriesId, index) => {
                    return (
                        <li key={index} >
                            <Link to={`/category/${categoriesId._id}`} onClick={() => { history.push(`/category/${categoriesId._id}`) }}>{categoriesId.type}</Link>
                        </li>
                    )
                })}
                <li>
                    <Link to="/signup">Sign Up Now</Link>
                </li>
                <li>
                    <Link to="/login" onClick={() => { history.push("/login") }}>Login</Link>
                </li>
                {/* {userAuth === "login" && ( */}
                <li>
                    <Link to="/create" onClick={() => { history.push("/create") }}>Add List</Link>
                </li>
                {/* ) && ( */}
                <li>
                    <Link to="/logout" onClick={handleLogout}>Log out</Link>
                </li>
                {/* )} */}

            </ul>
        </>
    )
}
