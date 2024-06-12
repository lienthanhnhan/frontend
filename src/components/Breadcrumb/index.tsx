import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs } from '@mui/material';
import { useRouter } from 'next/router';
import { StyledLink, StyledTypography } from './Breadcrumb.styled';

interface BreadcrumbProps {
  recipeName?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ recipeName }) => {
  const router = useRouter();
  const pathnames = router.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs   separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mt: 2 }}>
      <StyledLink href="/" color="inherit">Home</StyledLink>
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return isLast ? (
          <StyledTypography color="textPrimary" key={to}>
            {recipeName || value}
          </StyledTypography>
        ) : (
          <StyledLink href={to} color="inherit" key={to}>
            {value}
          </StyledLink>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
