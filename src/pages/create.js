import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";
export default function Create() {
    const headers = {
        'Content-Type': 'application/json',
    };
    const [selected, setSelected] = useState([]);
    const options = [
        { label: "Transport", value: "60978b8a1c7f6845bc4f90ee" },
        { label: "Parks and Dog Runs", value: "60978ba71c7f6845bc4f90ef" },
        { label: "Beaches and Pools", value: "60978bb41c7f6845bc4f90f0" },
        { label: "Restaurants and Cafes", value: "60978bcf1c7f6845bc4f90f1" },
        { label: "Pet Stores and Grooming", value: "60978bdf1c7f6845bc4f90f2" },
        { label: "Clinics and Hospitals", value: "60978bf01c7f6845bc4f90f3" },
        { label: "Daycare and Boarding", value: "60978c251c7f6845bc4f90f4" },
        { label: "Staycation", value: "60978c311c7f6845bc4f90f5" },
        { label: "Others", value: "609793a81c7f6845bc4f90fc" },
    ];
    const mapCategories = () => {
        if (selected === undefined) {
            return "it is loading"
        } else {
            const array = []
            selected.map((selection) => {
                array.push(selection.value)
            })
            return array
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('https://embark-n-explore.herokuapp.com/embarknexplores', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                opening: (`${event.target.opening.value}:00.000`),
                closed_on: event.target.closed_on.value,
                closing: (`${event.target.closing.value}:00.000`),
                contact: event.target.contact.value,
                postal_code: event.target.postal_code.value,
                remarks: event.target.remarks.value,
                address: event.target.address.value,
                brand_or_location: event.target.brand_or_location.value,
                website: event.target.website.value,
                categories: mapCategories(),
            })
        }).then(res => res.json()).catch((error) => {
            console.log(error);
        })

    }

    return (

        <div className='flex flex-wrap'>
            <div className="grid justify-items-center text-gray-700 bg-green-200 bg-cover h-full w-3/6 text-center">

                <h1 className="font-extrabold text-5xl uppercase pb-5 m-20">Suggest New Location or Service</h1>
                <form onSubmit={handleSubmit}>
                    <label className="font-bold text-2xl p-1 ml-10">
                        <span>Name of place or brand:</span>
                        <input type="text" name="brand_or_location" required minLength="2" className="rounded-lg w-6/12 mt-6 mb-16 ml-8 mr-10" />
                    </label>
                    <label className="font-bold text-2xl block">
                        <span>Opening hours:</span>
                        <input type="time" name="opening" className="rounded-lg w-2/12 mt-6 mb-16 ml-8 mr-10" /> to <input type="time" name="closing" className="rounded-lg w-2/12 mt-6 mb-16 ml-8 mr-10" />
                    </label>
                    <label className="font-bold text-2xl pl-10 block">
                        <span>Closed on:</span>
                        <select name="closed_on" placeholder="None" type="select" className="rounded-lg p-1 w-60 mt-6 mb-4 ml-8 mr-5">
                            <option value="None">Select</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                            <option value="Weekdays">Weekdays</option>
                            <option value="Weekends">Weekends</option>
                            <option value="Public_Holidays">Public_Holidays</option>
                            <option value="More_than_one_day_see_remarks">More_than_one_day_see_remarks</option>
                        </select>
                    </label>
                    <label className="font-bold text-2xl pl-20">
                        <span>Address:</span>
                        <input type="text" name="address" className="rounded-lg p-10 w-4/6 mt-16 mb-2 ml-5 mr-32" />
                    </label>
                    <label className="font-bold text-2xl">
                        <span>Postal code:</span>
                        <input type="number" name="postal_code" className="rounded-lg w-96 mt-10 mb-20 ml-5" />
                    </label>
                    <label className="font-bold text-2xl block">
                        <span>Website:</span>
                        <input type="url" name="website" className="rounded-lg p-1 w-7/12 mb-10 ml-10" />
                    </label>
                    <label className="font-bold text-2xl block">
                        <span>Contact:</span>
                        <input type="tel" name="contact" className="rounded-lg w-96 mt-6 mb-10 ml-8" />
                    </label>
                    <label className="font-bold text-2xl">
                        <span>Remarks:</span>
                        <input type="text" name="remarks" className="rounded-lg p-16 w-96 mt-6 mb-20 ml-8" />
                    </label>
                    <label className="font-bold text-2xl block">
                        <span>Categories:</span>
                        <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" className="rounded-full w-9/12 py-1 ml-32" />
                    </label>
                    <h4 className="font-normal text-l pb-6 mt-2">You can select more than one categories. Note - At least one category selection is required.</h4>

                    <input type="submit" value="submit" className="bg-green-400 rounded-full mt-20 mb-5 py-2 px-5" />
                </form>
                <h3 className="p-3 mb-10">Thanks for contributing! Our furry little ones now have another new place to explore!</h3>
            </div>
            <img src="https://images.unsplash.com/photo-1559190394-df5a28aab5c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80" alt="" className="object-full w-6/12 h-11/12" />

        </div>

    )
}