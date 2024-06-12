import { AppBar, Box, Link, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';

export const StyledAppBar = styled(AppBar)({
    background: 'white',
    flexDirection: 'row',
});

export const StyledToolbar = styled(Toolbar)({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    padding: "0 !important",
});

export const StyledBox = styled(Box)({
    display: 'flex',
    height: "4rem",
    padding:"0 15rem",
    gap: '4rem',
});

export const StyledTypography = styled(Typography)({
    alignContent: "center",
});

export const StyledLink = styled(Link)({
    color: '#505050',
    fontFamily: 'Inter',
    fontSize: '1rem',

    textDecoration: 'none',
    '&.active': {
        textDecoration: 'underline',
        textDecorationColor: '#d80000',
        textDecorationThickness: '0.15rem',
        textUnderlineOffset: "0.3rem",
    }
});

export const StyledTabs = styled(Tabs)({
    backgroundColor: "#FCF4EC",
    bottom: 0,
    width: "inherit",
    padding: "0 15rem",
    '& .MuiTabs-flexContainer': {
        gap: "2rem",
    }
});

export const StyledTab = styled(Tab)({
    padding: 0,
    color: "#605C59",
    fontFamily: "Inter",
    fontSize: "0.78125rem",
    fontWeight: 400,
    alignItems: "flex-start",
});