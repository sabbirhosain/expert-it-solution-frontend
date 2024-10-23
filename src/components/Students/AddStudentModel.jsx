import { useState } from 'react';
import Select from 'react-select';
import img from "../../assets/medium.webp"
import { BiTrash } from "react-icons/bi";
const AddStudentModel = () => {
    const [userList, setUserList] = useState();
    const [loading, setLoading] = useState(false);

    const options = [
        { value: "1", label: "Basic Computer with MS Office" },
        { value: "2", label: "Web Design" },
        { value: "3", label: "Graphic Design" },
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
        <div className="modal fade" id="exampleModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-0">
                    <form action="">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                New Admission Student
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
                                    <label className="form-label">First Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Last Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Father's Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Mother's Name</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Phone Number</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Blood Group</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Name</label>
                                    <Select
                                        options={options}
                                        value={userList}
                                        onChange={handleChange}
                                        isLoading={loading}
                                        placeholder={loading ? "Loading..." : "Select Courses..."}
                                        isClearable={true}
                                        styles={customStyles}
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Duration</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Courses Fee</label>
                                    <input type="text" className="form-control rounded-0" readOnly />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Payment</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Discount %</label>
                                    <input type="number" className="form-control rounded-0" min="0" max="100" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Batch No</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Select Photo</label>
                                    <input type="file" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Select Documents File</label>
                                    <input type="file" className="form-control rounded-0" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label className="form-label">Write Comments</label>
                                    <textarea className="form-control rounded-0" rows="1" />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer justify-content-between">
                            <div className='d-flex gap-2'>
                                <div className='position-relative'>
                                    <img src={img} style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }} />
                                    <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }} />
                                </div>
                                <div className='position-relative'>
                                    <img src={img} style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }} />
                                    <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }} />
                                </div>
                                <div className='position-relative'>
                                    <img src={img} style={{ maxWidth: "50px", maxHeight: "50px", objectFit: "cover" }} />
                                    <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }} />
                                </div>
                            </div>
                            <div className='d-flex gap-2'>
                                <button type="reset" className="btn btn-secondary rounded-0">Reset</button>
                                <button type="submit" className="btn btn-primary rounded-0">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddStudentModel