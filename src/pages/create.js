export default function Create() {

    return (
        <>
            <h1>Suggest New Location or Service</h1>
            <form>
                <label>Name of place or brand:</label>
                <input type="text" value="brand_or_location" required />
                <label>Opening hours:</label>
                {/* <input type="time" value={time} /> to <input type="time" value={time} /> */}

            </form>

        </>
    )
}