import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { app } from "../Config/FireBase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [islogin, setIsLogin] = useState(true);
  const onClickHandler = () => {
    if (islogin) {
      signUP();
    } else {
      login();
    }
  };

  const auth = getAuth(app);

  const signUP = async () => {
    try {
      let sign = await createUserWithEmailAndPassword(auth, email, password);
      alert("SignIn SuccesFully");
      console.log(sign);
    } catch (error) {
      alert("Retry");
      console.log(error);
    }
  };

  const login = async () => {
    try {
      let sign = await signInWithEmailAndPassword(auth, email, password);
      alert("SignIn SuccesFully");
      console.log(sign);
    } catch (error) {
      alert("Retry");
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="w-96 mx-auto mt-14">
          <h1 className="mb-4 font-semibold text-2xl">
            {islogin ? "SignUp" : "Login"}
          </h1>
          {islogin ? (
            <>
              <input
                type="text"
                name=""
                id="name"
                placeholder="name"
                className=" border border-gray-400  mt-6 w-3/4 px-2 py-1 rounded-md"
              />{" "}
              <br />
              <input
                type="text"
                name=""
                id="uname"
                placeholder="userName"
                className=" border border-gray-400  mt-6 w-3/4 px-2 py-1 rounded-md"
              />{" "}
              <br /> <br />
            </>
          ) : null}

          <input
            type="email"
            name=""
            id="email"
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="border border-gray-400 w-3/4 px-2 py-1 rounded-md"
          />
          <br />
          <input
            type="password"
            name=""
            id="pass"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className=" border border-gray-400  mt-6 w-3/4 px-2 py-1 rounded-md"
          />
          <br />
          <button
            className="mt-6 py-2 bg-blue-600 px-6 rounded-md text-white"
            onClick={onClickHandler}
          >
            <span>{islogin ? "SignUp" : "Login"}</span>
          </button>
          <div>
            {" "}
            {islogin ? " You have already account " : "You Don't have account "}
            <button
              className="text-blue-600"
              onClick={() => {
                setIsLogin(!islogin);
              }}
            >
              {" "}
              {islogin ? "Login" : " Register"}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
