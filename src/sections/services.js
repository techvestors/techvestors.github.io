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
    description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`,
  },
  {
    id: 3,
    icon: icon2,
    title: 'Web development',
    description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Mobile Development',
    description: `Lorem ipsum Fuga inventore quam odio numquam veniam?`,
  },
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Our Service"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sequi similique voluptatum inventore, atque praesentium?"
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
