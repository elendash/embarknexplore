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
        // const closeOnValue = () => {
        //     if (event.target.closed_on.value === '') {
        //         console.log("close_on: null")
        //         return "close_on: null"
        //     } else {
        //         return `close_on: ${event.target.closed_on.value}`
        //     }
        // }
        // console.log(closeOnValue());
        // console.log(`brand_or_location: ${event.target.brand_or_location.value}`,
        //     `opening: ${event.target.opening.value}:00.000`,
        //     `closing: ${event.target.closing.value}:00.000`,
        //     `closed_on: ${event.target.closed_on.value}`,
        //     `address: ${event.target.address.value}`,
        //     `contact: ${event.target.contact.value}`,
        //     `postal_code: ${event.target.postal_code.value}`,
        //     `website: ${event.target.website.value}`,
        //     `remarks: ${event.target.remarks.value}`,
        //     `categories: ${mapCategories()}`)

        console.log(fetch("https://embark-n-explore.herokuapp.com/embarknexplores", {
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
        }))

        fetch("https://embark-n-explore.herokuapp.com/embarknexplores", {
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
        <>
            <h1>Suggest New Location or Service</h1>
            <form onSubmit={handleSubmit}>
                <label>Name of place or brand:</label>
                <input type="text" name="brand_or_location" required />
                <label>Opening hours:</label>
                <input type="time" name="opening" /> to <input type="time" name="closing" />
                <label>Closed on:</label>
                <select name="closed_on" placeholder="None" type="select" >
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
                <label>Address:</label>
                <input type="text" name="address" />
                <label>Postal code:</label>
                <input type="text" name="postal_code" />
                <label>Website:</label>
                <input type="text" name="website" />
                <label>Contact:</label>
                <input type="tel" name="contact" />
                <label>Remarks:</label>
                <input type="text" name="remarks" />
                <h4>If this suggestion has more than one categories, select these boxes. Note - At least one category selection is required.</h4>
                <label>Categories:</label>
                <MultiSelect options={options} value={selected} onChange={setSelected} labelledBy="Select" />
                {/* <label>Categories 3:</label>
                <select name="categories3" >
                    <option></option>
                    <option value="60978b8a1c7f6845bc4f90ee">Transport</option>
                    <option value="60978ba71c7f6845bc4f90ef">Parks and Dog Runs</option>
                    <option value="60978bb41c7f6845bc4f90f0">Beaches and Pools</option>
                    <option value="60978bcf1c7f6845bc4f90f1">Restaurants and Cafes</option>
                    <option value="60978bdf1c7f6845bc4f90f2">Pet Stores and Grooming</option>
                    <option value="60978bf01c7f6845bc4f90f3">Clinics and Hospitals</option>
                    <option value="60978c251c7f6845bc4f90f4">Daycare and Boarding</option>
                    <option value="60978c311c7f6845bc4f90f5">Staycation</option>
                    <option value="609793a81c7f6845bc4f90fc">Others</option>
                </select> */}
                <input type="submit" value="submit" />
            </form>
            <h3>Thanks for contributing! Our furry little ones now have another new place to explore!</h3>
        </>

    )
}