import { useState } from 'react';
import Layout from '../layout/Layout'
import Select from 'react-select';
import AttendanceBatchList from '../components/Attendance/AttendanceBatchList';

const Attendance = () => {
  const [userList, setUserList] = useState()
  const [loading, setLoading] = useState(false)

  const options = [
    { value: "1", label: "EISTC - 01" },
    { value: "2", label: "EISTC - 02" },
    { value: "3", label: "EISTC - 03" },
    { value: "4", label: "EISTC - 04" },
    { value: "5", label: "EISTC - 05" },
    { value: "6", label: "EISTC - 06" },
    { value: "7", label: "EISTC - 07" },
    { value: "8", label: "EISTC - 08" },
    { value: "9", label: "EISTC - 09" },
    { value: "10", label: "EISTC - 10" },
  ]

  const handleChange = (selectedUserType) => {
    setUserList(selectedUserType);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white', border: "1px solid #dee2e6", borderRadius: "0px", zIndex: "999"
    }),
  };

  return (
    <Layout>
      <section className='vh-100'>
        <div className="row bg-white p-3 mt-1">

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              {/* <input className="form-control rounded-0" type="date" /> */}
              <h4>Attendance Sheet</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="date" />
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <Select
                options={options}
                value={userList}
                onChange={handleChange}
                isLoading={loading}
                placeholder={loading ? "Loading..." : "Select Course..."}
                isClearable={true}
                styles={customStyles}
              />
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <Select
                options={options}
                value={userList}
                onChange={handleChange}
                isLoading={loading}
                placeholder={loading ? "Loading..." : "Select Batch..."}
                isClearable={true}
                styles={customStyles}
              />
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <AttendanceBatchList />
        </div>
      </section>
    </Layout>
  )
}

export default Attendance