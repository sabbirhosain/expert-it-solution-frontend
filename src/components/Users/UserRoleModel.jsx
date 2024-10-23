import { useRef, useState } from "react";
import { useUserProvider } from "../../context/UserContext";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_ROLE } from "../../context/ApiBaseURL";

const UserRoleModel = () => {
    const { updateUser, handlerInputChange, userFetch } = useUserProvider()
    const CloseRef = useRef()
    const [loading, setLoading] = useState(false);

    const userHandleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { role } = updateUser
            const response = await axios.patch(`${USER_ROLE}${updateUser?._id}`, {
                role: role
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
        <div className="modal fade" id="roleModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={userHandleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Select User Role</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={CloseRef}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12 mb-3">
                                <label className="form-label">Select Role</label>
                                <div className='w-100'>
                                    <select className="form-select rounded-0" name='role' value={updateUser?.role || ""} onChange={handlerInputChange}>
                                        <option value="user">Users</option>
                                        <option value="manager">Manager</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary rounded-0" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary rounded-0" disabled={loading}>{loading ? "Updating..." : "Submit"}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRoleModel