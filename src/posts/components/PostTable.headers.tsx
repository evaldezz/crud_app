import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Post } from '../interface/post';
import EditButton from '../../mui/EditButton';
import DeleteButton from '../../mui/DeleteButton';

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    headerAlign: 'center',
    align: 'center',
    width: 90,
    type: 'number',
  },
  {
    field: 'userId',
    headerName: 'Usuario Id',
    headerAlign: 'center',
    align: 'center',
    width: 150,
    type: 'number',
  },
  {
    field: 'title',
    headerName: 'Titulo',
    headerAlign: 'center',
    width: 150,
  },
  {
    field: 'body',
    headerName: 'Body',
    headerAlign: 'center',
    flex: 1,
  },
  {
    field: 'action',
    headerName: 'Acciones',
    headerAlign: 'center',
    align: 'center',
    sortable: false,
    filterable: false,
    width: 100,
    renderCell: (params: GridRenderCellParams<Post, Post>) => (
      <>
        <EditButton to={`${params.row.id}`} />
        <DeleteButton />
      </>
    ),
  },
];
export default columns;