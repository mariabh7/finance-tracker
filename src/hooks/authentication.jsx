import { useFormAction } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
const useCheckInputs = () => {
  const navigate = useNavigate();
  const errs = useRef({});
  const checkInputs = (e, type) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const errors = {};
    const [name, email, job, password] = [
      formData.get("name"),
      formData.get("email"),
      formData.get("job"),
      formData.get("password"),
    ];
    if (!emailRegex.test(email)) errors.email = "invalid email address";
    if (!passwordRegex.test(password))
      errors.password =
        "password must be at least 8 characters and include uppercase, lowercase, symbols...";
    if (type === "signup") {
      if (!name) errors.name = "required field";
      if (!job) errors.job = "required field";
    }
    if (Object.keys(errors).length === 0) {
      localStorage.setItem("logged", true);
      navigate(type === "signup" ? "/auth/login" : "/app");
    } else {
      for (let [key, msg] of Object.entries(errors)) {
        let p = document.createElement("p");
        p.textContent = msg;
        p.classList.add("text-red-500", "my-2", "capitalize");
        errs.current[key]?.appendChild(p);
        setTimeout(() => p.remove(), 4000);
      }
    }
  };
  return [errs, checkInputs];
};
export default useCheckInputs;
