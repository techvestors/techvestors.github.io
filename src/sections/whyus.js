/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Image } from 'theme-ui';
import Tabs, { TabPane } from 'rc-tabs';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { rgba } from 'polished';
import tabImage1 from 'assets/whyus/social.png';
import tabImage2 from 'assets/whyus/erp.png';
import Slide from 'react-reveal/Slide';

const data = [
  {
    id: 1,
    tabTitle: 'What we invest in?',
    title: `We will turn your idea in the successful business model framework`,
    description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aspernatur error voluptatem cupiditate.`,
    image: tabImage1,
    list: [
      'ERP System',
      'App Development',
      'Web Development',
      'Social Marketing',
    ],
  },
  {
    id: 2,
    tabTitle: 'Why invest through us?',
    title: `We will turn your idea in the successful business model framework`,
    description: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam accusamus aspernatur error voluptatem cupiditate.`,
    moreLink: '#explore-more',
    image: tabImage2,
    list: ['Growth', 'Trust', 'Collabration', 'Innovation'],
  },
];

const WhyUs = () => {
  return (
    <Box as="section" id="why-us" sx={styles.section}>
      <Container>
        <Tabs sx={styles.tabs} animated={{ tabPane: true }}>
          {data?.map((item) => (
            <TabPane
              key={item.id}
              tab={<Heading as="h4">{item.tabTitle}</Heading>}
            >
              <Slide bottom cascade>
                <Box>
                  <Heading>{item.title}</Heading>
                  <Text as="p" sx={styles.description}>
                    {item.description}
                  </Text>
                  <Box sx={styles.list}>
                    {item.list.map((item, i) => (
                      <Box key={i} className="list-item">
                        <RiCheckboxCircleFill
                          color="#3FDBB1"
                          size="20px"
                          sx={{ mr: 2 }}
                        />
                        <span>{item}</span>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={styles.illustration}>
                  <Image src={item.image} alt="illustration" />
                </Box>
              </Slide>
            </TabPane>
          ))}
        </Tabs>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  section: {
    pt: [11, null, null, 12],
    pb: [8, null, null, 9, null, 11],
  },
  tabs: {
    border: 0,
    '.rc-tabs-nav': {
      mb: [8, null, null, 9, 10, 9, 12],
    },
    '.rc-tabs-nav-wrap': {
      borderBottom: `1px solid ${rgba('#01070D', 0.1)}`,
      justifyContent: 'center',
    },
    '.rc-tabs-nav-list': {
      flexGrow: 1,
      justifyContent: 'space-evenly',
      pb: [3, null, null, 5, null, 6],
    },
    '.rc-tabs-tab-btn': {
      outline: 0,
      alignItems: 'center',
      img: {
        outline: 0,
      },
    },
    '.rc-tabs-tab': {
      backgroundColor: 'transparent',
      // m: ['0 45px'],
      h4: {
        fontFamily: 'body',
        fontSize: [0, null, null, 17, null, null, 4],
        fontWeight: 700,
        lineHeight: 1.5,
        textAlign: ['center', null, null, null, 'left'],
        whiteSpace: ['break-spaces', null, null, null, 'unset'],
      },
    },
    '.rc-tabs-tabpane': {
      display: ['flex', null, null, 'grid'],
      flexDirection: ['column-reverse', null, null, 'unset'],
      alignItems: 'center',
      justifyContent: 'center',
      gridTemplateColumns: [null, null, null, '0.9fr 1.1fr'],
      outline: 0,
      gap: [5, null, null, 11],
      h2: {
        color: 'heading',
        fontSize: [24, null, null, 6, 26, 8, 40],
        fontWeight: 700,
        lineHeight: [1.45, null, null, 1.5],
        letterSpacing: [null, null, null, '0.5px', null, '-1px'],
        textAlign: ['center', null, null, 'left'],
      },
      p: {
        color: 'textSecondary',
        fontSize: [1, null, null, 2, 17],
        lineHeight: [1.87, null, null, 2, 2.48],
        textAlign: ['center', null, null, 'left'],
        mt: [4],
      },
      '.list-item': {
        fontSize: [0, null, null, 1, 2],
        fontWeight: 500,
        lineHeight: [2.8],
        display: 'flex',
        alignItems: 'center',
      },
    },
  },
  list: {
    mt: [5],
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: ['repeat(2, 164px)', null, null, 'repeat(2, 180px)'],
  },

  illustration: {
    display: ['flex'],
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: [null, null, null, null, null, 'center'],
    img: {
      maxWidth: ['65%', null, null, '100%', null, '90%', '100%'],
    },
  },
};
