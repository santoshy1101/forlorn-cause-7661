import React, { useState, } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { InputControl } from "../../Components/InputControl/InputControl";
import styles from "../Login/Login.module.css";
import {  useToast } from "@chakra-ui/react";
import {GoogleButton} from 'react-google-button'
import axios from "axios";
import { googleSignInInitiate } from "../../Redux/Authentication/action";

const initialState = {
    email: "",
    password: "",
  }

export const Login = () => {
  
    const [values, setValues] = useState(initialState);
      const toast = useToast();
      const dispatch = useDispatch();

      const handleSubmit = () => {
        const payload = {
            email: values.email, password: values.password,
        }
            axios.post(`http://localhost:8000/api/user/login`, payload).then(res=>{
                if (res.data.status === 'failed'){
                    toast({
                        title: 'User Login Failed',
                        position: 'top',
                        description: `${res.data.message}`,
                      })
                      dispatch()
                      setValues(initialState);
                      return ;
                }else{
                    if(values.email === "abhishek@gmail.com"){
                        toast({
                            title: `${res.data.user} Login Success as admin`,
                            position: 'top',
                            description: `${res.data.message}`,
                          })
                          console.log(res);
                          setValues(initialState);
                    }else{
                        toast({
                            title: `${res.data.user} Login Success as user`,
                            position: 'top',
                            description: `${res.data.message}`,
                          })
                          console.log(res);
                          setValues(initialState);
                    }
                    }
                    
                
                setValues(initialState);
            }).catch(error=> console.log(error));
      }

      const handleGoogleSignin = () => {
        dispatch(googleSignInInitiate());
      }
  
  return (
    <div>
      <div className={styles.container}>
      
        <div className={styles.innerBox}>
          {/* <Image src={logo} w="100px" margin="auto"/> */}
          <Link to="/">
            {/* <Image src={logo} w="100px" margin="auto"/> */}
            </Link>
          <h1 className={styles.heading}>Log in to Wearly Store</h1>
          <InputControl
            label="Email"
            type="email"
            value = {values.email}
            placeholder="Enter Email Address"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <InputControl
            label="Password"
            type="password"
            value= {values.password}
            placeholder="Enter Your Password"
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />

          <div className={styles.footer}>
            <button onClick={handleSubmit}>
              Login
            </button>
            <GoogleButton onClick={handleGoogleSignin}/>
            <p>
              Don't have an account ?{" "}
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};