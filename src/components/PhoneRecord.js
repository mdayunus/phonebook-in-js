import react, { useState } from "react";
import { phoneRecords } from "../model/phone_record";

const PhoneRecord = (props) => {
    return (
        <li>{`hello ${props.name}, your numebr is ${props.number}`}</li>
    )
}

export const PhoneRecords = () => {

    const [records, setRecords] = useState(phoneRecords)
    const [newRecord, setNewRecord] = useState({ name: 'enter name here...', number: 'enter number here...' })

    const handleRecordSubmit = (event) => {
        event.preventDefault()
        console.log('saved')
        const newPhoneRecord = {
            name: newRecord.name,
            number: newRecord.number
        }
        setRecords(records.concat(newPhoneRecord))
        setNewRecord({ name: 'enter name here...', number: 'enter number here...' })
    }

    const handleRecordName = (event) => {
        console.log(event.target.value)
        setNewRecord({ ...newRecord, name: event.target.value })
    }

    const handleRecordNumber = (event) => {
        console.log(event.target.value)
        setNewRecord({ ...newRecord, number: event.target.value })
    }

    return (
        <div>
            <div>
                <form onSubmit={handleRecordSubmit}>
                    <input value={newRecord.name} onChange={handleRecordName} />
                    <input value={newRecord.number} onChange={handleRecordNumber} />
                    <button type="submit">Save</button>
                </form>
            </div>
            <div>
                <ul>
                    {records.map(record => <PhoneRecord key={record.number} name={record.name} number={record.number} />)}
                </ul>
            </div>
        </div>
    )
}