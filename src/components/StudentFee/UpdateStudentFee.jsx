import { useState } from 'react';
import Select from 'react-select';

const UpdateStudentFee = () => {
    const [userList, setUserList] = useState();
    const [loading, setLoading] = useState(false);

    const options = [
        { value: "1", label: "Sabbir Hosain" },
        { value: "2", label: "Raisul Islam" },
        { value: "3", label: "Golam Rabbi" },
    ];

    const handleChange = (selectedUserType) => {
        setUserList(selectedUserType);
    };

    const customStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: "white",
            border: "1px solid #dee2e6",
            borderRadius: "0px",
        }),
    };

    return (
        <div className="modal fade" id="updateModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-0">
                    <form action="">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                Add Student Course Fee
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Student Name</label>
                                    <Select
                                        options={options}
                                        value={userList}
                                        onChange={handleChange}
                                        isLoading={loading}
                                        placeholder={loading ? "Loading..." : "Select Student..."}
                                        isClearable={true}
                                        styles={customStyles}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Payable Date</label>
                                    <input type="date" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Batch No</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Father's Name</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Email Address</label>
                                    <input type="email" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Name</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Fee</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Total Due</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Payable Amount</label>
                                    <input type="number" className="form-control rounded-0" min='100' max='1000' />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Current Due</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Next Payable Date</label>
                                    <input type="date" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Write Comments</label>
                                    <textarea className="form-control rounded-0" rows="1" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-end">
                            <div className='d-flex gap-2'>
                                <button type="button" data-bs-dismiss="modal" aria-label="Close" className="btn btn-secondary rounded-0">Close</button>
                                <button type="submit" className="btn btn-primary rounded-0">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateStudentFee