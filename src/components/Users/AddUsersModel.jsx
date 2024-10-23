import { BiTrash } from "react-icons/bi";
import { useUserProvider } from "../../context/UserContext";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { USER_CREATE } from "../../context/ApiBaseURL";
import axios from "axios";

const AddUsersModel = () => {
  const { userFetch } = useUserProvider()
  const CloseRef = useRef()
  const imageInputRef = useRef()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const today = new Date().toISOString().split('T')[0];
  const [joiningDate, setJoiningDate] = useState(today)
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // const handleImageChange = (e) => {
  //   const selectedImage = e.target.files[0];
  //   if (selectedImage) {
  //     const MAX_FILE_SIZE = 5 * 1024 * 1024;
  //     if (selectedImage.size > MAX_FILE_SIZE) {
  //       toast.error("File size exceeds the 5MB limit.");
  //       imageInputRef.current.value = ""; // Clear the file input
  //       return;
  //     }
  //     setImage(selectedImage); // Set image if valid
  //   }
  // };


  const resetFields = () => {
    setFirstName(""); setLastName(""); setUsername(""); setEmail(""); setPhone(""); setJoiningDate(""); setPassword(""); setConfirmPassword(""); setImage(null)
    if (imageInputRef.current) { imageInputRef.current.value = "" }
  };

  const userHandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      if (password !== confirmPassword) {
        setLoading(false)
        return alert('Confirm Password do not match...!!');
      }

      const formData = new FormData();
      formData.append('first_name', firstName);
      formData.append('last_name', lastName);
      formData.append('user_name', username);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('join_date', joiningDate);
      formData.append('password', password);
      formData.append('confirm_password', confirmPassword);
      if (image) { formData.append('profile_image', image); }

      const response = await axios.post(USER_CREATE, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      if (response && response.data.success) {
        toast.success(response.data.message);
        CloseRef.current.click()
        resetFields();
        userFetch(1);
      } else {
        alert(response.data.message);
      }

    } catch (error) {
      console.error(error);
      toast.error("Somthing want wrong..!!")
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal fade" id="exampleModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-0">
          <form onSubmit={userHandleSubmit}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Register Users</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={CloseRef}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-control rounded-0" value={firstName} onChange={(event) => setFirstName(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-0" value={lastName} onChange={(event) => setLastName(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control rounded-0" value={username} onChange={(event) => setUsername(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control rounded-0" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="number" className="form-control rounded-0" value={phone} onChange={(event) => setPhone(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Join Date</label>
                  <input type="date" className="form-control rounded-0" value={joiningDate} onChange={(event) => setJoiningDate(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control rounded-0" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input type="password" className="form-control rounded-0" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control rounded-0" accept="image/*" onChange={(e) => setImage(e.target.files[0])} ref={imageInputRef} />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <div className='d-flex gap-2'>
                {image && (
                  <div className='position-relative'>
                    <img src={URL.createObjectURL(image)} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                    <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }} onClick={() => setImage(null)} />
                  </div>
                )}
              </div>
              <div className='d-flex gap-2'>
                <button type="reset" className="btn btn-secondary rounded-0" onClick={resetFields} disabled={loading}>Reset</button>
                <button type="submit" className="btn btn-primary rounded-0" disabled={loading}>{loading ? "Uploading..." : "Submit"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUsersModel;