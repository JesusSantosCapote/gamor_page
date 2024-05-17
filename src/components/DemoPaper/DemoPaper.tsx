import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const DemoPaper = styled(Paper)(({ theme }) => ({
    width: '100%',
    height: '500px',
  //   padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));