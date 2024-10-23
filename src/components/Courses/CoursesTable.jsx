import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

const CoursesTable = () => {
    const [error, setError] = useState(null)
    const paginationOptions = { noRowsPerPage: true };

    const columns = [
        {
            name: "Serial No.",
            selector: (row, index) => index + 1,
            maxWidth: "20px",
        },
        {
            name: "Course Name",
            selector: row => row.course_name,
        },
        {
            name: "Course Duration",
            selector: row => row.course_duration,
        },
        {
            name: "Course Fee",
            selector: row => row.course_fee,
        },
        {
            name: "Class Per Week",
            selector: row => row.class_per_week,
        },
        {
            name: "Class Day",
            selector: row => row.class_day,
        },
        {
            name: "Trainer Name",
            selector: row => row.trainer_name,
        },
        {
            name: "Action",
            cell: row => <div className="d-flex align-items-center gap-2">
                <button data-bs-toggle="modal" data-bs-target="#updateModal" className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></button>
                <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
                <button className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></button>
            </div>

        }
    ];

    const data = [
        {
            id: 1,
            course_name: 'Basic Computer with MS Office',
            course_duration: '3 Month',
            course_fee: '3000.00 Tk',
            class_per_week: '3 Days',
            class_day: 'Saturday, Sunday, Monday',
            trainer_name: 'Sabbir Hosain',

        },
        {
            id: 2,
            course_name: 'Web Design',
            course_duration: '3 Month',
            course_fee: '5000.00 Tk',
            class_per_week: '3 Days',
            class_day: 'Saturday, Sunday, Monday',
            trainer_name: 'Sabbir Hosain',

        },
        {
            id: 3,
            course_name: 'Graphic Design',
            course_duration: '3 Month',
            course_fee: '6000.00 Tk',
            class_per_week: '3 Days',
            class_day: 'Saturday, Sunday, Monday',
            trainer_name: 'Raihan Reza',

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

export default CoursesTable