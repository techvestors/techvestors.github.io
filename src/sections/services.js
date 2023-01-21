/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/SectionHeading';
import Service from 'components/cards/Service';
import icon1 from 'assets/service/service1.png';
import icon2 from 'assets/service/service2.png';
import icon3 from 'assets/service/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Marketing & advertising',
    description: `Get your business recognized throught the means of digital marketing`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Web development',
    description: `Make you business accessable to your customer with ease`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Mobile Development',
    description: `Find soultions to your business problems and turn it into an app`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Service"
          description="We help you find the cheapest and simplest solutions to your business problems"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [30],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
