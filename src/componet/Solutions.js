import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Box, Container, Grid, Typography } from '@mui/material'
import { FaRegCircleCheck } from "react-icons/fa6";
import Titels from './Titels';
function Solutions() {
    return (
        <>
            <Nav />
            <Titels Name={"Solutions"} url={"https://demo18.houzez.co/wp-content/uploads/2020/09/image-7.jpg"} />
            <Container sx={{ marginTop: "100px", marginBottom: "80px" }}>
                <Box sx={{ width: "200px", height: "5px", backgroundColor: "#16BFBF", margin: "auto", marginBottom: "30px" }}></Box>
                <Box sx={{ display: "flex", flexWrap: "wrap", textAlign: "center", justifyContent: "center", alignItems: "center", fontSize: "40px", fontWeight: "700" }}>
                    <Box>

                        Discover our
                    </Box>
                    <Box sx={{ marginLeft: "10px", color: "#16bfbf" }}>
                        solutions
                    </Box>
                    <Box sx={{ marginLeft: "10px" }}>
                        for your new home
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "20px", fontWeight: "200", textAlign: "center", marginTop: "30px" }}>
                    <Box sx={{ width: "50%" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.    </Box>
                </Box>

                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} ><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-1-592x444.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5} sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Single Family Home</Typography>
                            <Box sx={{ marginTop: '20px', display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Pellentesque id leo placerat nibh semper
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Suspendisse laoreet purus
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} order={{ xs: 2, lg: 1 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Standard Modern Villa</Typography>
                            <Box sx={{ marginTop: '20px', display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Pellentesque id leo placerat nibh semper
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Suspendisse laoreet purus
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid lg={5} order={{ xs: 1, lg: 2 }}   ><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-4-592x444.jpg" alt="" width={'100%'} /></Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} > <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-3-592x444.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5} sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Large Luxury Villa</Typography>
                            <Box sx={{ marginTop: '20px', display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Pellentesque id leo placerat nibh semper
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Suspendisse laoreet purus
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Grid container sx={{ justifyContent: "space-around", marginTop: '50px' }}>
                    <Grid lg={5} order={{ xs: 2, lg: 1 }} sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}>
                        <Box>
                            <Typography sx={{ fontSize: "30px" }}>Superior Villa</Typography>
                            <Box sx={{ marginTop: '20px', display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Lorem ipsum dolor sit amet
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Pellentesque id leo placerat nibh semper
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <FaRegCircleCheck style={{ fontSize: "20px", color: "#16bfbf", fontWeight: "400" }} />
                                <Typography sx={{ marginLeft: "10px" }}>
                                    Suspendisse laoreet purus
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid lg={5} order={{ xs: 1, lg: 2 }}   ><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-4-592x444.jpg" alt="" width={'100%'} /></Grid>
                </Grid>
            </Container>
            < Footer />
        </>
    )
}

export default Solutions