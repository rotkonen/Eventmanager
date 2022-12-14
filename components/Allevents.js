export default function AllEvents() {

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
                    <th className="table-head-text">
                        <span>Participants</span>
                    </th>
                </tr>
            </thead>
            <tbody className="table-body">
                <tr>
                    <td className="table-body-text">
                        <span>Niklas Party</span>
                    </td>
                    <td className="table-body-text">
                        <span>Helsinki</span>
                    </td>
                    <td className="table-body-text">
                        <span>Sulkapolku 9</span>
                    </td>
                    <td className="table-body-text">
                        <span>02.07.2023</span>
                    </td>
                    <td className="table-body-text">
                        <span>18</span>
                    </td>
                    <td className="table-body-text">
                        <span>25</span>
                    </td>
                    <td className="table-body-text">
                        <span>10</span>
                    </td>
                    <td className="table-body-button">
                        <button className="table-button-join">Join</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}