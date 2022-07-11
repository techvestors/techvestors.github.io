/** @jsx jsx */
import { jsx, Container, Flex, Button, Link as A } from 'theme-ui';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/techvestors-logo.png';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import menuCareerItems from './header.career';
import { useRouter } from 'next/router';

export default function Header({ className }) {
  const router = useRouter();
  console.log(router.pathname === '/career');

  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.header__container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {router.pathname === '/career'
              ? menuCareerItems.map(({ path, label }, i) => (
                  <Link
                    activeClass="active"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                    key={i}
                  >
                    {label}
                  </Link>
                ))
              : menuItems.map(({ path, label }, i) => (
                  <Link
                    activeClass="active"
                    to={path}
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                    key={i}
                  >
                    {label}
                  </Link>
                ))}
          </Flex>

          {router.pathname === '/' && (
            <Button className="join__us" onClick={() => router.push('/career')}>
              Join Us
            </Button>
          )}

          {router.pathname === '/career' && (
            <A
              className="join__us"
              href="/www.linkedin.com"
              sx={{
                textDecoration: 'none',
              }}
            >
              Apply
            </A>
          )}

          <MobileDrawer isCareer={router.pathname === '/career'} />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.join__us': {
      borderRadius: '45px',
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
      border: '2px solid',
      borderColor: 'primary',
      color: 'primary',
      bg: 'transparent',
      cursor: 'pointer',
      padding: ['10px 15px', null, '15px 30px'],
      '&:hover': {
        color: 'white',
        bg: 'primary',
      },
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  header__container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
  },
};
