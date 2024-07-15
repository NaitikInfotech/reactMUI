import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Box, Container, Grid, Typography } from '@mui/material'

function Servese() {
    return (
        <>
            <Nav />
            <Box sx={{ position: "relative", backgroundImage: "url(https://demo18.houzez.co/wp-content/uploads/2020/09/image-10.jpg)" }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "#00213ad0", position: "absolute", top: "0", zIndex: "2" }}>
                    <Typography variant='h2' sx={{ fontWeight: "600", marginTop: "100px", color: "white", marginLeft: "50px" }}>servises</Typography>
                    <Box sx={{
                        zIndex: "4",
                        width: { sm: '500px', md: '40%', lg: "40%" },
                        marginTop: { xs: "150px", sm: "250px" },
                        paddingRight: "10px",
                        paddingLeft: { xs: "10px", sm: "30px" }
                    }}>

                    </Box>

                </Box>
                <img src="" alt="" height={'400px'} width={'100%'} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" style={{ backgroundColor: "transparent", position: "absolute", bottom: "0px", zIndex: "999", left: "0", border: "0 0 0 0", height: "70px", width: "100%" }} preserveAspectRatio="none">
                    <path class="elementor-shape-fill" style={{ fill: "white" }} d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>
            </Box>
            <Container>
                <Grid container sx={{ justifyContent: "space-around",  marginTop:'50px'}}>
                    <Grid lg={5} ><img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/image-14-ovlybm96lfqpjhmpwlmp835quzmmuwwwzi4qlq9g00.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>Design</Typography>

                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Vivamus eu sem vehicula, commodo massa at</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around" , marginTop:'50px'}}>
                    <Grid lg={5} order={{xs:2,lg:1}}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>Production</Typography>
                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Sed vitae nibh aliquam neque porta tempor</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>

                    <Grid lg={5} order={{xs:1, lg:2}}   ><img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/gallery-3-ovgv0urxx0j618pb1qyucrggly3cpza4qnoeu0bbk0.jpg" alt="" width={'100%'} /></Grid>
                </Grid>


                <Grid container sx={{ justifyContent: "space-around", marginTop:'50px'}}>
                    <Grid lg={5} > <img src="https://demo18.houzez.co/wp-content/uploads/elementor/thumbs/image-16-ovlyiavv70w43nx6vhn6yefqxmollfg78l51gkcnr4.jpg" alt="" width={'100%'} /></Grid>
                    <Grid lg={5}>
                        <Typography sx={{ fontSize: "30px", color: '#16BFBF' }}>
                            Delivery</Typography>
                        <Typography sx={{ fontSize: "40px", fontWeight: "600", lineHeight: "1", marginTop: '20px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Typography>
                        <Typography variant='h6' sx={{ marginTop: "40px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default Servese