import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Container,
    Avatar,
    Stack,
} from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Smart from '../assets/Smart Watch.png'
import Board from '../assets/Board.png'
import Phone from '../assets/Phone.png'

import User from '../assets/UserCircle.png'
import Cal from '../assets/CalendarBlank.png'
import Message from '../assets/Message.png'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Public Sans', sans-serif",
    },
});

const articles = [

    {
        id: 1,
        image: User,
        cardImage: Smart,   // ✅ ADDED
        author: "Kristin",
        date: "19 Dec, 2013",
        views: 453,
        title: "Cras nisi dolor, accumsan et metus sit amet, vulputate condimentum dolor.",
        excerpt:
            "Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt malesuada arcu metus posuere metus.",
    },
    {
        id: 2,
        image: User,
        cardImage: Board,   // ✅ ADDED
        author: "Robert",
        date: "26 Nov, 2015",
        views: 738,
        title: "Curabitur aliquam lectus, non blandit erat mattis vitae.",
        excerpt:
            "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit pharetra blandit lorem.",
    },
    {
        id: 3,
        image: User,
        cardImage: Phone,   // (keep or replace with another image if you want)
        author: "Ariene",
        date: "9 May, 2014",
        views: 826,
        title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
        excerpt:
            "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
    },
];

function MetaItem({ icon, text }) {
    return (
        <Stack direction="row" alignItems="center" spacing={0.5}>
            {icon}
            <Typography variant="caption" color="text.secondary" fontSize={12}>
                {text}
            </Typography>
        </Stack>
    );
}

export default function LatestNews() {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: "#eeeeee",
                    py: 5,
                    px: 2,
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Container maxWidth="lg">

                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        fontFamily="Work Sans sans-serif"
                        color="#1a1a2e"
                        mb={5}
                        sx={{ marginBottom: 5 }}
                    >
                        Latest News
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "2fr 2fr 2fr" },
                            gap: "24px"  ,
                        }}
                    >
                        {articles.map((article) => (
                            <Card
                                key={article.id}
                                elevation={0}
                                sx={{
                                    p: 4,
                                    border: "1px solid #e8eaf0",
                                    backgroundColor: "#ffffff",
                                    display: "flex",
                                    flexDirection: "column",
                                    transition: "box-shadow 0.25s ease, transform 0.25s ease",
                                    "&:hover": {
                                        boxShadow: "0 8px 28px rgba(0, 0, 0, 0.36)",
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >

                                {/* ✅ ONLY CHANGE HERE */}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={article.cardImage}
                                    alt={article.title}
                                    sx={{ objectFit: "cover" }}
                                />

                                <CardContent sx={{ flexGrow: 1, px: 2.5, pt: 2, pb: 1 }}>

                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                        mb={1.5}
                                        flexWrap="wrap"
                                    >
                                        <Stack direction="row" alignItems="center" spacing={0.6}>
                                            <Avatar
                                                src={article.image}
                                                alt={article.author}
                                                sx={{ width: 20, height: 20, }}
                                            />

                                            <Typography variant="caption" fontSize={12}>
                                                {article.author}
                                            </Typography>
                                        </Stack>

                                        <MetaItem
                                            icon={
                                                <Box component="img" src={Cal} sx={{ width: 20, height: 20 }} />
                                            }
                                            text={article.date}
                                        />

                                        <MetaItem
                                            icon={
                                                <Box component="img" src={Message} sx={{ width: 20, height: 20 }} />
                                            }
                                            text={article.views.toString()}
                                        />
                                    </Stack>

                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        fontFamily="'Georgia', serif"
                                        fontSize={15}
                                        mb={1}
                                    >
                                        {article.title}
                                    </Typography>

                                    <Typography variant="body2" fontSize={13}>
                                        {article.excerpt}
                                    </Typography>

                                </CardContent>

                                <Box sx={{ px: 2.5, pb: 2.5 }}>
                                    <Button
                                        variant="outlined"
                                        endIcon={<ArrowForwardIcon fontSize="small" />}
                                        size="small"
                                        sx={{
                                            borderColor: "#e8651a",
                                            color: "#e8651a",
                                        }}
                                    >
                                        Read More
                                    </Button>
                                </Box>

                            </Card>
                        ))}
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}