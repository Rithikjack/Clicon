import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    TextField,
    Button,
} from "@mui/material";
import Navbar from '../../Components/Home/Navbar'
import Footer from '../../Components/Home/Black_Footer_2'

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function FAQSection() {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const faqItems = [
        "Suspendisse ultrices pharetra libero sed interdum.",
        "Quisque quis nunc quis urna tempor lobortis vel non orci.",
        "Donec rutrum ultrices ante nec malesuada.",
        "Nulla sed sapien maximus, faucibus massa vitae.",
    ];

    return (
        <>
            <Navbar />
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                    py: 8,
                    minHeight: "100vh",
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 5,
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
                        {/* LEFT SIDE - FAQ */}
                        <Box
                            sx={{
                                flex: 1,
                                maxWidth: "720px",
                                width: "100%",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "28px", md: "34px" },
                                    fontWeight: 700,
                                    color: "#222",
                                    mb: 4,
                                }}
                            >
                                Frequently Asked Questions
                            </Typography>

                            {/* First Accordion */}
                            <Accordion
                                expanded={expanded === "panel1"}
                                onChange={handleChange("panel1")}
                                elevation={0}
                                sx={{
                                    mb: 2,
                                    border: "1px solid #e5e5e5",
                                    boxShadow: "none",
                                    "&:before": {
                                        display: "none",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        expanded === "panel1" ? (
                                            <RemoveIcon sx={{ color: "#fff" }} />
                                        ) : (
                                            <AddIcon />
                                        )
                                    }
                                    sx={{
                                        backgroundColor:
                                            expanded === "panel1" ? "#f7931e" : "#fff",
                                        color: expanded === "panel1" ? "#fff" : "#222",
                                        minHeight: "60px",
                                    }}
                                >
                                    <Typography sx={{ fontSize: "15px" }}>
                                        Fusce molestie condimentum facilisis.
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        color: "#777",
                                        fontSize: "14px",
                                        lineHeight: 1.8,
                                    }}
                                >
                                    <Typography sx={{ mb: 2 }}>
                                        Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet
                                        in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet
                                        ullamcorper gravida.
                                    </Typography>

                                    <ul style={{ paddingLeft: "20px", margin: 0, fontSize: '20px' }}>
                                        <li>Vivamus sed est non arcu porta aliquet et vitae nulla.</li>
                                        <li>Integer et lacus vitae justo fermentum rutrum.</li>
                                        <li>
                                            Proin blandit nunc risus, at semper turpis sagittis nec.
                                        </li>
                                        <li>Quisque ut dolor erat.</li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            {/* Other Accordions */}
                            {faqItems.map((item, index) => (
                                <Accordion
                                    key={index}
                                    expanded={expanded === `panel${index + 2}`}
                                    onChange={handleChange(`panel${index + 2}`)}
                                    elevation={0}
                                    sx={{
                                        mb: 2,
                                        border: "1px solid #e5e5e5",
                                        boxShadow: "none",
                                        "&:before": {
                                            display: "none",
                                        },
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={
                                            expanded === `panel${index + 2}` ? (
                                                <RemoveIcon sx={{ color: "grey" }} />
                                            ) : (
                                                <AddIcon sx={{ color: "black" }} />
                                            )
                                        }
                                        sx={{
                                            backgroundColor:
                                                expanded === `panel${index + 2}` ? "#FA8232" : "#fff",

                                            color:
                                                expanded === `panel${index + 2}` ? "#fff" : "black",

                                            minHeight: "60px",

                                            "& .MuiAccordionSummary-content": {
                                                margin: "12px 0",
                                            },
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: "15px",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails
                                        sx={{
                                            backgroundColor: "#f8f8f8",
                                        }}
                                    >
                                        <Typography sx={{
                                            color: "#777",
                                            fontSize: "14px",
                                            lineHeight: 1.8,
                                        }}>
                                            Sample accordion content goes here.
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))}
                        </Box>

                    
                        {/* RIGHT SIDE - SUPPORT FORM */}
                        <Box
                            sx={{
                                width: { xs: "100%", md: "300px" }, // reduced width
                                backgroundColor: "#efe7c9",
                                p: 1.8, // reduced height using smaller padding
                                flexShrink: 0,
                                marginTop: 12,
                                fontFamily: [
                                    'Public Sans',
                                    'sans-serif',
                                  ].join(','),
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "#222",
                                    mb: 1,
                                    lineHeight: 1.2,
                                    gap: '2px',
                                    m:2
                                }}
                            >
                                Don’t find your answer, Ask for support.
                            </Typography>

                            <Typography
                                sx={{
                                    color: "#666",
                                    fontSize: "12px",
                                    lineHeight: 1.5,
                                    mb: 1.5,
                                    m:1,
                                    m:2,
                                    fontSize: '18px'
                                }}
                            >
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                                Sed molestie accumsan dui.
                            </Typography>

                            <TextField
                                fullWidth
                                placeholder="Email address"
                                size="small"
                                sx={{
                                    mb: 1,
                                    backgroundColor: "#fff",
                                }}
                            />

                            <TextField
                                fullWidth
                                placeholder="Subject"
                                size="small"
                                sx={{
                                    mb: 1,
                                    backgroundColor: "#fff",
                                }}
                            />

                            <TextField
                                fullWidth
                                placeholder="Message"
                                multiline
                                rows={2} // reduced textarea height
                                sx={{
                                    mb: 1.5,
                                    backgroundColor: "#fff",
                                }}
                            />

                            <Button
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                sx={{
                                    backgroundColor: "#f7931e",
                                    m:1,
                                    px: 2,
                                    py: 1.5,
                                    borderRadius: 0,
                                    fontWeight: 700,
                                    fontSize: "11px",
                                    minWidth: "fit-content",
                                    boxShadow: "none",

                                    "&:hover": {
                                        backgroundColor: "#e68210",
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                SEND MESSAGE
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Footer />
        </>
    );
}