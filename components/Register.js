
const Register = (props) => {
    
    return(
        <div className="auth-form-container">
            <h2>Register</h2>
            <form className="register-form" action="/api/register" method="post" autoComplete="off">
            <label htmlFor='firstname'>First name:</label>
                <input type="text"
                name="firstname"
                />
                <label htmlFor='lastname'>Last name:</label>
                <input type="text"
                name="lastname"
                />
                <label htmlFor='phonenumber'>Phone number:</label>
                <input type="text"
                name="number"
                />
                <label htmlFor='date'>Date of birth:</label>
                <input type="text"
                name="date"
                />
                <label htmlFor='email'>Email:</label>
                <input type="email"
                name="email"
                />
                <label htmlFor='password'>Password:</label>
                <input type="password"
                name="password"
                />
                <br/>
                <button className="button-all" type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </div>
    )
}
export default Register