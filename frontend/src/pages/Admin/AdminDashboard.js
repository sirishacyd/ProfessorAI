import React from 'react';
import { useAuth } from '../../context/AuthContext'; // Adjust the path as needed
import { useHistory } from 'react-router-dom';
import { Button, Container, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
const AdminDashboard = () => {
  const { adminLogout } = useAuth();
  const history = useHistory(); 

  const handleLogout = () => {
    adminLogout();
    history.push('/signin'); 
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', paddingBottom: '8rem',  }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome, Admin!
      </Typography>
      <Typography variant="h6" gutterBottom style={{ marginBottom: '2rem' }}>
        This is the admin dashboard. Here you can manage the application settings, user accounts, and more.
      </Typography>


      <Grid container spacing={10} justifyContent="center">
        {/* Course Management */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper
            sx={{
              padding: '1rem',
              backgroundColor: '#e3f2fd', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2, 
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add Course
            </Typography>
            <AddCircleOutlineIcon sx={{ fontSize: 40, color: '#1976d2' }} />
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/admin/addcourse"
              sx={{ alignSelf: 'stretch' }} 
            >
              Add 
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#ffebee',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2, 
    }}
  >
    
    <Typography variant="h6" gutterBottom>
      Remove Course
    </Typography>
    <RemoveCircleOutlineIcon sx={{ fontSize: 40, color: '#d32f2f' }} /> {/* */}
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/admin/removecourse" 
      sx={{ alignSelf: 'stretch' }} 
    >
      Remove 
    </Button>
  </Paper>
</Grid>
<Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#e1bee7', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2, 
    }}
  >
    <Typography variant="h6" gutterBottom>
      Register User
    </Typography>
    <PersonAddIcon sx={{ fontSize: 40, color: '#7b1fa2' }} /> {/*  */}
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/admin/register"
      sx={{ alignSelf: 'stretch' }} 
    >
      Register
    </Button>
  </Paper>
</Grid>
<Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#ffebee', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}
  >
    <Typography variant="h6" gutterBottom>
    Remove User
    </Typography>
    <PersonRemoveIcon sx={{ fontSize: 40, color: '#d32f2f' }} /> {/* */}
    <Button
      variant="contained"
      color="secondary" 
      component={Link}
      to="/admin/removeuser" 
      sx={{ alignSelf: 'stretch' }} 
    >
      Remove 
    </Button>
  </Paper>
</Grid>

<Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#ffebee', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2, 
    }}
  >
    <Typography variant="h6" gutterBottom>
      Enroll Student
    </Typography>
    <MenuBookIcon sx={{ fontSize: 40, color: '#d32f2f' }} /> {/* */}
    <Button
      variant="contained"
      color="error" 
      component={Link}
      to="/admin/enrollstudent" 
      sx={{ alignSelf: 'stretch' }} 
    >
      Enroll 
    </Button>
  </Paper>
</Grid>
<Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#c8e6c9',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}
  >
    <Typography variant="h6" gutterBottom>
      Assign Professor
    </Typography>
    <SchoolIcon  sx={{ fontSize: 40, color: '#388e3c' }} /> {/*  */}
    <Button
      variant="contained"
      color="success"
      component={Link}
      to="/admin/assigncourse" 
      sx={{ alignSelf: 'stretch' }} 
    >
      Assign 
    </Button>
  </Paper>
</Grid>
<Grid item xs={12} sm={6} md={4} lg={3}>
  <Paper
    sx={{
      padding: '1rem',
      backgroundColor: '#bbdefb', // Choose a background color that fits your theme
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 2,
    }}
  >
    <Typography variant="h6" gutterBottom>
      Ask Me Anything
    </Typography>
    <HelpOutlineIcon sx={{ fontSize: 40, color: '#2196f3' }} /> {/* Choose an appropriate color */}
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/admin/askme" 
      sx={{ alignSelf: 'stretch' }}
    >
      Ask
    </Button>
  </Paper>
</Grid>
     </Grid>
    </Container>
  );
};

export default AdminDashboard;
