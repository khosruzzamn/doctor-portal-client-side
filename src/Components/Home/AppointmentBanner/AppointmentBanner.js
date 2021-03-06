import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import image from '../../../../src/images/doctor-bannerr.png'
import bg from '../../../images/appointment-bg.png'
import { Link } from 'react-router-dom';


const AppointmentBanner = () => {

    const appointmentBanner = {
        background: `url(${bg})`,
        backgroundColor: 'rgba(58, 66, 86, 0.9)',
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        marginTop: 120
    }

    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ width: 300, marginTop: -110 }} src={
                            image
                        } alt="" />
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', textAlign: "left", paddingY: 6 }}>
                        <Box>
                            <Typography className='text-primary' variant="h5">
                                APPOINTMENT
                            </Typography>
                            <Typography sx={{ color: "white", fontWidth: 600, my: 2.5 }} variant="h3">
                                Make an appointment Today
                            </Typography>
                            <Typography paragraph sx={{ color: "white", textAlign: 'left' }} >
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its
                            </Typography>


                            <Link className='btn text-white btn-secondary mt-3' to='/appointment'>
                                <Button className='text-white' uppercase='true'>Get appointment </Button>
                            </Link>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;