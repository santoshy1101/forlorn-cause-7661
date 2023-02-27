import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputControl } from "../../Components/InputControl/InputControl";
import styles from "../SignupPage/Signup.module.css";
import {  useToast } from "@chakra-ui/react";
import {GoogleButton} from 'react-google-button'
import axios from "axios";
// import { googleSignInInitiate, loginInitiate } from "../../Redux/Authentication/action";


const initialState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: ""
}

export const SignUp = () => {
  
    const [values, setValues] = useState(initialState);
      const toast = useToast();
  const navigate = useNavigate();
      const handleSubmit = () => {
        const payload = {
          name: values.name,
            email: values.email, password: values.password,
            password_confirmation: values.password_confirmation
        }
            axios.post(`http://localhost:8000/api/user/register`, payload).then(res=>{
                console.log(res.data.message);
                if (res.data.status === 'failed'){
                    toast({
                        title: 'User Registration Failed',
                        position: 'top',
                        description: `${res.data.message}`,
                      })
                      setValues(initialState);
                      return ;
                }else{
                    toast({
                        title: 'User Registration Successful',
                        position: 'top',
                        description: `${res.data.message}`,
                      })
                      navigate("/user/login");
                      setValues(initialState);
                }
                

            }).catch(error=> console.log(error));
      }
  
  return (
    <div>
      <div className={styles.container}>
      
        <div className={styles.innerBox}>
          {/* <Image src={logo} w="100px" margin="auto"/> */}
          <Link to="/">
            {/* <Image src={logo} w="100px" margin="auto"/> */}
            </Link>
          <h1 className={styles.heading}>Signup to Wearly Store</h1>
          <InputControl
            label="Name"
            type="text"
            value={values.name}
            placeholder="Enter your name"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <InputControl
            label="Email"
            type="email"
            value={values.email}
            placeholder="Enter Email Address"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label="Password"
            type="password"
            value={values.password}
            placeholder="Enter Your Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <InputControl
            label="Confirm Password"
            type="password"
            value={values.password_confirmation}
            placeholder="Enter Your Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password_confirmation: e.target.value }))
            }
          />


          <div className={styles.footer}>
            <button onClick={handleSubmit}>
              Signup
            </button>
            <p>
               Have an account ?{" "}
              <span>
                <Link to="/user/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};