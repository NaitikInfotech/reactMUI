import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';

function Section8() {
    return (
        <Box sx={{ marginTop: "100px", backgroundColor: "white", width: "100%" }}>
            <Box sx={{ width: '60%', margin: 'auto', paddingTop: '50px', textAlign: 'center' }}>
                <Box sx={{ width: '200px', height: '10px', backgroundColor: '#16BFBF', margin: 'auto' }} />
                <Typography
                    sx={{
                        fontSize: { xs: '30px', sm: '40px', md: '50px' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        fontWeight: '600',
                        color: 'white',
                        paddingTop: '60px',
                        lineHeight: '1',
                    }}
                >
                    <Box sx={{ margin: "auto", fontSize: {xs:"30px",md:"50px"}, color: "black", textAlign: "center" }}>Testimonials & Partners</Box>
                </Typography>
            </Box>
            <Grid container sx={{ justifyContent: "space-around", marginTop: "50px" }}>
                <Grid lg={4} md={4} sm={12} sx={{ textAlign: "center" }}>
                    <Box ><img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyHost19-150x150.jpg" alt="" style={{ borderRadius: "50%" }} /></Box>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa purus, bibendum gravida orci nec, porta efficitur tellus</Typography>
                    <Typography sx={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>by Mike Sandoval</Typography>
                    <Typography sx={{ fontFamily: "italic" }}>Project Manager, Constructions Inc.</Typography>
                </Grid>
                <Grid lg={3} md={3} sm={12} sx={{ textAlign: "center" }}>
                    <Box><img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyHost08-150x150.jpg" alt="" style={{ borderRadius: "50%" }} /></Box>
                    <Typography>Nullam lacus enim, venenatis at enim et, fringilla sodales odio. Donec nec erat ac elit blandit facilisis dictum a neque.</Typography>
                    <Typography sx={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>by Sam Peterson</Typography>
                    <Typography sx={{ fontFamily: "italic" }}>Manager, Company Inc.</Typography>
                </Grid>
                <Grid lg={4} md={4} sm={12} sx={{ textAlign: "center" }}>
                    <Box><img src="https://demo18.houzez.co/wp-content/uploads/2020/10/HomeyRenter04-150x150.jpg" alt="" style={{ borderRadius: "50%" }} /></Box>
                    <Typography>Vestibulum sem lectus, aliquet semper erat at, elementum congue mauris. Phasellus non rhoncus justo. Aliquam id porttitor massa.</Typography>
                    <Typography sx={{ fontSize: "22px", fontWeight: "600", marginTop: "20px" }}>by Kenya Soval</Typography>
                    <Typography sx={{ fontFamily: "italic" }}>Manager, Buildings Inc.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Section8;
