import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { FaBehance, FaFacebook, FaGoogle, FaInstagramSquare, FaLinkedinIn, FaPinterest, FaYelp, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <>
            <Box sx={{ position: "relative", overflow: "hidden" }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: '#00213ad0', position: "absolute", bottom: "0", zIndex: "2" }}>
                    <Box sx={{ width: "75%", margin: "auto", paddingTop: "50px" }}>
                        <Typography sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "white", paddingTop: "60px", lineHeight: "1" }}>
                            Would you like to <Box sx={{ marginLeft: "10px", marginRight: "10px", color: "#16BFBF", }}>speak to an expert? </Box>
                        </Typography>
                        <Typography sx={{ fontSize: { xs: "17px", sm: "20px", md: "23px", textAlign: "center" }, fontWeight: "600", color: "white", marginTop: "50px", lineHeight: "1.2" }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                        </Typography>
                        <Link 
                         to={"Contect-us"}>
                            <Button
                                variant='contained'
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: "auto",
                                    width: '260px',
                                    height: { xs: '50px', sm: '60px' },
                                    marginTop: '20px',
                                    color: 'white',
                                    backgroundColor: '#16bfbfab',
                                    '&:hover': {
                                        backgroundColor: '#16BFBF',
                                    },
                                }}
                            >
                                Request a consultation
                            </Button>
                        </Link>

                    </Box>
                    <Grid container sx={{ justifyContent: "space-evenly", width: "100%", margin: "auto", color: "white", padding: "40px" }}>

                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaFacebook />Facebook</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaXTwitter />twitter</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaGoogle />google</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaLinkedinIn />linkedin</Grid>
                        <Grid lg={1} sx={{ fontSize: "19px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaInstagramSquare />instagram</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaPinterest />Pinterest</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaYelp />yelp</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaBehance />behance</Grid>
                        <Grid lg={1} sx={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center" }}><FaYoutube />Youtube</Grid>


                    </Grid>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}><img src="https://demo18.houzez.co/wp-content/themes/houzez/img/logo-houzez-white.png" alt="" />
                    </Box>
                    <Typography sx={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", marginTop: "40px" }}>
                        © Houzez - All rights reserved</Typography>
                </Box>
                <Box sx={{

                    position: "relative",
                    backgroundImage: "url(https://demo18.houzez.co/wp-content/uploads/2020/09/image-6-584x438.jpg)",
                    minHeight: "650px",
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundAttachment: 'fixed',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    overflow: "hidden",


                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ position: "absolute", top: "0", height: "50px", width: "100%", zIndex: "999" }}>
                        <path fill='white' d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
                    </svg>
                </Box >
            </Box>
        </>
    )
}

export default Footer