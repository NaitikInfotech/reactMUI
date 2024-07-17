import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import Titels from './Titels'
import Nav from './Nav'
import Footer from './Footer'
function Portfolio() {
    return (
        <>
            < Nav />
            <Titels Name={"Portfolio"} url={"https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg"} />
            <Container>
                <Grid container spacing={2} sx={{ marginTop: "50px" }}>
                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ fontSize: "40px", width: "90%", lineHeight: "1" }}>
                                Exterior design projects
                            </Typography>
                            <Typography sx={{ fontSize: "20px", marginTop: "20px", width: "97%", lineHeight: "1", color: "gray" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-9.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-3.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-4.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "15px" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-11.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-1.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-2.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "15px" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-12.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-4.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-3.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>

                    </Grid>

                </Grid>
                <Grid container spacing={4} sx={{ marginTop: "50px", marginBottom: "50px" }}>

                    <Grid item xs={12} md={7}>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-7.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/cozy-1.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "15px" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-1.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-4.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-6.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "15px" }}>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-7.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-5.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                                <Box sx={{ width: "30%" }}>
                                    <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-10.jpg" alt="" style={{ width: "100%", borderRadius: "6px" }} />
                                </Box>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ fontSize: "40px", width: "90%", lineHeight: "1" }}>
                                Interior design projects
                            </Typography>
                            <Typography sx={{ fontSize: "20px", marginTop: "20px", width: "97%", lineHeight: "1", color: "gray" }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                                Facebook  Twitter  Google +  Linkedin  Instagram  Pinterest  Yelp  Behance  Youtube
                                logo
                                © Houzez - All rights reserved
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            < Footer />
        </>
    )
}

export default Portfolio