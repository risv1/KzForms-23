import { GridColDef } from "@mui/x-data-grid";

class ContactValues {
    
    columns: GridColDef[] = [
      {field: 'id', headerName: 'ID', width: 170},
        { field: 'regno', headerName: 'Reg. No.', width: 100 },
        { field: 'firstName', headerName: 'First name', width: 100 },
        { field: 'lastName', headerName: 'Last name', width: 150 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 80,
        },
        {
          field: 'email',
          headerName: 'Email',
          description: 'This column has a value getter and is not sortable.',
          width: 150,
        },
        {
          field: 'github',
          headerName: 'GitHub',
          width: 150,
        },
      ];
}
export default ContactValues;