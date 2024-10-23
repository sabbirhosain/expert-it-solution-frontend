import { useRef, useState } from "react";
import { useUserProvider } from "../../context/UserContext";
import { toast } from "react-toastify";
import { USER_SUSPENDED } from "../../context/ApiBaseURL";
import axios from "axios";

const UserSuspendModel = () => {
    const { updateUser, handlerInputChange, userFetch } = useUserProvider()
    const CloseRef = useRef()
    const [loading, setLoading] = useState(false);

    const userHandleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const { is_suspended } = updateUser
            const response = await axios.patch(`${USER_SUSPENDED}${updateUser?._id}`, {
                isSuspended: is_suspended
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
        <div className="modal fade" id="suspendModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={userHandleSubmit}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Select User Status</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={CloseRef}></button>
                        </div>
                        <div className="modal-body">
                            <div className="col-md-12 my-3">
                                <div className='w-100'>
                                    <select className="form-select rounded-0" name='is_suspended' value={updateUser?.is_suspended || ""} onChange={handlerInputChange}>
                                        <option value="false">Active</option>
                                        <option value="true">Suspended</option>
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

export default UserSuspendModel