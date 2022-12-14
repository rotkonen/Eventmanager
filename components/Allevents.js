import { getEvent } from "../lib/helper"
import { useQuery } from "react-query"

export default function AllEvents() {

    const {isLoading, isError, data, error} = useQuery('users', getEvent)

    if(isLoading)return<div>Employe is Loading...</div>
    if(isError)return<div>Got Error {error}</div>

    return (
        <table className="display-events">
            <thead className="table-head">
                <tr>
                    <th className="table-head-text">
                        <span>Event Name</span>
                    </th>
                    <th className="table-head-text">
                        <span>City</span>
                    </th>
                    <th className="table-head-text">
                        <span>Address</span>
                    </th>
                    <th className="table-head-text">
                        <span>Date</span>
                    </th>
                    <th className="table-head-text">
                        <span>Age</span>
                    </th>
                    <th className="table-head-text">
                        <span>Payment</span>
                    </th>
                </tr>
            </thead>
            <tbody className="table-body">
               {
                data.map((obj,i) =><Tr {...obj} key={i}/>)
               }
            </tbody>
        </table>
    )
}

function Tr({id,eventname, city, address, date, age, payment}){
    return(
        <tr>
            <td className="table-body-text">
                <span>{eventname || "-"}</span>
            </td>
            <td className="table-body-text">
                <span>{city || "-"}</span>
            </td>
            <td className="table-body-text">
                <span>{address || "-"}</span>
            </td>
            <td className="table-body-text">
                <span>{date || "-"}</span>
            </td>
            <td className="table-body-text">
                <span>{age || "-"}</span>
            </td>
            <td className="table-body-text">
                <span>{payment || "-"}</span>
            </td>
            <td className="table-body-button">
                <button className="table-button-join">Join</button>
            </td>
            </tr>
    )
}

