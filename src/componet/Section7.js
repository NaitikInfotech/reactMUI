import { Box, Button, Typography } from '@mui/material'
import React from 'react'

function Section7() {
  return (
    <>
      <Box
        sx={{
          marginTop:"100px",
          height: '100vh',
          backgroundImage: "url(https://demo18.houzez.co/wp-content/uploads/2020/09/gallery-3.jpg)",
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 20px', 
          overflow:"hidden"
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '20px',
            width: { xs: '90%', sm: '70%', md: '50%', lg: '30%' }, 
            textAlign: 'center', 
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '28px', sm: '36px', md: '42px' },
              fontWeight: '600',
              color: 'black',
              marginTop: { xs: '30px', lg: '50px' },
              lineHeight: '1',
            }}
          >
          Only high-end quality materials
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '16px', sm: '18px', md: '20px' }, 
              fontWeight: '600',
              color: 'black',
              marginTop: '20px',
              lineHeight: '1.2',
            }}
          >
           This demo can be used by developer companies which want to present their real estate projects taking advantage of the Houzez features
          </Typography>
          <Button
            variant='contained'
            sx={{
              width: '100%',
              height: { xs: '50px', sm: '60px' }, 
              marginTop: '20px',
              color: 'white',
              backgroundColor: '#16bfbfab',
              '&:hover': {
                backgroundColor: '#16BFBF',
              },
            }}
          >
            Request our brochure
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default Section7