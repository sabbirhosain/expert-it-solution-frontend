import { useState } from "react";
import DataTable from "react-data-table-component"
import { FcPrint, FcViewDetails } from "react-icons/fc";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const AttendanceBatchList = () => {
    const [error, setError] = useState(null)
    const paginationOptions = { noRowsPerPage: true };

    const columns = [
        {
            name: "Date and Time",
            selector: row => row.joining_date,
        },
        {
            name: "Batch No",
            selector: row => row.batch_no,
        },
        {
            name: "Course Name",
            selector: row => row.student_name,
        },
        {
            name: "Trainer Name",
            selector: row => row.courses_name,
        },
        {
            name: "Total Student",
            selector: row => row.father_name,
        },
        {
            name: "Present Student",
            selector: row => row.phone_number,
        },
        {
            name: "Absent Student",
            selector: row => row.email_address,
        },
        {
            name: "Status",
            selector: row => row.attendance_status,
            conditionalCellStyles: [
                {
                    when: row => row.attendance === 'success',
                    style: {
                        color: 'white',
                        backgroundColor: 'green',
                    },
                },
                {
                    when: row => row.attendance === 'panding',
                    style: {
                        backgroundColor: 'red',
                        color: 'white',
                    },
                },
            ],
        },
        {
            name: "Action",
            cell: row => <div className="d-flex align-items-center gap-2">
                <Link to='/attendance-student' className="btn btn-outline-danger rounded-0 btn-sm"><FaPlay /></Link>
                <button className="btn btn-outline-success rounded-0 btn-sm"><FcViewDetails /></button>
                <button className="btn btn-outline-warning rounded-0 btn-sm"><FcPrint /></button>
            </div>,
        }
    ];

    const data = [
        {
            id: 1,
            joining_date: '10-12-2024',
            attendance: 'panding',
            attendance_status: 'Attendance Not Taken',
            student_name: 'Sabbir hosain',
            father_name: 'Sobuj ali',
            email_address: 'sabbir@gmail.com',
            phone_number: '1234567890',
            courses_name: 'Web Design',
            courses_duration: '6 Month',
            courses_fee: '5000.00',
            courses_fee_payment: '3000.00',
            courses_fee_discount: '10%',
            courses_fee_due: '2000.00',
            class_per_week: '3 Days',
            class_days: 'Saturday, Sunday, Monday',
            trainer_name: 'Sabbir Hosain',
            batch_no: '01',
            blood_group: 'A+',
            address: 'Jamnagar Bazar, Bagatipara, Natore',

        },
        {
            id: 1,
            joining_date: '10-12-2024',
            attendance: 'success',
            attendance_status: 'Attendance Is Taken',
            student_name: 'Sabbir hosain',
            father_name: 'Sobuj ali',
            email_address: 'sabbir@gmail.com',
            phone_number: '1234567890',
            courses_name: 'Web Design',
            courses_duration: '6 Month',
            courses_fee: '5000.00',
            courses_fee_payment: '3000.00',
            courses_fee_discount: '10%',
            courses_fee_due: '2000.00',
            class_per_week: '3 Days',
            class_days: 'Saturday, Sunday, Monday',
            trainer_name: 'Sabbir Hosain',
            batch_no: '01',
            blood_group: 'A+',
            address: 'Jamnagar Bazar, Bagatipara, Natore',

        },
    ]

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

export default AttendanceBatchList