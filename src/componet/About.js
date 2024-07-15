import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Box, Button, Grid, Typography } from '@mui/material'

function About() {
    return (
        <>
            <Nav />
            <Box sx={{ position: "relative" }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "#00213ad0", position: "absolute", top: "0", zIndex: "2" }}>
                    <Typography variant='h2' sx={{ fontWeight: "600", marginTop: "100px", color: "white", marginLeft: "50px" }}>About us</Typography>
                    <Box sx={{
                        zIndex: "4",
                        width: { sm: '500px', md: '40%', lg: "40%" },
                        marginTop: { xs: "150px", sm: "250px" },
                        paddingRight: "10px",
                        paddingLeft: { xs: "10px", sm: "30px" }
                    }}>

                    </Box>

                </Box>
                <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-2.jpg" alt="" height={'400px'} width={'100%'} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" style={{ backgroundColor: "transparent", position: "absolute", bottom: "0px", zIndex: "999", left: "0", border: "0 0 0 0", height: "70px", width: "100%" }} preserveAspectRatio="none">
                    <path class="elementor-shape-fill" style={{ fill: "white" }} d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>
            </Box>
            <Box>
                <Box sx={{ width: "90%", margin: "auto", paddingTop: "50px" }}>
                    <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto" }}></Box>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "30px", md: "40px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "black", paddingTop: "60px", lineHeight: "1", justifyContent: "center", alignItems: "center" }}>
                        We have been building houses for over 150 years
                    </Typography>
                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={5}>
                            <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa purus, bibendum gravida orci nec, porta efficitur tellus. Nullam lacus enim, venenatis at enim et, fringilla sodales odio. Donec nec erat ac elit blandit facilisis dictum a neque. Vestibulum sem lectus, aliquet semper erat at, elementum congue mauris. Phasellus non rhoncus justo. Aliquam id porttitor massa. Vestibulum ornare ornare arcu, eget convallis nisl fringilla non.</Typography>
                        </Grid>
                        <Grid lg={5}>
                            <Typography variant='h6' sx={{ marginTop: "40px" }}>Cras cursus est a leo volutpat, vitae convallis mauris bibendum. In vel ante nec lectus posuere blandit. Fusce suscipit pellentesque quam, nec consectetur orci molestie eu. Nunc ultricies erat ac erat aliquet, a consectetur dui mollis. Donec ut ex tellus. Donec commodo consectetur massa nec laoreet. Duis enim est, hendrerit in odio nec, venenatis fermentum nunc. Nulla egestas magna non lorem sollicitudin, eu pharetra sem convallis. </Typography>
                        </Grid>
                    </Grid>

                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2' >
                                250
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Realized Projects</Typography>

                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2'>
                                250
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Staff Members</Typography>
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2' >
                                50
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}> Offices</Typography>
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <Typography variant='h2'>
                                450
                                +</Typography>
                            <Typography sx={{ color: "#16BFBF", fontSize: "20px", fontWeight: "600" }}>Local Experts</Typography>
                        </Grid>
                    </Grid>
                    <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto",marginTop:"100px" }}></Box>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "30px", md: "40px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "black", paddingTop: "60px", lineHeight: "1", justifyContent: "center", alignItems: "center" }}>
                       our team
                    </Typography>
                    <Grid container sx={{ marginTop: "50px", justifyContent: "space-around" }}>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-1team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-3team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-2team.jpg" alt="" width={'100%'} />
                        </Grid>
                        <Grid lg={3} xs={12} sx={{ marginTop: "30px", textAlign: "center" }}>
                            <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/Artboard-4team.jpg" alt="" width={'100%'} />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default About