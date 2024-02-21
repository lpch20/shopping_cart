function Register() {
  return (
    <div>
      <form className="form">
        <span className="title">Register</span>
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required=""
          className="input"
        />
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required=""
          className="input"
        />
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required=""
          className="input"
        />
        <button type="submit" className="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
