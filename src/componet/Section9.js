import { Box, Grid } from '@mui/material'
import React from 'react'

function Section9() {
    return (
        <>
            <Box>
                <hr style={{ marginTop: "100px" }} />
                <Grid container sx={{ justifyContent: { lg: "space-around", xs: "center" } }}>
                    <Grid lg={2} md={2} sm={12} sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-02-e1582734691936.jpg" alt="" /></Grid>
                    <Grid lg={2} md={2} sm={12} sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-01-e1582734705113.jpg" alt="" /></Grid>
                    <Grid lg={2} md={2} sm={12} sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-03-e1582734671602.jpg" alt="" /></Grid>
                    <Grid lg={2} md={2} sm={12} sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-05-e1582734603812.jpg" alt="" /></Grid>
                    <Grid lg={2} md={2} sm={12} sx={{ marginTop: "40px", display: "flex", justifyContent: "center" }}><img src="https://demo18.houzez.co/wp-content/uploads/2020/09/partner-04-e1582734649458.jpg" alt="" /></Grid>
                </Grid>
              
            </Box>
        </>
    )
}

export default Section9