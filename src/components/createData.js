export default function CreateData(props) {
    const data = props.formValue
    console.log(data)
    const headers = {
        'Content-Type': 'application/json',
    };

    fetch("https://embark-n-explore.herokuapp.com/embarknexplores", {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({ data })
    }).then(res => res.json()).catch((error) => {
        console.log(error);
    })

    return (
        <>
            hello
            {data}
        </>
    )
}