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
        <div>
            <form onSubmit={handleSubmit} >
                <label className='tracking-wide flex flex-col pt-4'>
                    <span className='text-gray-700 uppercase text-sm font-bold'>Is this information legit or doubtful</span>
                    <span class="ml-2 pt-2">Legit
                    <input type="radio" name="vote" value="Legit" className='form-radio text-gray-700 pl-4' />
                    </span>
                    <span class="ml-2 pt-1 pb-4">
                        Doubtful
                    <input type="radio" name="vote" value="Doubtful" className='form-radio text-gray-700' />
                    </span>
                    <input type="submit" value="submit" onClick={disableOnclick} className="bg-green-200 rounded-full py-2 px-5 uppercase" />
                </label>
            </form>
        </div>
    )
}