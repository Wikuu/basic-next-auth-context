// ** MUI Imports
import {
  CardHeader,
  TextField,
  Button,
  CardContent,
  Card,
  Grid,
} from '@mui/material';

// ** Hook Import
import { useAuth } from '../../hooks/useAuth';

// ** Type Imports
import type { FormEvent } from 'react';
import type { LoginData } from '../../types/client/auth/login';

const Login = () => {
  // ** Hooks
  const auth = useAuth();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget));
    auth.login(formData as LoginData);
  };

  return (
    <Grid container sx={{ minHeight: '98vh' }}>
      <Grid item xs={12} sx={{ minHeight: '100%' }}>
        <Card sx={{ height: '100%' }}>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80%',
            }}
          >
            <Grid item xs={12} md={4}>
              <Card>
                <CardHeader title='Login' />
                <CardContent>
                  <form onSubmit={(e) => onSubmit(e)}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label='Email'
                          name='email'
                          type='email'
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <TextField
                          label='Password'
                          name='password'
                          type='password'
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant='contained'
                          color='primary'
                          type='submit'
                          fullWidth
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
