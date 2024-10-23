import axios from "axios";
import { createContext, useContext, useState } from "react";
import { USER_DELETE, USER_LIST } from "./ApiBaseURL";
import Swal from "sweetalert2";

const UserContextProvider = createContext();
const UserContext = ({ children }) => {
    // ==================== USER LIST ==================//
    const [userError, setUserError] = useState(null)
    const [userLoading, setUserLoading] = useState(false)
    const [userList, setUserList] = useState([])
    const [userPagination, setUserPagination] = useState(null)
    const [userSearch, setUserSearch] = useState('')
    const [userRole, setUserRole] = useState('')
    const [userSuspend, setUserSuspend] = useState('')
    const [dateFrom, setdateFrom] = useState('')
    const [dateTo, setDateTo] = useState('')

    const userFetch = async (page) => {
        try {
            setUserLoading(true)
            const response = await axios.get(`${USER_LIST}?search=${userSearch}&suspended=${userSuspend}&role=${userRole}&join_date_from=${dateFrom}&join_date_to=${dateTo}&page=${page}`)
            setUserList(response.data.payload)
            setUserPagination(response.data.pagination)
            setUserLoading(false)
        } catch (error) {
            console.error(error);
            setUserError(error)
        }
    }

    const userHandlePageChange = (page) => {
        userFetch(page);
        setUserPagination((prev) => ({ ...prev, current_page: page }));
    };

    const userHandleSearch = (e) => {
        setUserSearch(e.target.value);
    }

    const userHandleRole = (e) => {
        setUserRole(e.target.value);
    }

    const userHandleSuspend = (e) => {
        setUserSuspend(e.target.value);
    }

    const userHandleDateFrom = (e) => {
        setdateFrom(e.target.value);
    }
    const userHandleDateTo = (e) => {
        setDateTo(e.target.value);
    }

    // ==================== FIND BY USER FOR UPDATE ==================//
    const [updateUser, setUpdateUser] = useState({ first_name: "", last_name: "", user_name: "", email: "", phone: "", join_date: "", address: "", user_profile: null, role: "", is_suspended: "" });
    const [imagePreview, setImagePreview] = useState(null);

    const handlerInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateUser({ ...updateUser, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setUpdateUser({ ...updateUser, user_profile: file });
            setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the new image
        } else {
            setImagePreview(updateUser.profile_image); // Reset to existing image if no file is selected
        }
    };

    const findByUser = async (id) => {
        try {
            const response = await axios.get(`${USER_LIST}${id}`);
            setUpdateUser(response.data.payload);
            setImagePreview(response.data.payload.profile_image.url);
        } catch (error) {
            console.error(error);
        }
    }


    // ==================== USER DELETE ==================//
    const userDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete the item permanently?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete Item!',
            cancelButtonText: 'Cancel Item!',
            reverseButtons: true,
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`${USER_DELETE}${id}`);
                    Swal.fire('Deleted!', 'Your item is deleted permanently!', 'success');
                    userFetch(1);
                } catch (error) {
                    console.log(error);
                    Swal.fire('Error!', 'An error occurred while deleting.', 'error');
                }

            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your item is safe :)', 'info');
            }
        });
    };




















    return (
        <UserContextProvider.Provider value={{
            // user list
            userFetch, userError, userLoading, userList, userPagination, userSearch, userRole, userSuspend, dateFrom, dateTo, userHandlePageChange, userHandleSearch, userHandleRole, userHandleSuspend, userHandleDateFrom, userHandleDateTo,
            // user update
            findByUser, updateUser, setUpdateUser, imagePreview, setImagePreview, handlerInputChange, handleImageChange, userDelete
        }}>
            {children}
        </UserContextProvider.Provider>
    )
}

export default UserContext

// coustom hooks
export const useUserProvider = () => {
    return useContext(UserContextProvider)
};