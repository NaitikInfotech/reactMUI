import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Section4() {
    return (
        <>
        <Container>
            <Box sx={{ marginTop: "100px" }}>
                <Grid container>
                    {/* Left Grid item with image */}
                    <Grid item lg={8} xs={12}>
                        <img
                            src='https://demo18.houzez.co/wp-content/uploads/2020/09/image-8.jpg'
                            alt='House'
                            style={{ width: '100%',height:"100%", display: 'block' }}
                        />
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <Box
                            sx={{
                                backgroundColor: "#16BFBF",
                                padding: { xs: "15px", lg: "20px" },
                            }}
                        >
                            <Typography  sx={{fontSize:{xs:"30px",sm:"50px" ,md:"55px"},fontWeight: "600", color: "white", marginTop: { xs: "40px", lg: "60px" },lineHeight:"1" }}>
                                You dream your house, we make it real
                            </Typography>
                            <Typography  sx={{fontSize:{xs:"17px",sm:"20px" ,md:"25px"}, fontWeight: "600", color: "white", marginTop: "20px",lineHeight:"1.2" }}>
                                This demo can be used by  developer companies which want to  present their real estate projects  taking advantage of the Houzez  features
                            </Typography>
                            <Button
                                variant='contained'
                                sx={{
                                    width: { lg: "300px" },
                                    height: "70px",
                                    marginTop: "20px",
                                    border: "2px solid white",
                                    color: "white",
                                    backgroundColor: "#16bfbfab",
                                    '&:hover': {
                                        backgroundColor: '#16BFBF',
                                    },
                                }}
                            >
                                Request our brochure
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Container>
        </>
    )
}

export default Section4