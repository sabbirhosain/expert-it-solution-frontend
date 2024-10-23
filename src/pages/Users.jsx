import Layout from '../layout/Layout'
import AddUsersModel from '../components/Users/AddUsersModel';
import UpdateUsersModel from '../components/Users/UpdateUsersModel';
import UsersTable from '../components/Users/UsersTable';
import { useUserProvider } from '../context/UserContext';
import UserRoleModel from '../components/Users/UserRoleModel';
import UserSuspendModel from '../components/Users/UserSuspendModel';

const Users = () => {
    const { userHandleSearch, userHandleRole, userHandleSuspend, userHandleDateFrom, userHandleDateTo } = useUserProvider()
    return (
        <Layout>
            <section className=''>

                <div className='d-flex align-items-center justify-content-between bg-white p-3 my-2'>
                    <h4>Users List</h4>
                    <button className='btn btn-outline-dark rounded-0' data-bs-toggle="modal" data-bs-target="#exampleModal">Register</button>
                </div>

                <div className="row bg-white p-3">
                    <div className="col-md-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <input className="form-control rounded-0" onChange={userHandleDateFrom} type="date" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <input className="form-control rounded-0" onChange={userHandleDateTo} type="date" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0" onChange={userHandleRole}>
                                <option value="">Select Role</option>
                                <option value="user">Users</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className='w-100 mb-3 mb-md-0'>
                            <select className="form-select rounded-0" onChange={userHandleSuspend}>
                                <option value="">Select Status</option>
                                <option value="false">Active</option>
                                <option value="true">Suspend</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='w-100'>
                            <input className="form-control rounded-0" type="search" onChange={userHandleSearch} placeholder="Search Hear..." />
                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <AddUsersModel />
                    <UpdateUsersModel />
                    <UsersTable />
                    <UserRoleModel />
                    <UserSuspendModel />
                </div>
            </section>
        </Layout>
    )
}

export default Users