import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { CardActionArea } from '@mui/material';

function Section5() {
    const [swip, setswip] = useState(3);
    function size() {
        setswip(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3)
    }
    window.addEventListener('resize', size);
    return (
        <>
            <Box sx={{position:"relative", width: "100%", backgroundColor: "#002846", marginTop: "100px", paddingBottom: "200px" }}>
                <Box sx={{ width: "60%", margin: "auto", paddingTop: "50px" }}>
                    <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto" }}></Box>
                    <Typography sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "white", paddingTop: "60px", lineHeight: "1" }}>
                        Discover our <Box sx={{ marginLeft: "10px", marginRight: "10px", color: "#16BFBF", }}> prefab </Box> solutions
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "17px", sm: "20px", md: "25px" }, fontWeight: "600", color: "white", marginTop: "50px", lineHeight: "1.2" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                    </Typography>
                </Box>
                <Box sx={{ width: '90%', margin: "auto", marginTop: "50px" }}>
                    <Swiper
                        slidesPerView={swip}
                        spaceBetween={30}
                        
                        modules={[Autoplay]}
                        className="mySwiper"
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                    >
                        <SwiperSlide >
                            <Card sx={{ maxWidth: 345, margin: "auto" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-4-592x444.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }} component="div">
                                            Superior Villa
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                        <SwiperSlide ><Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-2-592x444.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }} component="div">
                                        Superior Villa
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-1-592x444.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }} component="div">
                                        Superior Villa
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://demo18.houzez.co/wp-content/uploads/2020/09/house-model-3-584x438.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }} component="div">
                                        Superior Villa
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card></SwiperSlide>
                        <SwiperSlide><Card sx={{ maxWidth: 345, margin: "auto" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="https://demo18.houzez.co/wp-content/uploads/2020/09/image-9.jpg"
                                    alt="green iguana"
                                    height={'259px'}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: "800" }} component="div">
                                        Superior Villa
                                    </Typography>

                                </CardContent>
                            </CardActionArea>
                        </Card></SwiperSlide>
                    </Swiper>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" style={{ backgroundColor: "transparent", position: "absolute", bottom: "0px", zIndex: "10", border: "0 0 0 0", height: "40px", width: "100%" }} preserveAspectRatio="none">
                    <path class="elementor-shape-fill" style={{ fill: "white" }} d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>
            </Box>
        </>
    )
}

export default Section5
