import React from 'react'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import GooglePlayIcon from '@mui/icons-material/Google'
import AppleIcon from '@mui/icons-material/Apple'

import Logo from '../../assets/Logo.png'
import '../../FootStyle.css'


const Footer = () => {

    const buttonStyle = {
        color: '#FFFFFF',
        border: '1px solid #2B3440',
        backgroundColor: 'transparent',
        textTransform: 'none',
        fontSize: '13px',
        fontWeight: 400,
        borderRadius: '2px',
        minWidth: 'auto',
        padding: '8px 14px',
        lineHeight: 1,
        height: '36px',

        '&:hover': {
            border: '1px solid #FFFFFF',
            backgroundColor: 'transparent',
        }
    }


    return (

        <>

            {/* Newsletter Section */}
            <Box
                sx={{
                    backgroundColor: '#1B6392',
                    py: 8,
                    textAlign: 'center',
                }}
            >

                <Container maxWidth="md">

                    <Typography
                        sx={{
                            color: 'white',
                            fontSize: {
                                xs: '28px',
                                md: '40px'
                            },
                            fontWeight: 600,
                            mb: 2,
                        }}
                    >
                        Subscribe to our newsletter
                    </Typography>

                    <Typography
                        sx={{
                            color: '#D9E7F0',
                            fontSize: '14px',
                            mb: 5,
                            lineHeight: 1.8,
                        }}
                    >
                        Praesent fringilla erat a lacinia egestas.
                        Donec vehicula tempor libero et cursus.
                        Donec non quam urna. Quisque vitae porta ipsum.
                    </Typography>


                    {/* Input + Button */}
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 1,
                            maxWidth: '700px',
                            margin: '0 auto',
                            mb: 5,
                        }}
                    >

                        <input
                            type="email"
                            placeholder="Email address"
                            style={{
                                border: 'none',
                                outline: 'none',
                                width: '100%',
                                padding: '14px',
                                fontSize: '14px',
                            }}
                        />

                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#FA8232',
                                px: 4,
                                py: 1.5,
                                borderRadius: '2px',
                                boxShadow: 'none',

                                '&:hover': {
                                    backgroundColor: '#FA8232',
                                    boxShadow: 'none',
                                }
                            }}
                        >
                            SUBSCRIBE
                        </Button>

                    </Box>


                    {/* Brand Names */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: {
                                xs: 2,
                                md: 5
                            },
                            flexWrap: 'wrap',
                        }}
                    >

                        <Typography sx={{ color: '#D9E7F0' }}>
                            Google
                        </Typography>

                        <Typography sx={{ color: '#D9E7F0' }}>
                            amazon
                        </Typography>

                        <Typography sx={{ color: '#D9E7F0' }}>
                            PHILIPS
                        </Typography>

                        <Typography sx={{ color: '#D9E7F0' }}>
                            TOSHIBA
                        </Typography>

                        <Typography sx={{ color: '#D9E7F0' }}>
                            SAMSUNG
                        </Typography>

                    </Box>

                </Container>

            </Box>



            {/* Footer */}
            <Box
                sx={{
                    backgroundColor: '#0B0F14',
                    width: '100%',
                }}
            >

                <Container
                    maxWidth="lg"
                    sx={{
                        py: 6,
                    }}
                >

                    <Grid container spacing={4}>

                        {/* Logo Section */}
                        <Grid item xs={12} md={3}>

                            <img
                                src={Logo}
                                alt="logo"
                                style={{
                                    marginBottom: '20px',
                                }}
                            />

                            <Typography
                                sx={{
                                    color: 'grey',
                                    fontSize: '14px',
                                    mb: 1,
                                }}
                            >
                                Customer Supports:
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '20px',
                                    mb: 2,
                                }}
                            >
                                (629) 555-0129
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'grey',
                                    fontSize: '14px',
                                    lineHeight: 1.8,
                                }}
                            >
                                4517 Washington Ave.
                                <br />
                                Manchester, Kentucky 39495
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white',
                                    fontSize: '14px',
                                    mt: 2,
                                }}
                            >
                                info@kinbo.com
                            </Typography>

                        </Grid>


                        {/* Top Category */}
                        <Grid item xs={12} md={2} sx={{ marginLeft:5}}>

                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 3,
                                    fontWeight: 600,
                                }}
                            >
                                TOP CATEGORY
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Computer & Laptop
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                SmartPhone
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Headphone
                            </Typography>

                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 1,
                                    borderLeft: '3px solid #EBC80C',
                                    pl: 1,
                                }}
                            >
                                Accessories
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Camera & Photo
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 2 }}>
                                TV & Homes
                            </Typography>

                            <Link
                                href="/about"
                                underline="none"
                                sx={{
                                    color: '#EBC80C',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    fontSize: '14px',
                                }}
                            >
                                Browse All Product
                                <ArrowRightAltIcon fontSize="small" />
                            </Link>

                        </Grid>


                        {/* Quick Links */}
                        <Grid item xs={12} md={2} sx={{marginLeft:5}}>

                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 3,
                                    fontWeight: 600,
                                }}
                            >
                                QUICK LINKS
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Shop Product
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Shopping Cart
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Wishlist
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Compare
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Track Order
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                Customer Help
                            </Typography>

                            <Typography sx={{ color: 'grey', mb: 1 }}>
                                About Us
                            </Typography>

                        </Grid>


                        {/* Download App */}
                        <Grid item xs={12} md={2} sx={{ marginLeft:5}}>

                            <Typography
                                sx={{
                                    color: 'white',
                                    mb: 3,
                                    fontWeight: 600,
                                }}
                            >
                                DOWNLOAD APP
                            </Typography>


                            {/* Google Play */}
                            <Box
                                component="a"
                                href="https://play.google.com"
                                target="_blank"
                                sx={{
                                    backgroundColor: '#1A1F26',
                                    p: 1.5,
                                    borderRadius: '6px',
                                    mb: 2,
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    textDecoration: 'none',
                                }}
                            >

                                <GooglePlayIcon />

                                <Box>

                                    <Typography
                                        sx={{
                                            fontSize: '10px',
                                            color: 'grey',
                                        }}
                                    >
                                        Get it now
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                        }}
                                    >
                                        Google Play
                                    </Typography>

                                </Box>

                            </Box>



                            {/* App Store */}
                            <Box
                                component="a"
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                sx={{
                                    backgroundColor: '#1A1F26',
                                    p: 1.5,
                                    borderRadius: '6px',
                                    color: 'white',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    textDecoration: 'none',
                                }}
                            >

                                <AppleIcon />

                                <Box>

                                    <Typography
                                        sx={{
                                            fontSize: '10px',
                                            color: 'grey',
                                        }}
                                    >
                                        Download on the
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: '14px',
                                        }}
                                    >
                                        App Store
                                    </Typography>

                                </Box>

                            </Box>

                        </Grid>

                        <Grid item xs={12} md={2} sx={{marginLeft:'9px'}}>
                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    mb: 3,
                                }}
                            >
                                POPULAR TAG
                            </Typography>

                            <Box>

                                <Grid item xs={12} md={3}>


                                    <Box>

                                        {/* Row 1 */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 1,
                                                mb: 1,
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            <Button variant="outlined" sx={buttonStyle}>
                                                Game
                                            </Button>

                                            <Button variant="outlined" sx={buttonStyle}>
                                                iPhone
                                            </Button>

                                            <Button variant="outlined" sx={buttonStyle}>
                                                TV
                                            </Button>

                                            <Button variant="outlined" sx={buttonStyle}>
                                                Asus Laptops
                                            </Button>
                                        </Box>


                                        {/* Row 2 */}
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 1,
                                                mb: 1,
                                                flexWrap: 'wrap',
                                            }}
                                        >
                                            <Button variant="outlined" sx={buttonStyle}>
                                                Macbook
                                            </Button>

                                            <Button variant="outlined" sx={buttonStyle}>
                                                SSD
                                            </Button>

                                            <Button variant="outlined" sx={buttonStyle}>
                                                Graphics Card
                                            </Button>
                                        </Box>

                                    </Box>

                                </Grid>


                    


                                <Grid sx={{
                                                display: 'flex',
                                                gap: 1,
                                                mb: 1,
                                                flexWrap: 'wrap',
                                            }}>
                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Tablet
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Samsung
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Asus Laptops
                                    </Button>

                                </Grid>

                                <Grid sx={{
                                                display: 'flex',
                                                gap: 1,
                                                mb: 1,
                                                flexWrap: 'wrap',
                                            }}>
                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Power Bank
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Smart TV
                                    </Button>

                                    <Button
                                        variant="outlined"
                                        sx={buttonStyle}
                                    >
                                        Speaker
                                    </Button>

                                </Grid>


                            </Box>

                        </Grid>





                        {/* Popular Tags 
                        <Grid item xs={12} md={3}>

                            <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                    mb: 3,
                                }}
                            >
                                POPULAR TAG
                            </Typography>



                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '10px',
                                }}
                            >

                                {[
                                    'Game',
                                    'iPhone',
                                    'TV',
                                    'Asus Laptops',
                                    'Macbook',
                                    'SSD',
                                    'Graphics Card',
                                    'Power Bank',
                                    'Smart TV',
                                    'Speaker',
                                    'Tablet',
                                    'Microwave',
                                    'Samsung',
                                ].map((item) => (

                                    <Button
                                        key={item}
                                        variant="outlined"
                                        disableRipple
                                        sx={{
                                            color: '#FFFFFF',
                                            border: '1px solid #2B3440',
                                            backgroundColor: 'transparent',

                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontWeight: 400,

                                            borderRadius: '2px',

                                            minWidth: 'auto',

                                            padding: '10px 16px',

                                            lineHeight: 1,

                                            '&:hover': {
                                                border: '1px solid #FFFFFF',
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                    >
                                        {item}
                                    </Button>

                                ))}

                            </Box>
                        </Grid> */}

                    </Grid>



                    {/* Bottom Footer */}
                    <Box
                        sx={{
                            borderTop: '1px solid #1f1f1f',
                            mt: 6,
                            pt: 3,
                            textAlign: 'center',
                        }}
                    >

                        <Typography
                            sx={{
                                color: 'grey',
                                fontSize: '13px',
                            }}
                        >
                            Kinbo - eCommerce Template © 2021.
                            Design by Templatecookie
                        </Typography>

                    </Box>

                </Container>

            </Box >

        </>
    )
}

export default Footer   