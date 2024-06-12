import React from 'react';
import { StyledAppBar, StyledBox, StyledLink, StyledTab, StyledTabs, StyledToolbar, StyledTypography } from './Header.styled';
import { useRouter } from 'next/router';
import Logo from '../Logo';

interface HeaderProps {
  value: number;
  onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const menuItems = [
  { label: 'SHOP', path: '/' },
  { label: 'RECIPES', path: '/recipes' },
  { label: 'LEARN', path: '/learn' },
  { label: 'ABOUT', path: '/about' },
  { label: 'LOG', path: '/log' },
];

const Header: React.FC<HeaderProps> = ({ value, onTabChange }) => {
  const router = useRouter();
  const { pathname } = router;

  const isActive = (path: string) => path.length > 1 && pathname.includes(path);

  return (
    <StyledAppBar>
      <Logo />
      <StyledToolbar>
        <StyledBox>
          {menuItems.map((item, _) => (
            <StyledTypography variant="h6" key={item.path}>
              <StyledLink href={item.path} className={isActive(item.path) ? 'active': ''}>{item.label}</StyledLink>
            </StyledTypography>
          ))}
        </StyledBox>
        <StyledTabs value={value} onChange={onTabChange} TabIndicatorProps={{ hidden: true }}        >
          <StyledTab label="Categories" />
          <StyledTab label="Collections" />
          <StyledTab label="Resources" />
        </StyledTabs>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
