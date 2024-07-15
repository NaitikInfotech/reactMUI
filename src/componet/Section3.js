import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { FaChair, FaElementor, FaRocketchat, FaTrophy } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { PiLampPendantFill } from "react-icons/pi";
import { GrCertificate } from 'react-icons/gr';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Section3() {
  return (
    <>
      <Container >
        <Box sx={{ flexGrow: 2, marginTop: "100px" }}>
          <Grid container>
            <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "100px" }}>
              <Box sx={{ fontSize: '40px', fontWeight: "700" }}>
                Why our company is the perfect partner for you?
              </Box>
              <Box sx={{ fontSize: "25px", fontWeight: "500", display: "flex", marginTop: '20px', color: "#16bfbfab" }}>
                Talk to an expert<Box sx={{ marginLeft: "20px" }}><FaRocketchat /></Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "50px" }}>
              <Grid container >
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><FaElementor /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    Turnkey delivery
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><GiTreeBranch /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    Eco-friendly
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><FaChair /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    High-end materials
                  </Box>
                </Grid>
              </Grid>
              <Grid container sx={{ justifyContent: "space-between" }} lg={12}>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><PiLampPendantFill /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    Top know-how  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><FaTrophy /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    Awarded company  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} sx={{marginTop:"50px"}}>
                  <Box sx={{ fontSize: "35px", color: "#16bfbfab", textAlign: "center" }}><GrCertificate /></Box>
                  <Box sx={{ fontSize: "20px", textAlign: "center" }}>
                    Certifications  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Section3