export default function CreateEvents() {
    
    return (
            <div className="CreateEvents">
                <form className="CreateEvent" action="/api/event" method="post" autoComplete="off">
                <h2>Create event</h2>
                <label htmlFor='eventName'>Event Name:</label>
                    <input type="text" name="eventname"/>
                <label htmlFor='city'>City:</label>
                    <input type="text" name="city"/>
                <label htmlFor='address'>Address:</label>
                    <input type="text" name="address"/>
                <label htmlFor='date'>Date:</label>
                    <input type="text" name="date"/>
                <label htmlFor='age'>Age:</label>
                    <input type="text" name="age"/>
                <label htmlFor='payment'>Payment:</label>
                    <input type="text" name="payment"/>
                <button className="button-all">Submit</button>
                </form>
            </div>
    )
}