import React from 'react';
import { Container, Box } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';

interface RootLayoutProps {
  children?: React.ReactNode;
  recipeName?: string;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children, recipeName }) => {
  const router = useRouter();
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push('/recipes/categories');
        break;
      case 1:
        router.push('/recipes/collections');
        break;
      case 2:
        router.push('/recipes/resources');
        break;
      default:
        break;
    }
  };

  return (
    <Container style={{ padding: "8rem" }}>
      <Header value={value} onTabChange={handleTabChange} />
      <Container>
        <Breadcrumb recipeName={recipeName} />
        <Box>
          {children}
        </Box>
      </Container>
    </ Container>
  );
};

export default RootLayout;
