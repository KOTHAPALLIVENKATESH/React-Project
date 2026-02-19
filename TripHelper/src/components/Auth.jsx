// src/component/Auth.jsx
import { useState } from "react";

const Auth = ({ mode }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    alert(`${mode === "signin" ? "Signed In" : "Signed Up"} Successfully`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>{mode === "signin" ? "Sign In" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginTop: 10 }}>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button style={{ marginTop: 15 }}>
          {mode === "signin" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Auth;