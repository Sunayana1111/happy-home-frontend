import './style.scss'
import AssetLoginImage from "../../assets/images/option6.svg"
import { useState } from 'react'

const LoginPage = () => {
    const [formValue, setFormValue] = useState({
        email: '',
        password: ''
    })

    const handleOnChange = (event) => {
        setFormValue({ ...formValue, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = () => {
        console.log(formValue, "hello")
    }

    return <div className="row login-container gx-5">
        <div className="col-md-12 login-container__main-col" >
            <div className="card login-container__login-form">
                <div className='row' >
                    <div className='col-6 login-container__bg-image' style={{
                        backgroundImage: `url(${AssetLoginImage})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                    }} />
                    <div className='col-6 login-container__form d-flex flex-column justify-content-center px-5'>
                        <h1 className="card-title">Login User</h1>
                        <p>Hey enter your details to sign in to your account!</p>
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" placeholder="Enter your email address" onChange={handleOnChange} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" id="passwordInput" onChange={handleOnChange} placeholder="Enter Password" required />
                            </div>
                            <input className="btn btn-primary btn-lg" type="submit" value="Login" />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default LoginPage;