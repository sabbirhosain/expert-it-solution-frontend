import { Link } from "react-router-dom"

const Login = () => {
  return (
    <section className='container d-flex align-items-center justify-content-center vh-100'>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className='shadow-sm bg-white p-5'>
            <h4 className='text-center text-uppercase mb-4'>Login Now</h4>
            <div className="row">
              <div className="col-md-12 mb-3">
                <label className='form-label'>Email / Phone</label>
                <input type="text" className='form-control rounded-0' />
              </div>
              <div className="col-md-12 mb-3">
                <label className='form-label'>Password</label>
                <input type="password" className='form-control rounded-0' />
              </div>
              <div className="col-md-12 mb-3">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" />
                    <label className="form-check-label" for="flexCheckIndeterminate"> Remember Password </label>
                  </div>
                  <Link to='/forget'>Forget Password</Link>
                </div>
              </div>
              <div className="col-md-12 mt-2">
                <button type="submit" className='btn btn-dark rounded-0 w-100 text-uppercase'>Login Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login