"use client";
import { useState } from "react";
import RestaurantLogin from "../Components/RestaurantLogin";
import RestaurantSignUp from "../Components/RestaurantSignUp";
import Header from "../Components/Header";
import "./style.css";
import Footer from "../Components/Footer";
export default function page() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <div className="container">
        <Header />
        <h1>Restaurant Page</h1>
        {login ? <RestaurantLogin /> : <RestaurantSignUp />}
        <div>
          <button className="button-link" onClick={() => setLogin(!login)}>
            {login
              ? "Don't have Account? SignUp"
              : "Already Have Account? Login"}{" "}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
