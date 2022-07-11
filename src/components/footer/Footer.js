/** @jsxRuntime classic */
/** @jsx jsx */
import Widget from './widget';
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import { menuItems, social } from './footer.data';
import FooterLogo from 'assets/techvestors-logo.png';

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image
              src={FooterLogo}
              alt="Logo"
              sx={{
                mx: 'auto',
                variant: 'links.logo',
              }}
            />
          </Link>

          <Box sx={styles.footer.menus}>
            {menuItems.map(({ id, title, items }) => (
              <Widget key={id} title={title} items={items} />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mx: 'auto',
              justifyContent: 'center',
            }}
          >
            {social.map(({ path, label, icon }, i) => (
              <Image src={icon} alt={label} sx={styles.footer.icon} key={i} />
            ))}
          </Box>
          <Text sx={styles.footer.copyright}>
            © {new Date().getFullYear()} TechVestors. All rights reserved.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid #e6e6e6',
    boxShadow: '0 -1px 0 rgba(0, 0, 0, 0.1)',
    footerBottomArea: {
      pt: [6],
      pb: [6],
      display: 'grid',
      alignContent: 'center',
    },
    menus: {
      mt: [4, null, null, 6],
      gap: [30, null, 50, '20px 50px', 17, 50],
      display: ['grid'],
      gridTemplateColumns: [
        'repeat(2, 1fr)',
        null,
        null,
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
      ],
    },

    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    icon: {
      width: ['20px', null, '30px'],
      height: ['20px', null, '30px'],
      mr: [2, null, 3],
      my: [4, null, 6],
      transition: 'all 0.35s',
      ':hover': {
        transform: 'scale(1.2)',
      },
    },
    copyright: {
      mt: [2],
      fontSize: [1, '15px'],
      width: '100%',
      textAlign: 'center',
    },
  },
};
