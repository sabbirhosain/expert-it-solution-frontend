import { Link } from "react-router-dom"

const Forget = () => {
    return (
        <section className='container d-flex align-items-center justify-content-center vh-100'>
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <form className='shadow-sm bg-white p-5'>
                        <h4 className='text-center text-uppercase mb-4'>Forget Password</h4>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                                <label className='form-label'>Email / Phone</label>
                                <input type="text" className='form-control rounded-0' />
                            </div>
                            <div className="col-md-12 mt-2">
                                <Link to='/send-otp' className='btn btn-dark rounded-0 w-100 text-uppercase'>Send OTP</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Forget