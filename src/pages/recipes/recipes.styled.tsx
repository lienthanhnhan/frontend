import { Box, styled } from "@mui/material";

export const StyledContainer = styled(Box) ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: '0.5rem',
});

export const StyledImage = styled('img')({
    borderRadius: '0.5rem',
    maxWidth: "30rem",
    height: "auto",
});

export const StyledInfoContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
});

export const StyledTimeContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
});

export const StyledTypography = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: "0.25rem",
    fontWeight: "bold",
});