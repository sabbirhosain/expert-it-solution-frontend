import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import image from "../../assets/images.png"
import { useUserProvider } from "../../context/UserContext";

const UsersTable = () => {
  const paginationOptions = { noRowsPerPage: true };
  const { userFetch, userError, userLoading, userList, userPagination, userSearch, userRole, userSuspend, dateFrom, dateTo, userHandlePageChange, findByUser, userDelete } = useUserProvider()

  useEffect(() => {
    userFetch(userPagination?.current_page || 1);
  }, [userSearch, userRole, userSuspend, dateFrom, dateTo, userPagination?.current_page]);

  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => index + 1,
      width: "20px"
    },
    {
      name: "Joining Date",
      selector: row => row.join_date,
    },
    {
      name: "Image",
      selector: row => row.profile_image ? (
        <a href={row.profile_image.secure_url} target="_blank">
          <img src={row.profile_image.secure_url} alt="Profile" style={{ width: '30px', height: 'auto', objectFit: 'cover', cursor: 'pointer' }} />
        </a>
      ) : (
        <img src={image} alt="Default" style={{ width: '30px', height: 'auto', objectFit: 'cover', cursor: 'pointer' }} />
      ),
    },
    {
      name: "Name",
      selector: row => row.full_name,
    },
    {
      name: "User Name",
      selector: row => row.user_name,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Address",
      selector: row => row.address === null ? "N/A" : row.address,
    },
    {
      name: "Role",
      selector: row => <button style={{ backgroundColor: "purple", padding: "5px 20px", color: "white", borderRadius: "0px", textTransform: "capitalize" }} data-bs-toggle="modal" data-bs-target="#roleModal" onClick={() => findByUser(row._id)}>{row.role}</button>
    },
    {
      name: "User Status",
      selector: row => row.isSuspended === true ?
        <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }} data-bs-toggle="modal" data-bs-target="#suspendModal" onClick={() => findByUser(row._id)}>Suspend</button> :
        <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }} data-bs-toggle="modal" data-bs-target="#suspendModal" onClick={() => findByUser(row._id)}>Active</button>,
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <button data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-outline-success rounded-0 btn-sm" onClick={() => findByUser(row._id)}><BiEditAlt /></button>
        <button className="btn btn-outline-danger rounded-0 btn-sm" onClick={() => userDelete(row._id)}><BiTrash /></button>
        <button className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></button>
      </div>

    }
  ];

  if (userError) {
    return <div>Error: {userError.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={userList}
          pagination
          paginationServer
          progressPending={userLoading}
          paginationComponentOptions={paginationOptions}
          paginationPerPage={5}
          paginationTotalRows={userPagination?.total_data}
          onChangePage={userHandlePageChange}
        />
      </>
    )
  }
}

export default UsersTable