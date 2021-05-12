export default function Polling(props) {

    const data = props.eachData
    const id = data._id
    const headers = {
        'Content-Type': 'application/json',
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("test", data.legit_votes)
        if (event.target.vote.value === "Legit") {
            fetch(`https://embark-n-explore.herokuapp.com/embarknexplores/${id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({ legit_votes: (data.legit_votes + 1) })
            }).then(res =>
                res.json()
            )
            return <h4>Thanks for identifying this information legitimacy!</h4>
        } else if (event.target.vote.value === "Doubtful") {
            fetch(`https://embark-n-explore.herokuapp.com/embarknexplores/${id}`, {
                method: 'PUT',
                headers: headers,
                body: JSON.stringify({ not_legit: (data.not_legit + 1) })
            }).then(res =>
                res.json()
            )
            return <h4>Thanks for identifying this information legitimacy!</h4>
        } else {
            return <h4>Please select one.</h4>
        }

    }
    const disableOnclick = (event) => {
        event.target.disabled = true
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Poll: Is this information legit or doubtful</h4>
                <input type="radio" name="vote" value="Legit" />Legit
                        <input type="radio" name="vote" value="Doubtful" />Doubtful
                        <input type="submit" value="submit" onClick={disableOnclick} />
            </form>
        </>
    )
}