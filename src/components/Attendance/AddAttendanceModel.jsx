import React from 'react'

const AddAttendanceModel = () => {
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-0">
          <form action="">
            <div className="modal-header">
              <h6 className="modal-title fs-5" id="exampleModalLabel"> Batch No : EISTS - 01 &emsp;-&emsp; Web Development</h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <img src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=826&t=st=1726582928~exp=1726583528~hmac=f5f57e59f2e03486c4c56b803637cd61e4b87e4306ddb4d9ca92676192667ac2" className='img-thumbnail' alt="student image" />
                </div>
                <div className="col-md-8 mb-3">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Date and Time</label>
                      <input type="date" className="form-control rounded-0" readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Batch No</label>
                      <input type="text" className="form-control rounded-0" placeholder='EISTS - 01' readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Roll No</label>
                      <input type="text" className="form-control rounded-0" placeholder='01' readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Student Name</label>
                      <input type="text" className="form-control rounded-0" placeholder='Jon Ismit' readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Father Name</label>
                      <input type="text" className="form-control rounded-0" placeholder='Jon Deo' readOnly />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Course Name</label>
                      <input type="text" className="form-control rounded-0" placeholder='Basic Computer and MS Office' readOnly />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <textarea className="form-control rounded-0" rows="1" placeholder='Write hear...' />
                </div>
                <div className="col-md-6">
                  <div className='d-md-flex align-items-center gap-3'>
                    <button type='button' className="btn btn-danger rounded-0 w-100">Absent</button>
                    <button type='button' className="btn btn-success rounded-0 w-100">Present</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-end">
              <div className='d-flex gap-2'>
                <button type="button" className="btn btn-secondary rounded-0">Prev</button>
                <button type="button" className="btn btn-primary rounded-0">Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddAttendanceModel