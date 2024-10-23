import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const StudentTable = () => {
    const [error, setError] = useState(null)
    const paginationOptions = { noRowsPerPage: true };

    const columns = [
        {
            name: "Serial No.",
            selector: (row, index) => (index + 1),
            maxWidth: "30px"
        },
        {
            name: "Joining Date",
            selector: row => row.joining_date,
        },
        {
            name: "Student Name",
            selector: row => row.student_name,
        },
        {
            name: "Father's Name",
            selector: row => row.father_name,
        },
        {
            name: "Email Address",
            selector: row => row.email_address,
        },
        {
            name: "Phone Number",
            selector: row => row.phone_number,
        },
        {
            name: "Courses Name",
            selector: row => row.courses_name,
        },
        {
            name: "Courses Duration",
            selector: row => row.courses_duration,
        },
        {
            name: "Class Per week",
            selector: row => row.class_per_week,
        },
        {
            name: "Class Days",
            selector: row => row.class_days,
        },
        {
            name: "Courses Fee",
            selector: row => row.courses_fee,
        },
        {
            name: "Courses Fee Payments",
            selector: row => row.courses_fee_payment,
        },
        {
            name: "Courses Fee Discount",
            selector: row => row.courses_fee_discount,
        },
        {
            name: "Courses Fee due",
            selector: row => row.courses_fee_due,
        },
        {
            name: "Batch No",
            selector: row => row.batch_no,
        },
        {
            name: "Trainer Name",
            selector: row => row.trainer_name,
        },
        {
            name: "Blood Group",
            selector: row => row.blood_group,
        },
        {
            name: "Address",
            selector: row => row.address,
        },
        {
            name: "Action",
            cell: row => <div className="d-flex align-items-center gap-2">
                <button data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-outline-primary rounded-0 btn-sm"><BiEditAlt /></button>
                <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
                <Link to={`/students-view/${row.id}`} target="_new" className="btn btn-outline-secondary rounded-0 btn-sm"><BsEyeFill /></Link>
                <button className="btn btn-outline-success rounded-0 btn-sm"><FaCheck /></button>
            </div>,
            minWidth: "200px"
        }
    ];

    const data = [
        {
            id: 1,
            joining_date: '12-12-2024',
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
            id: 2,
            joining_date: '12-12-2024',
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

export default StudentTable