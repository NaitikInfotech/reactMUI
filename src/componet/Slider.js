import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Slider() {
    return (
        <>
            <Box sx={{ position: "relative" }}>
                <Box sx={{ width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.61)", position: "absolute", top: "0", zIndex: "2" }}>
                    <Box sx={{
                        zIndex: "4",
                        width: { sm: '500px', md: '40%', lg: "40%" },
                        marginTop: { xs: "150px", sm: "250px" },
                        paddingRight: "10px",
                        paddingLeft: { xs: "10px", sm: "30px" }
                    }}>
                        <Typography variant='h4' sx={{ fontSize: { xs: "40px", sm: "50px", md: "40px", lg: "60px" }, color: 'white' }}>
                            We have been building houses for over 150 years
                        </Typography>
                        <Typography variant='h6' color='white' sx={{ marginTop: '15px' }}>
                            This demo can be used by developer companies which want to present their real estate projects taking advantage of the Houzez features
                        </Typography>
                        <Link to={"Contect-us"}>
                            <Button sx={{
                                width: { xs: '200px', sm: '250px', md: '250px', lg: "300px" }, height: "50px", color: "white", backgroundColor: "#16bfbfab",
                                '&:hover': {
                                    backgroundColor: '#16BFBF'
                                }
                                , marginTop: "20px"
                            }}>
                                Request our brochure
                            </Button>
                        </Link>

                    </Box>

                </Box>
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectFade, Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-9.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-7.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-12.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://demo18.houzez.co/wp-content/uploads/2020/09/image-10.jpg" />
                    </SwiperSlide>
                </Swiper>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" style={{ backgroundColor: "transparent", position: "absolute", bottom: "0px", zIndex: "10", border: "0 0 0 0", height: "70px", width: "100%" }} preserveAspectRatio="none">
                    <path class="elementor-shape-fill" style={{ fill: "white" }} d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"></path>
                </svg>

            </Box>
        </>
    )
}
export default Slider

