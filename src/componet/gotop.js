import { Box } from '@mui/material'
import React from 'react'
import { FaArrowUp } from "react-icons/fa";
function Gotop() {
    function gogo() {
        console.log("hi");
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <>
      <Box onClick={()=>gogo()} sx={{width:"60px",height:"60px",backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",zIndex:"999",bottom:"50px",right:"40px",borderRadius:"50%",color:"white",fontSize:"30px",}}>
      <FaArrowUp  />
      </Box>
    </>
  )
}

export default Gotop
