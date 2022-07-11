/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/SectionHeading';
import HeroImage from 'assets/hero.png';

import { keyframes } from '@emotion/core';

import bannerIcon1 from 'assets/banner-icon-1-1.svg';
import bannerIcon2 from 'assets/banner-icon-1-2.svg';
import bannerIcon3 from 'assets/banner-icon-1-3.svg';
import bannerIcon4 from 'assets/banner-icon-1-4.svg';
import bannerIcon5 from 'assets/banner-icon-1-5.svg';
import bannerIcon6 from 'assets/banner-icon-1-6.svg';
import { Link } from 'react-scroll';
import Slide from 'react-reveal/Slide';

const Hero = () => {
  return (
    <Box as="section" id="home" sx={styles.hero__section}>
      <Container sx={styles.container}>
        <Image
          sx={styles.bannerIcon1}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon1}
        />
        <Image
          sx={styles.bannerIcon2}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon2}
        />
        <Image
          sx={styles.bannerIcon3}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon3}
        />
        <Image
          sx={styles.bannerIcon4}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon4}
        />
        <Image
          sx={styles.bannerIcon5}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon5}
        />
        <Image
          sx={styles.bannerIcon6}
          className="bannerIcon"
          alt="banner icon"
          src={bannerIcon6}
        />

        <Box sx={styles.hero__contents}>
          <SectionHeading
            sx={styles.hero__heading}
            title="techvestors (noun)
            
            /techˈvɛstərs/"
            description="A team of highly enthusiastic and passionate techies who are working together to innovate and develop technologies to invest in companies which has the potential to achieve new heights."
          />
          <Box as="figure" sx={styles.hero}>
            <Box sx={styles.hero__button}>
              <Link
                to="services"
                spy={true}
                smooth={true}
                duration={500}
                sx={{
                  borderRadius: '45px',
                  flexShrink: 0,
                  mr: [15, 20, null, null, 0],
                  ml: ['auto', null, null, null, 0],
                  border: '2px solid',
                  borderColor: 'primary',
                  color: 'background',
                  bg: 'primary',
                  cursor: 'pointer',
                  padding: ['10px 15px', null, '15px 30px'],
                  '&:hover': {
                    boxShadow: 'rgba(233, 76, 84, 0.57) 0px 9px 20px -5px',
                  },
                }}
              >
                Get started
              </Link>
            </Box>
            <Slide bottom>
              <Image src={HeroImage} alt="hero" />
            </Slide>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;

const bannerAnim1 = keyframes`
    0% {
        transform: rotate3d(0, 1, 0, 0deg);
    }

    30% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    60% {
        transform: rotate3d(1, 0, 0, 0deg);
    }

    80% {
        transform: rotate3d(0, 0, 1, 5deg);
    }

    100% {
        transform: rotate3d(0, 1, 0, 0deg);
    }
`;

const bannerAnim2 = keyframes`
    0% {
        transform: translateY(0px) translateX(0) rotate(0);
    }

    30% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: center center;
    }

    50% {
        transform: translateY(50px) translateX(50px) rotate(45deg);
        transform-origin: right bottom;
    }

    80% {
        transform: translateY(30px) translateX(30px) rotate(15deg);
        transform-origin: left top;
    }

    100% {
        transform: translateY(0px) translateX(0) rotate(0);
        transform-origin: center center;
    }
`;

const bannerAnim3 = keyframes`
    0%,
    100% {
        transform: perspective(400px) translateY(0) rotate(0deg) translateZ(0px) translateX(0);
    }

    50% {
        transform: perspective(400px) rotate(-45deg) translateZ(20px) translateY(20px) translateX(20px);
    }
`;

const styles = {
  hero__section: {
    position: 'relative',
    pt: ['110px', null, null, null, '130px'],
    zIndex: 0,
    ':before': {
      backgroundColor: rgba('#FFF5ED', 0.5),
      content: ['none', null, null, `''`],
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 72,
      zIndex: -1,
    },
  },
  hero__contents: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  hero__heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    h2: {
      fontSize: [8, null, null, 8, 9, 10, 11],
      lineHeight: [1.57],
    },
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  hero: {
    display: ['block', null, null, 'flex'],
    position: 'relative',
    img: {
      display: ['block', null, null, 'block'],
      maxWidth: ['90%'],
      m: ['0 auto'],
    },
  },
  hero__button: {
    zIndex: 1,
    textAlign: ['center'],
    position: ['static', null, null, 'absolute'],
    left: '50%',
    top: 0,
    transform: ['unset', null, null, 'translateX(-50%)'],
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  bannerIcon1: {
    top: '10%',
    left: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon2: {
    top: '10%',
    right: '10%',
    animation: `${bannerAnim2} 8s linear infinite`,
  },
  bannerIcon3: {
    bottom: '40px',
    right: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon4: {
    bottom: '130px',
    left: '-120px',
    animation: `${bannerAnim1} 5s ease-out infinite`,
  },
  bannerIcon5: {
    bottom: '50%',
    left: '15%',
  },
  bannerIcon6: {
    bottom: '-65px',
    left: '0px',
    animation: `${bannerAnim3} 9s linear infinite`,
  },
  bannerIcon7: {
    bottom: '30%',
    right: '0%',
  },
};
