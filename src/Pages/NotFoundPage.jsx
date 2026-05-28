import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import notfound from '../../src/assets/PageNotFound.png'

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        py: 8,
        px: 2,
        textAlign: 'center',
        fontFamily: "'Public Sans', sans-serif",
      }}
    >
      {/* 404 Illustration — replace src with your image */}
      <Box
        component="img"
        src= {notfound}
        alt="404 Error Illustration"
        sx={{
          width: { xs: '220px', sm: '280px', md: '320px' },
          mb: 4,
        }}
      />

      {/* Heading */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '22px', sm: '28px' },
          color: '#1a1a2e',
          fontFamily: "'Public Sans', sans-serif",
          mb: 1.5,
        }}
      >
        404, Page not founds
      </Typography>

      {/* Subtext */}
      <Typography
        variant="body2"
        sx={{
          color: '#777',
          fontSize: '14px',
          fontFamily: "'Public Sans', sans-serif",
          maxWidth: '400px',
          lineHeight: 1.7,
          mb: 4,
        }}
      >
        Something went wrong. It's look that your requested could not be found.
        <br />
        It's look like the link is broken or the page is removed.
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => window.history.back()}
          startIcon={<span>←</span>}
          sx={{
            backgroundColor: '#f05a28',
            color: '#fff',
            fontWeight: 600,
            fontSize: '13px',
            fontFamily: "'Public Sans', sans-serif",
            px: 3,
            py: 1.2,
            borderRadius: '4px',
            textTransform: 'uppercase',
            '&:hover': { backgroundColor: '#d44d20' },
          }}
        >
          Go Back
        </Button>

        <Button
          variant="outlined"
          onClick={() => window.location.href = '/'}
          startIcon={<span>🏠</span>}
          sx={{
            borderColor: '#f05a28',
            color: '#f05a28',
            fontWeight: 600,
            fontSize: '13px',
            fontFamily: "'Public Sans', sans-serif",
            px: 3,
            py: 1.2,
            borderRadius: '4px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#fff5f2',
              borderColor: '#f05a28',
            },
          }}
        >
          Go To Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFoundPage;