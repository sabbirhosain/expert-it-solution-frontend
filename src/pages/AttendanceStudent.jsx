import Layout from '../layout/Layout'
import AddAttendanceModel from '../components/Attendance/AddAttendanceModel';
import AttendanceTable from '../components/Attendance/AttendanceTable';

const AttendanceStudent = () => {
  return (
    <Layout>
      <section className='vh-100'>
        <div className="row justify-content-between bg-white p-3 mt-1">

          <div className="col-md-6">
            <div className='w-100 mb-3 mb-md-0'>
              <h4>Batch No : EISTS - 01 &emsp;-&emsp; Web Development</h4>
            </div>
          </div>

          <div className="col-md-3">
            <div className='w-100 mb-3 mb-md-0'>
              <input className="form-control rounded-0" type="search" />
            </div>
          </div>
        </div>
        <div className='mt-2'>
          <AddAttendanceModel/>
          <AttendanceTable />
        </div>
      </section>
    </Layout>
  )
}

export default AttendanceStudent