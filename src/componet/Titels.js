import React from 'react'

import { EffectFade, Autoplay } from "swiper/modules";
import { Box, Button, Container } from "@mui/material";
function Titels(props) {
    return (
        <>
        <Box sx={{
                position: "relative",
                minHeight: "400px",
                backgroundImage: `url(${props.url})`,
                backgroundColor: "#00233db3",
                backgroundBlendMode:"multiply",
                backgroundSize: "cover",
                backgroundPositionY: "50%",
            }}>
            
                <Container maxWidth="lg" sx={{ width:"auto", position: "absolute", top: "150px", left: {xs:"20px",sm:"100px"}, zIndex: "99", display: "flex" }} >
                    <Box sx={{ width: "5px", backgroundColor: "#16BFBF" }}></Box>
                    <Box sx={{ marginLeft: "30px", fontSize: "50px", fontWeight: "700", color: "white",lineHeight:"0.9" }}>
                    {props.Name}
                    </Box>
                </Container>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    style={{
                        backgroundColor: "transparent",
                        position: "absolute",
                        zIndex: "99",
                        bottom: "0",
                        width: "100%",
                        height: "30px",
                    }}
                    preserveAspectRatio="none"
                >
                    <path
                        class="elementor-shape-fill"
                        style={{ fill: "white" }}
                        d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
	c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
	c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
                    ></path>
                </svg>
            </Box>
        </>
    )
}

export default Titels