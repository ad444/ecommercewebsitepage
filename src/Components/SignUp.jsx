import React,{useState} from 'react'
import {useHistory} from 'react-router';
import {Link} from 'react-router-dom';
import Logo from '../Images/Company_Logo.png'
import '../CSS/signup.css';
const SignUp = () => {
    //calling history api here..
    const history = useHistory();

    //setting user sign up data
    const [data, setdata] = useState({
        name:"",
        email:"",
        mobile_number:"",
        password:""
    })

    //error validation message
    const [errorMessage, seterrorMessage] = useState({
        name:'',
        email:'',
        mobile_number:'',
        password:''
    })

    const setData = (e)=>{
        setdata((prev)=>{
           return {
               ...prev,
               [e.target.name]:e.target.value
           }
        })
    }

    const Validator = (name, email, mobile_number, password)=>{
        let nameerror, emailerror, mobile_numbererror, passworderror = false;

        let pattName = /^[A-z]+\s[A-z]+$/;
        let pattEmail = /^\w+@[a-z.A-Z]+\.[a-zA-Z]{2,3}$/;
        let pattNumber = /^\d{10}$/;
        let pattPassword = /[A-z]{6}[0-9]{4}\W{2}/;
        
        if(!pattName.test(name) || name===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  name:'Enter valid name'
               }
           })
           nameerror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   name:''
                }
            })
            nameerror = false;
        }
        if(!pattEmail.test(email) || email===''){
           seterrorMessage((prev)=>{
               return {
                  ...prev,
                  email:'Enter valid email for ex:abc@gmail.com'
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
        if(!pattNumber.test(mobile_number || mobile_number==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  mobile_number:'Enter valid number'
               }
           })        
           mobile_numbererror = true;
        }else{
            seterrorMessage((prev)=>{
                return {
                   ...prev,
                   mobile_number:''
                }
            })
            mobile_numbererror = false;
        }
        if(!pattPassword.test(password || password==='')){
          seterrorMessage((prev)=>{
               return {
                  ...prev,
                  password:'Password must contain 6 characters, 4 digits & 2 special characters'
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

        if(nameerror === false && emailerror === false && mobile_numbererror === false && passworderror === false){
            history.push('/')
        }
    }

    const submitData = (e)=>{
        e.preventDefault();
        Validator(data.name, data.email, data.mobile_number, data.password);
    }

    //setting title for the document
    window.document.title = 'E-Commerce | Sign Up';

    //function to clear errors on focusing input bars
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
                        <p id="loginFormHeader">Sign Up</p>
                        <form id="loginform" onSubmit={submitData}>
                            <div className="form-group"><label htmlFor="name">Name :</label><input className="form-control userDetails" onChange={setData} onFocus={clearError} value={data.name} id="name" type="text" name="name" placeholder="Enter your name" autocomplete="off" />
                                <div className="validationMessage" id="userNameValidationMessage">{errorMessage.name}</div>
                            </div>
                            <div className="form-group"><label htmlFor="email">Email address :</label><input className="form-control userDetails" onChange={setData} onFocus={clearError} value={data.email} id="email" type="email" name="email" aria-describedby="emailHelp" placeholder="Enter your email address" autocomplete="off" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.email}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Number1">Number</label>
                                <input type="number" onChange={setData} onFocus={clearError} value={data.mobile_number} className="form-control" name="mobile_number" id="Number1" placeholder="Enter your Number" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.mobile_number}</div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Password1">Password</label>
                                <input type="password" onChange={setData} onFocus={clearError} value={data.password} className="form-control" name="password" id="Password1" placeholder="Password" />
                                <div className="validationMessage" id="userEmailValidationMessage">{errorMessage.password}</div>
                            </div><small className="form-text" id="emailHelp">We&apos;ll never share your email with anyone else.</small>
                            <button id="loginFormSubmitBtn" type="submit">Sign Up</button><span id="loginQuestion">Already a user?</span>
                        </form>
                        <form id="linkToLogIn"><Link to="/login" id="loginLink">Log In</Link></form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
