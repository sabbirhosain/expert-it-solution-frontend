import React, { useState } from 'react'

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const passwordShowToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <section className='container d-flex align-items-center justify-content-center vh-100'>
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <form className='shadow-sm bg-white p-5'>
                        <h4 className='text-center text-uppercase mb-4'>Enter New Password</h4>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Password</label>
                                <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                            </div>
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>New Password</label>
                                <input type={showPassword ? "text" : "password"} className='form-control rounded-0' />
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-check">
                                    <input onClick={passwordShowToggle} className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                                    <label className="form-check-label" for="flexCheckIndeterminate">{showPassword ? 'Hide Password' : 'Show Password'}</label>
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <button type="submit" className='btn btn-dark rounded-0 w-100 text-uppercase'>Change Password</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default NewPassword