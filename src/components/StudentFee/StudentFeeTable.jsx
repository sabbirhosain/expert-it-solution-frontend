import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt } from "react-icons/bi";
import { RiMessage2Line } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";

const StudentFeeTable = () => {
    const [error, setError] = useState(null)
    const paginationOptions = { noRowsPerPage: true };

    const columns = [
        {
            name: "Current Payable Date",
            selector: row => row.joining_date,
        },
        {
            name: "Next Payable Date",
            selector: row => row.joining_date,
        },
        {
            name: "Batch No",
            selector: row => row.batch_no,
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
            name: "Phone Number",
            selector: row => row.phone_number,
        },
        {
            name: "Email Address",
            selector: row => row.email_address,
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
            name: "Courses Fee",
            selector: row => row.courses_fee,
        },
        {
            name: "Total Payable",
            selector: row => row.courses_fee,
        },
        {
            name: "Current due",
            selector: row => row.courses_fee_due,
        },
        {
            name: "Address",
            selector: row => row.address,
        },
        {
            name: "Action",
            cell: row => <div className="d-flex align-items-center gap-2">
                <button data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-outline-primary rounded-0 btn-sm"><BiEditAlt /></button>
                <a href="mailto:example@example.com?subject=Inquiry&body=Hello, I have a question about..." className="btn btn-outline-success rounded-0 btn-sm"><RiMessage2Line /></a>
                {/* <button className="btn btn-outline-success rounded-0 btn-sm"><BiMessageCheck /></button> */}
                <button className="btn btn-outline-secondary rounded-0 btn-sm"><BsEyeFill /></button>
            </div>,
            minWidth: "150px"
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

export default StudentFeeTable