import { useState } from "react";
import DataTable from "react-data-table-component"
import { FcViewDetails } from "react-icons/fc";
import { BiEditAlt } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";

const AttendanceTable = () => {
  const [error, setError] = useState(null)
  const paginationOptions = { noRowsPerPage: true };

  const attendanceColumns = (day) => ({
    name: `${day}`,
    selector: row => {
      const attendance = row.attendance.find(a => new Date(a.date).getDate() === day);
      return attendance ? (attendance.present ? 'Present' : 'Absent') : 'Not Recorded';
    },
    conditionalCellStyles: [
      {
        when: row => row.attendance.find(a => new Date(a.date).getDate() === day && a.present),
        style: { color: 'white', backgroundColor: 'green' },
      },
      {
        when: row => row.attendance.find(a => new Date(a.date).getDate() === day && !a.present),
        style: { backgroundColor: 'red', color: 'white' },
      },
    ],
  });

  const calculateAttendance = (attendance) => {
    const presentCount = attendance.filter(record => record.present).length;
    const absentCount = attendance.filter(record => record.absent).length;
    return { present: presentCount, absent: absentCount };
  };


  const columns = [
    {
      name: "Roll No",
      selector: row => row.roll_no,
    },
    {
      name: "Image",
      selector: row => row.student_image,
    },
    {
      name: "Student name",
      selector: row => row.student_name,
      minWidth: '200px'
    },
    ...Array.from({ length: 31 }, (_, i) => attendanceColumns(i + 1)), // Creates columns 1-31
    {
      name: "Present",
      selector: row => row.attendanceData.present,
    },
    {
      name: "Absent",
      selector: row => row.attendanceData.absent,
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        {/* <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-danger rounded-0 btn-sm"><FaPlay /></button> */}
        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-primary rounded-0 btn-sm"><BiEditAlt /></button>
        <button className="btn btn-outline-secondary rounded-0 btn-sm"><FcViewDetails /></button>
      </div>,
    }
  ];

  const data = [
    {
      id: "60c72b2f5f1b2c001f8e4e12",
      roll_no: '01',
      student_name: "John Doe",
      attendance: [
        { "date": "2024-09-18", "absent": true },
        { "date": "2024-09-19", "present": true },
        { "date": "2024-09-20", "present": true },
        { "date": "2024-09-21", "absent": true },
        { "date": "2024-09-22", "absent": true },
      ],
    },
    {
      id: "60c72b2f5f1b2c001f8e4e13",
      roll_no: '01',
      student_name: "Jane Smith",
      attendance: [
        { "date": "2024-09-18", "present": true },
        { "date": "2024-09-19", "absent": true },
        { "date": "2024-09-20", "present": true },
        { "date": "2024-09-21", "present": true },
        { "date": "2024-09-22", "present": true },
      ],
    },
  ].map(student => ({
    ...student,
    attendanceData: calculateAttendance(student.attendance), // Add present/absent counts
  }));

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationServer
          paginationComponentOptions={paginationOptions}
        />
      </>
    )
  }

}

export default AttendanceTable