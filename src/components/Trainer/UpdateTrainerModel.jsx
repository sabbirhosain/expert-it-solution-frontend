const UpdateTrainerModel = () => {
  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-0">
          <form action="">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Trainer</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expert In</label>
                  <input type="text" className="form-control rounded-0" />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Photo</label>
                  <input type="file" className="form-control rounded-0" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="reset" className="btn btn-secondary rounded-0">Reset</button>
              <button type="submit" className="btn btn-primary rounded-0">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateTrainerModel