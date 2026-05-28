import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const orders = [
  { id: '#96459761', status: 'IN PROGRESS', date: 'Dec 30, 2019 07:52', total: '$80 (5 Products)' },
  { id: '#71667167', status: 'COMPLETED',   date: 'Dec 7, 2019 23:26',  total: '$70 (4 Products)' },
  { id: '#95214362', status: 'CANCELLED',   date: 'Dec 7, 2019 23:26',  total: '$2,300 (2 Products)' },
  { id: '#71667167', status: 'COMPLETED',   date: 'Feb 2, 2019 19:28',  total: '$250 (1 Products)' },
  { id: '#51746385', status: 'COMPLETED',   date: 'Dec 30, 2019 07:52', total: '$360 (2 Products)' },
  { id: '#51746385', status: 'CANCELLED',   date: 'Dec 4, 2019 21:42',  total: '$220 (7 Products)' },
  { id: '#673971743', status: 'COMPLETED',  date: 'Feb 2, 2019 19:28',  total: '$80 (1 Products)' },
  { id: '#673971743', status: 'COMPLETED',  date: 'Mar 20, 2019 23:14', total: '$160 (1 Products)' },
  { id: '#673971743', status: 'COMPLETED',  date: 'Dec 4, 2019 21:42',  total: '$1,500 (3 Products)' },
  { id: '#673971743', status: 'COMPLETED',  date: 'Dec 30, 2019 07:52', total: '$1,200 (19 Products)' },
  { id: '#673971743', status: 'CANCELLED',  date: 'Dec 30, 2019 05:18', total: '$1,900 (1 Products)' },
  { id: '#673971743', status: 'COMPLETED',  date: 'Dec 30, 2019 07:52', total: '$80 (1 Products)' },
];

const statusStyle = (status) => {
  if (status === 'COMPLETED')   return { color: '#38a169' };
  if (status === 'CANCELLED')   return { color: '#e53e3e' };
  if (status === 'IN PROGRESS') return { color: '#FA8232' };
  return { color: '#777' };
};

const ITEMS_PER_PAGE = 10;

const OrderHistoryPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);
  const paginated = orders.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        p: 3,
        fontFamily: "'Public Sans', sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '14px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: '#1a1a2e',
          mb: 2.5,
          pb: 1.5,
          borderBottom: '1px solid #e0e0e0',
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        Order History
      </Typography>

      {/* Table Header */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1.5fr 2fr 1fr',
          gap: 1,
          pb: 1.5,
          borderBottom: '1px solid #e0e0e0',
          mb: 1,
        }}
      >
        {['ORDER ID', 'STATUS', 'DATE', 'TOTAL', 'ACTION'].map((h) => (
          <Typography
            key={h}
            sx={{
              fontSize: '12px',
              fontWeight: 700,
              color: '#1a1a2e',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            {h}
          </Typography>
        ))}
      </Box>

      {/* Table Rows */}
      {paginated.map((order, i) => (
        <Box
          key={i}
          sx={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr 1.5fr 2fr 1fr',
            gap: 1,
            py: 1.5,
            borderBottom: '1px solid #f5f5f5',
            alignItems: 'center',
          }}
        >
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
            {order.id}
          </Typography>

          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: 700,
              fontFamily: "'Public Sans', sans-serif",
              ...statusStyle(order.status),
            }}
          >
            {order.status}
          </Typography>

          <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
            {order.date}
          </Typography>

          <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
            {order.total}
          </Typography>

          <Typography
            onClick={() => navigate('/account/order-details')}
            sx={{
              fontSize: '12px',
              color: '#FA8232',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: 0.3,
              fontFamily: "'Public Sans', sans-serif",
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            View Details <ArrowForwardIcon sx={{ fontSize: '13px' }} />
          </Typography>
        </Box>
      ))}

      {/* Pagination */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mt: 3 }}>
        <Box
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': { borderColor: '#FA8232', color: '#FA8232' },
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: '12px' }} />
        </Box>

        {[...Array(totalPages)].map((_, i) => (
          <Box
            key={i}
            onClick={() => setPage(i + 1)}
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              border: page === i + 1 ? 'none' : '1px solid #e0e0e0',
              backgroundColor: page === i + 1 ? '#FA8232' : '#fff',
              color: page === i + 1 ? '#fff' : '#444',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: page === i + 1 ? 700 : 400,
              fontFamily: "'Public Sans', sans-serif",
              '&:hover': { borderColor: '#FA8232', color: page === i + 1 ? '#fff' : '#FA8232' },
            }}
          >
            {String(i + 1).padStart(2, '0')}
          </Box>
        ))}

        <Box
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid #e0e0e0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover': { borderColor: '#FA8232', color: '#FA8232' },
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '12px' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default OrderHistoryPage;