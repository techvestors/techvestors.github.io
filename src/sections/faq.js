import SectionHeading from 'components/SectionHeading';
import React from 'react';
import { Box, Container, Text, Flex, Button } from 'theme-ui';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'Full Stack Developer',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
        <Button
          variant="secondary"
          sx={{
            mt: 3,
            mb: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            letterSpacing: '0.05em',
            // hover
            '&:hover': {
              color: 'white',
              bg: 'primary',
            },
          }}
        >
          Apply
        </Button>
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Software Tester',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Front End Developer',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Back End Developer',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Graphic Desinger',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Mobile App Developer',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Content Writer',
    contents: (
      <div>
        <Text
          as="ul"
          sx={{
            py: 2,
            pl: 3,
            fontSize: [1, null, null, 2],
            lineHeight: [1.58, 1.58, 1.58, 2.2],
            maxWidth: ['none', 'none', 'none', 'none', 790],
          }}
        >
          <Text as="h4">Experienced</Text>
          <li>
            Minimum of 6 months of real-time experience in React/Node.js/Angular
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Experience in implementing well-known React workflows such as Redux
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Experience with Javascript backend framework like Express.js</li>
          <li>Experience with Restful API services</li>

          <Text
            as="h4"
            sx={{
              mt: 3,
            }}
          >
            Fresher
          </Text>
          <li>
            Freshers with basic coding knowledge/course/certification in
            React/Node.js/Angular are preferred
          </li>
          <li>Must have basic real-time knowledge in React/Node.js/Angular</li>
          <li>
            Good knowledge in Javascript and able to handle Array & Objects
            built-in methods
          </li>
          <li>
            Good understanding of structured and unstructured databases (MySQL
            and MongoDB)
          </li>
          <li>
            Proficient understanding of code versioning tools, such as Git
          </li>
          <li>Critical thinking and problem-solving skills</li>
        </Text>
      </div>
    ),
  },
];

function faq() {
  return (
    <Box as="section" id="testimonial" sx={styles.position}>
      <Box sx={styles.pos__header}>
        <SectionHeading
          sx={styles.pos__heading}
          title="What client say about us"
          description="Customer testimonial"
        />
      </Box>
      <Container>
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default faq;
const styles = {
  position: {
    backgroundColor: '#F4F4F6',
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['60px', null, null, null, '80px', null, '120px'],
  },

  pos__header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  pos__heading: {
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
  flex: {
    flexWrap: 'wrap',
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  faqWrapper: {
    mx: 'auto',
  },
};
