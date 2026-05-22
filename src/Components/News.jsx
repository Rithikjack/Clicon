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
                    {/* Section Title */}
                    <Typography
                        variant="h4"
                        align="center"
                        fontWeight={700}
                        fontFamily="'Georgia', serif"
                        color="#1a1a2e"
                        mb={5}
                        sx={{ marginBottom: 5 }}
                    >
                        Latest News
                    </Typography>

                    {/* Cards Grid */}
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
                            gap: 3,
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
                                {/* Thumbnail */}
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={Smart}
                                    alt={article.title}
                                    sx={{ objectFit: "cover" }}
                                />

                                <CardContent sx={{ flexGrow: 1, px: 2.5, pt: 2, pb: 1 }}>
                                    {/* Meta Row */}
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        alignItems="center"
                                        mb={1.5}
                                        flexWrap="wrap"
                                    >
                                        {/* Author */}
                                        <Stack direction="row" alignItems="center" spacing={0.6}>
                                            <Avatar
                                                src={article.image}
                                                alt={article.author}
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                }}
                                            />

                                            <Typography
                                                variant="caption"
                                                color="text.secondary"
                                                fontSize={12}
                                            >
                                                {article.author}
                                            </Typography>
                                        </Stack>

                                        {/* Date */}
                                        <MetaItem
                                            icon={
                                                <Box
                                                    component="img"
                                                    src={Cal}
                                                    alt="calendar"
                                                    sx={{
                                                        width: 20,
                                                        height: 20,
                                                    }}
                                                />
                                            }
                                            text={article.date}
                                        />

                                        {/* Views */}
                                        <MetaItem
                                            icon={
                                                <Box
                                                    component="img"
                                                    src={Message}
                                                    alt="eye"
                                                    sx={{
                                                        width: 20,
                                                        height: 20,
                                                    }}
                                                />
                                            }
                                            text={article.views.toString()}
                                        />
                                    </Stack>

                                    {/* Title */}
                                    <Typography
                                        variant="subtitle1"
                                        fontWeight={700}
                                        color="#1a1a2e"
                                        lineHeight={1.4}
                                        mb={1}
                                        fontFamily="'Georgia', serif"
                                        fontSize={15}
                                    >
                                        {article.title}
                                    </Typography>

                                    {/* Excerpt */}
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        lineHeight={1.65}
                                        fontSize={13}
                                    >
                                        {article.excerpt}
                                    </Typography>
                                </CardContent>

                                {/* Read More */}
                                <Box sx={{ px: 2.5, pb: 2.5 }}>
                                    <Button
                                        variant="outlined"
                                        endIcon={<ArrowForwardIcon fontSize="small" />}
                                        size="small"
                                        sx={{
                                            mt: 1,
                                            borderColor: "#e8651a",
                                            color: "#e8651a",
                                            fontWeight: 600,
                                            textTransform: "uppercase",
                                            fontSize: 11,
                                            letterSpacing: 1,
                                            borderRadius: 1,
                                            px: 2,
                                            "&:hover": {
                                                backgroundColor: "#e8651a",
                                                color: "#fff",
                                                borderColor: "#e8651a",
                                            },
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
