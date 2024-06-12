import { Link, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledTypography = styled(Typography)({
    fontFamily: 'Inter',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    letterSpacing: '0.025rem',
});

export const StyledLink = styled(Link)({
    color: 'black',
    fontFamily: 'Inter',
    fontSize: '0.7rem',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
    letterSpacing: '0.025rem',
});