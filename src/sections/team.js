/** @jsxRuntime classic */
/** @jsx jsx */
import { useRef, useState, useEffect } from 'react';
import { jsx, Box, Container, Image } from 'theme-ui';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionHeading from 'components/SectionHeading';

import avatar1 from 'assets/team/member1.png';
import avatar2 from 'assets/team/member2.png';
import avatar3 from 'assets/team/member3.png';
import avatar4 from 'assets/team/member4.png';
import arrowRight from 'assets/team/arrow-right.png';
import TeamMember from 'components/cards/TeamMember';
import Slide from 'react-reveal/Slide';

SwiperCore.use([Navigation, Pagination]);

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: 'Gourav Mahto',
    designation: 'Co-founder',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'linkedIn',
        link: 'http://linkedin.com/in/',
      },
    ],
  },
  {
    id: 2,
    avatar: avatar3,
    name: 'R Adarsh',
    designation: 'Co-Founder',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'linkedIn',
        link: 'http://linkedIn.com/in',
      },
    ],
  },
  {
    id: 3,
    avatar: avatar1,
    name: 'Mr. Rahul',
    designation: 'Co-Founder',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 4,
    avatar: avatar3,
    name: 'Vaubhav Sinha',
    designation: 'Web Developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://linkedIn.com/in',
      },
    ],
  },
  {
    id: 5,
    avatar: avatar1,
    name: 'Vikram Rana',
    designation: 'Full Stack Developer',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'dribbble',
        link: 'http://linkedin.com/in',
      },
    ],
  },
  {
    id: 6,
    avatar: avatar2,
    name: 'Sudreesha Das',
    designation: 'intern',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com/sudreesha',
      },
      {
        name: 'dribbble',
        link: 'http://linkedIn.com',
      },
    ],
  },
  {
    id: 7,
    avatar: avatar3,
    name: 'Mr. Pratap',
    designation: 'intern',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'linkedIn',
        link: 'http://linkedIn.com/in',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
    ],
  },
  {
    id: 8,
    avatar: avatar1,
    name: 'Shahbaz Alam',
    designation: 'Software Develoepr',
    socialLinks: [
      {
        name: 'twitter',
        link: 'http://twitter.com',
      },
      {
        name: 'github',
        link: 'http://github.com',
      },
      {
        name: 'linkedIn',
        link: 'http://linkedIn.com/in',
      },
    ],
  },
];

const Team = () => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerOffset, setContainerOffset] = useState({
    left: null,
    top: null,
  });

  const isEnd = swiperRef?.current?.swiper?.isEnd;

  const handlePrev = () => {
    swiperRef?.current?.swiper?.slidePrev();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };
  const handleNext = () => {
    swiperRef?.current?.swiper?.slideNext();
    setInterval(() => {
      setCurrentIndex(swiperRef?.current?.swiper?.activeIndex);
    }, 100);

    clearInterval();
  };

  useEffect(() => {
    setContainerOffset({
      left: containerRef.current.offsetLeft,
      top: containerRef.current.offsetTop,
    });
  }, [containerRef]);

  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1601: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  return (
    <Box as="section" id="team" sx={styles.section}>
      <Container ref={containerRef}>
        <SectionHeading
          sx={styles.heading}
          title="Meet our superheros"
          description="Alone we can do so little. Together we can do so much."
        />
      </Container>
      <Box
        sx={{
          ml: currentIndex === 0 ? containerOffset?.left : 0,
          ...styles.teamWrapper,
        }}
      >
        {currentIndex !== 0 && (
          <button
            onClick={handlePrev}
            className="swiper-arrow swiper-arrow-left"
          >
            <Image src={arrowRight} alt="arrow left" />
          </button>
        )}
        {!isEnd && (
          <button
            className="swiper-arrow swiper-arrow-right"
            onClick={handleNext}
          >
            <Image src={arrowRight} alt="arrow right" />
          </button>
        )}

        <Slide right cascade>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            watchSlidesVisibility={true}
            slidesPerView={5}
            breakpoints={breakpoints}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <TeamMember member={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Slide>
      </Box>
    </Box>
  );
};

export default Team;

const styles = {
  section: {
    pt: ['110px', null, null, null, '120px'],
    pb: ['110px', null, null, null, '120px'],
  },
  heading: {
    mb: [30],
    maxWidth: [null, null, null, 500, 560, 730],
    p: {
      fontSize: [1, null, null, 3],
      lineHeight: [1.87, null, null, 2.33],
    },
  },
  teamWrapper: {
    position: 'relative',
    pl: [6],
    pr: [6, null, null, 0],
    transition: '0.3s ease-in-out 0s',
    '.swiper-arrow': {
      backgroundColor: '#fff',
      border: 0,
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      width: [30, null, null, null, 40, 60],
      height: [30, null, null, null, 40, 60],
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 7px 14px rgba(25, 60, 101, 0.06)',
      borderRadius: '50%',
      position: 'absolute',
      zIndex: 2,
      top: 'calc(50% - 40px)',
      transform: 'translateY(-50%)',
      outline: 0,
      img: {
        maxWidth: [8, 10, null, null, '100%'],
      },
    },
    '.swiper-arrow-left': {
      left: [3, null, null, null, 20, 50],
      img: {
        transform: 'rotate(180deg)',
        marginLeft: '-4px',
      },
    },
    '.swiper-arrow-right': {
      right: [3, null, null, null, 20, 50],
      img: {
        marginRight: '-4px',
      },
    },
  },
};
