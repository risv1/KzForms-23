import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContactModel from '../models/ContactModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './ContactList.module.css';
interface ContactListProps {
    rows: ContactModel[];
    columns: GridColDef[];
}

const ContactList: React.FC<ContactListProps> = ({ rows, columns }) => {
    const goTo = useNavigate();

    const goToEdit = (id: string) => {
        goTo('/contacts/edit/' + id);
    };

    let [data, setData] = useState<ContactModel[]>(rows);

    const handleDelete = async (id: string) => {
        try {
            // Delete from backend
            await fetch(`http://localhost:8080/api/contacts/${id}`, {
                method: 'DELETE'
            });
            const filteredData = data.filter((item) => item.id !== id);
            setData(filteredData);
        } catch (error) {
            console.error('Error deleting:', error);
        }
    };

    const rowsWithActions = rows.map((row) => ({
        ...row,
        actions: (
            <div className='d-flex gap-1'>
                <button className="btn btn-outline-success" onClick={() => goToEdit(row.id)}>
                    Edit
                </button>
                <button className="btn btn-outline-danger" onClick={() => handleDelete(row.id)}>
                    Delete
                </button>
            </div>
        )
    }));

    return (
        <DataGrid
            sx={{
                boxShadow: 3,
                border: 3,
                borderColor: 'blue',
                '& .MuiDataGrid-cell:hover': {
                    color: 'red'
                }
            }}
            className={classes.custom_data_grid}
            rows={rowsWithActions}
            columns={columns.concat({
                field: 'actions',
                headerName: 'Actions',
                width: 140,
                renderCell: (params) => params.row.actions
            })}
            autoHeight
        />
    );
};

export default ContactList;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ContactModel from '../models/ContactModel';
// import { GridColDef } from '@mui/x-data-grid';
// import classes from './ContactList.module.css';

// interface ContactListProps {
//     rows: ContactModel[];
//     columns: GridColDef[];
// }

// const ContactList: React.FC<ContactListProps> = ({ rows, columns }) => {
//     const goTo = useNavigate();
//     const goToEdit = (id: string) => {
//         goTo('/contacts/edit/' + id);
//     };

//     let [data, setData] = useState<ContactModel[]>(rows);

//     // console.log('before printing data');
//     // console.log(data);

//     const handleDelete = async (id: string) => {
//         let filteredData = data.filter((item) => item.id != id);
//         console.log('filtered: ' + filteredData.length + '  data: ' + data.length);
//         setData(filteredData);
//         await fetch(`http://localhost:8080/api/contacts/${id}`, {
//             method: 'DELETE'
//         });
//         console.log('Visu');

//         // setData();
//     };
//     return (
//         <div className={classes.container}>
//             <table>
//                 <thead>
//                     <tr>
//                         {columns.map((column) => (
//                             <th key={column.field}>{column.headerName}</th>
//                         ))}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {data.map((row) => (
//                         <tr key={row.id}>
//                             {columns.map((column) => (
//                                 <td key={column.field}>
//                                     {column.field === 'Edit' ? (
//                                         <>
//                                             <button onClick={() => goToEdit(row.id)}>Edit</button>
//                                             <button onClick={() => handleDelete(row.id)}>Delete</button>
//                                         </>
//                                     ) : (
//                                         row[column.field]
//                                     )}
//                                 </td>
//                             ))}
//                         </tr>
//                     ))}
//                 </tbody>{' '}
//             </table>
//         </div>
//     );
// };

// export default ContactList;