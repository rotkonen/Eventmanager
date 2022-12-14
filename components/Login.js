

const Login = (props) => {

return(
    <div>
        <h1>Event management</h1>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" action="/api/login" method="post" autoComplete="off">
                <label htmlFor='email'>Email:</label>
                <input type="email"
                name="email"
                placeholder="email@gmail.com"
                required
                />
                <label htmlFor='password'>Password:</label>
                <input type="password"
                name="password"
                placeholder="*********"
                required
                />
                <br/>
                <button className="button-all" type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    </div>
)}

export default Login