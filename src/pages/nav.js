import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


export default function Nav(props) {
    const [allList, setAllList] = useState([]);
    useEffect(() => {
        fetch("https://embark-n-explore.herokuapp.com/categories")
            .then(
                (data) => data.json(),
                (err) => console.log(err)
            )
            .then(
                (parsedData) => setAllList(parsedData),
                (err) => console.log(err)
            );
    }, []);
    console.log(allList === [] ? "empty" : allList[0].embark_n_explores[1].address)

    const history = useHistory();
    const category = (props.list === [] ? [] : props.list)
    return (
        <>
            <ul>
                <li onClick={() => { history.push("/") }}>
                    <Link to="/">Home</Link>
                </li>
                {category.map((categoriesId, index) => {
                    return (
                        <li key={index} onClick={() => { history.push(`/category/${categoriesId._id}`) }}>
                            <Link to={`/category/${categoriesId._id}`} linkId={`/category/${categoriesId._id}`}>{categoriesId.type}</Link>
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