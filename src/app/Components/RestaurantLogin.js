export default function RestaurantLogin() {
  return (
    <>
      <h3>Login</h3>
      <div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="text"
            placeholder="Enter Email Id"
          />
        </div>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            name=""
            id=""
            placeholder="Enter Password"
          />
        </div>
        <div className="input-wrapper">
          <button className="input-field">Login</button>
        </div>
      </div>
    </>
  );
}
