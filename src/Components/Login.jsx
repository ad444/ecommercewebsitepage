import React, {useState} from 'react';
import Logo from '../Images/Company_Logo.png';
import '../CSS/login.css';
import {Link} from 'react-router-dom';
const LogIn = () => {

    const [data, setdata] = useState({
        email:"",
        password:""
    });

    const setData = (e)=>{
       setdata((prev)=>{
          return {
              ...prev,
              [e.target.name]:e.target.value
          }
       })
    }

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        email:'',
        password:''
    })

    const Validator = (email, password)=>{
        let emailerror, passworderror = false;

        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattPassword = /^[A-z]{6}[0-9]{4}\W{2}$/;
        
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  email:'Please enter valid email'
               }
           })       
           emailerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   email:''
                }
            })
            emailerror = false;
        }
        
        if(!pattPassword.test(password || password==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  password:'Please enter correct password'
               }
           })
           passworderror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   password:''
                }
            })
            passworderror = false;
        }

        if(emailerror === false && passworderror === false){
            window.location.href='/';
        }
    }

    const userloginDetail = (e)=>{
      e.preventDefault();
      Validator(data.email, data.password);
    }

    //setting title for the document
    window.document.title = 'E-Commerce | LogIn';

    const clearError = (e) =>{
        const element= e.target.name;
        seterrorMessage((prev)=>{
           return {
               ...prev,
               [element]:''
           } 
        });
    }

    return (
        <>
            <div className="container-fluid" id='navbar'>
                <div className="row">
                    <div className="col-12" id='navbarBrand'><Link to="/"><img id="companyLogo" src={Logo} alt='company_logo' />
                    <p id="companyTitle"><span id="companyNameFirstLetter">E-</span>Shop</p></Link></div>
                </div>
            </div>
            <div className="container-fluid" id="formContainer">
                <div className="row" id="loginFormFieldSet">
                    <div className="col-12 col-sm-10 col-md-6 mx-auto" id="loginFormFieldSetContainer">
                        <p id="loginFormHeader">Login</p>
                        <form id="loginform" onSubmit={userloginDetail}>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} onFocus={clearError} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.email}</div>
                            </div>
                            <div className="form-group"><label htmlFor="password">Password :</label><input className="form-control userDetails" onChange={setData} onFocus={clearError} value={data.password} id="password" type="password" name="password" aria-describedby="passwordHelp" placeholder="Enter password here" />
                                <div className="validationMessage" id="userPasswordValidationMessage">{errorMessage.password}</div><small className="form-text" id="emailHelp">We&apos;ll never share your information with anyone else.</small>
                            </div>
                            <button id="loginFormSubmitBtn" type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogIn;
