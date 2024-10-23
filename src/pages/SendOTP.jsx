import React, { createRef, useState } from 'react'

const SendOTP = () => {
    const [sendOtp, setSendOTP] = useState(['', '', '', '', '', '']);
    const inputRefs = Array.from({ length: 6 }, () => createRef());

    const handleInputChange = (index, event) => {
        const value = event.target.value;
        if (isNaN(value) || value.length > 1) {
            return;
        }

        const newOTP = [...sendOtp];
        newOTP[index] = value;
        setSendOTP(newOTP);

        if (index < inputRefs.length - 1 && value !== '') {
            inputRefs[index + 1].current.focus();
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && index > 0 && sendOtp[index] === '') {
            inputRefs[index - 1].current.focus();
        }
    };




    return (
        <section className='container d-flex align-items-center justify-content-center vh-100'>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <form className='shadow-sm bg-white p-5'>
                        <h4 className='text-center text-uppercase mb-4'>Enter Your OTP</h4>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <div className="d-flex align-items-center">
                                    {sendOtp.map((value, index) => <input type="text"
                                        key={index}
                                        value={value}
                                        maxLength='1'
                                        onChange={(e) => handleInputChange(index, e)}
                                        onKeyDown={(e) => handleKeyDown(index, e)}
                                        ref={inputRefs[index]}
                                        required className='form-control rounded-0' />)}
                                </div>
                            </div>
                            <div className="col-md-12 mt-2">
                                <button type="submit" className='btn btn-dark rounded-0 w-100 text-uppercase'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SendOTP