import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import CenteredBox from '../mui/CenteredBox';
import CenteredGrid from '../mui/CenteredGrid';
import CustomLoadingButton from '../mui/CustomLoadingButton';
import { sendDataToAPI } from '../utils/api';
import { loginStyle } from '../utils/login-styles';


type login = {
  user: string,
  password: string,
}
export default function Login() {
  const navigate = useNavigate();
  const validationSchema = yup.object({
    user: yup.string().required('Title is required'),
    password: yup.string().required('Title is required'),
  });
  const initialValues: login = {
    user: '',
    password: '',
  };
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: login) => {
        sendDataToAPI(`todos`, values);
        navigate('/todos');
      }
    });

  return (
    <CenteredGrid>
      <form style={loginStyle} onSubmit={formik.handleSubmit}>
        <CenteredBox>
          <AccountBoxIcon sx={{ width: '50px', height: '50px', color: 'grey'}}/>
        </CenteredBox>
        <CenteredBox>
          <TextField
            fullWidth
            size="small"
            id="user"
            name="user"
            label="Usuario"
            margin='normal'
            value={formik.values.user}
            onChange={formik.handleChange}
            error={formik.touched.user && Boolean(formik.errors.user)}
            helperText={formik.touched.user && formik.errors.user}
          />
          <TextField
            fullWidth
            size="small"
            id="password"
            name="password"
            label="Contraseña"
            margin='normal'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </CenteredBox>
        <CenteredBox>
          <CustomLoadingButton>
            Ingresar
          </CustomLoadingButton>
        </CenteredBox>
      </form>
    </CenteredGrid>
  );
}
