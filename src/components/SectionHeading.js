/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Heading, Text } from 'theme-ui';
import Zoom from 'react-reveal/Zoom';

const SectionHeading = ({ title, description, ...props }) => {
  return (
    <Box sx={styles.heading} {...props}>
      <Zoom left cascade>
        <Heading sx={styles.title}>{title}</Heading>
      </Zoom>
      <Text as="p" sx={styles.description}>
        <Zoom left cascade>
          {description}
        </Zoom>
      </Text>
    </Box>
  );
};

export default SectionHeading;

const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: ['0 auto 60px'],
  },
  title: {
    fontFamily: 'heading',
    fontWeight: 700,
    fontSize: [5, null, null, 26, null, 30, 9],
    lineHeight: [1.33, 1.33, 1.48],
    letterSpacing: ['-0.5px', null, null, null, null, null, '-1px'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
    },
  },
  description: {
    color: 'heading',
    fontSize: [1, null, null, 2],
    lineHeight: [1.58, 1.58, 1.58, 2.2],
    maxWidth: ['none', 'none', 'none', 'none', 790],
    margin: '15px auto 0',
  },
};
