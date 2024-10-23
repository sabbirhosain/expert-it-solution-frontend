import { BiTrash } from "react-icons/bi";
import { USER_UPDATE } from "../../context/ApiBaseURL";
import { useUserProvider } from "../../context/UserContext";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const UpdateUsersModel = () => {
  const { userFetch, updateUser, handlerInputChange, imagePreview, handleImageChange } = useUserProvider()
  const CloseRef = useRef()
  const [loading, setLoading] = useState(false);

  const userHandleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const { first_name, last_name, user_name, email, phone, join_date, address, user_profile } = updateUser
    try {
      const formData = new FormData();
      formData.append('first_name', first_name);
      formData.append('last_name', last_name);
      formData.append('user_name', user_name);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('join_date', join_date);
      formData.append('address', address);
      if (user_profile) { formData.append('profile_image', user_profile); }

      const response = await axios.put(`${USER_UPDATE}${updateUser?._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data', }
      });
      if (response && response.data.success) {
        toast.success(response.data.message);
        CloseRef.current.click()
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
  }

  return (
    <div className="modal fade" id="updateModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content rounded-0">
          <form onSubmit={userHandleSubmit}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Users</h1>
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
                  <input type="text" className="form-control rounded-0" name='first_name' value={updateUser?.first_name || ""} onChange={handlerInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-control rounded-0" name='last_name' value={updateUser?.last_name || ""} onChange={handlerInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">User Name</label>
                  <input type="text" className="form-control rounded-0" name='user_name' value={updateUser?.user_name || ""} onChange={handlerInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="text" className="form-control rounded-0" name='email' value={updateUser?.email || ""} onChange={handlerInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone Number</label>
                  <input type="text" className="form-control rounded-0" name='phone' value={updateUser?.phone || ""} onChange={handlerInputChange} required />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input type="text" className="form-control rounded-0" name='address' value={updateUser?.address || ""} onChange={handlerInputChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Image</label>
                  <input type="file" className="form-control rounded-0" accept="image/*" onChange={handleImageChange} />
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-between">
              <div className='d-flex gap-2'>
                {imagePreview && (
                  <div className='position-relative'>
                    <img src={imagePreview} style={{ width: "50px", height: "50px", objectFit: "cover" }} />
                    {/* <BiTrash style={{ position: "absolute", right: "0px", top: "0px", color: "yellow", cursor: "pointer" }}
                      onClick={() => {
                        setUpdateUser({ ...updateUser, user_profile: null }); // Clear the file input
                        setImagePreview(updateUser.profile_image); // Reset to existing image
                      }}
                    /> */}
                  </div>
                )}
              </div>

              <div className='d-flex gap-2'>
                <button type="button" data-bs-dismiss="modal" className="btn btn-secondary rounded-0" disabled={loading}>Cancel</button>
                <button type="submit" className="btn btn-primary rounded-0" disabled={loading}>{loading ? "Updating..." : "Submit"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateUsersModel