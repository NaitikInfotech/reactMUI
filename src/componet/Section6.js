import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Section6() {
    return (
        <>
            <Box sx={{ width: "60%", margin: "auto", paddingTop: "50px" }}>
                <Box sx={{ width: "200px", height: "10px", backgroundColor: "#16BFBF", margin: "auto" }}></Box>
                <Typography sx={{ fontSize: { xs: "30px", sm: "40px", md: "50px" }, display: "flex", flexWrap: "wrap", fontWeight: "600", color: "black", paddingTop: "60px", lineHeight: "1" }}>
                    How  create our   <Box sx={{ marginLeft: "10px", marginRight: "10px", color: "#16BFBF", }}> prefab </Box> homes
                </Typography>
                <Typography sx={{ fontSize: { xs: "17px", sm: "20px", md: "25px" }, fontWeight: "600", color: "black", marginTop: "50px", lineHeight: "1.2", textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque.
                </Typography>
            </Box>
            <Box sx={{ marginTop: "50px" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}sx={{justifyContent:"center"}} >
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ Width:345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://demo18.houzez.co/wp-content/uploads/2020/09/image-13-1024x683.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Design quality
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Find more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ Width: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://demo18.houzez.co/wp-content/uploads/2020/09/image-1-1024x683.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            Energy efficiency
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Find more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ Width: 345 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image="https://demo18.houzez.co/wp-content/uploads/2020/09/cozy-1-1024x683.jpg"
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            High comfort
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Find more
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Section6