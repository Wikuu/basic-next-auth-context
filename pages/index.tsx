// ** Hook Imports
import { useAuth } from '../hooks/useAuth';

// ** MUI Imports
import {
  CardHeader,
  TextField,
  Button,
  CardContent,
  Card,
  Grid,
} from '@mui/material';

export default function Home() {
  // ** Hooks
  const auth = useAuth();

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
                <CardHeader title='Logged In' />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={12}>
                      <TextField
                        disabled
                        fullWidth
                        placeholder={`Welcome ${auth.user?.fullName}`}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant='contained'
                        color='primary'
                        fullWidth
                        onClick={() => auth.logout()}
                      >
                        Logout
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
