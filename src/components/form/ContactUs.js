import { Box, Grid, Flex, Button, Input, Textarea, Container } from 'theme-ui';
import SectionHeading from 'components/SectionHeading';
import { useForm } from 'react-hook-form';
import React from 'react';

function ContactUs() {
  const {
    handleSubmit,
    register,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: 'onTouched',
  });

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [Message, setMessage] = React.useState('');

  const onSubmit = async (values, e) => {
    e.preventDefault();

    alert(JSON.stringify(values, null, 2));
    emailjs
      .sendForm(
        'service_jsagzuy',
        'template_ucuhh4q',
        JSON.stringify(values, null, 2),
        'user_sIqJp1RQ7DDudqNuvQogl',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    reset();
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={styles.form}
      id="contactus"
    >
      <SectionHeading
        sx={styles.contact__heading}
        title="Get in touch"
        description="We're here to help and answer any questions you might have. We look forward to hearing from you."
      />
      <Container>
        <Grid sx={styles.flex}>
          <Flex sx={styles.formInput}>
            <Input
              name="fname"
              id="fname"
              placeholder="First name"
              {...register('fname', {
                required: 'First name is required',
              })}
            />
            {errors.fname && (
              <div className="error">{errors.fname.message}</div>
            )}
          </Flex>
          <Flex sx={styles.formInput}>
            <Input
              name="lname"
              id="lname"
              placeholder="Last name"
              {...register('lname', {
                required: 'Last name is required',
              })}
            />
            {errors.lname && (
              <div className="error">{errors.lname.message}</div>
            )}
          </Flex>
        </Grid>

        <Grid sx={styles.flex} mt={3}>
          <Flex sx={styles.formInput}>
            <Input
              name="email"
              id="email"
              placeholder="Email address"
              {...register('email', {
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
            />
            {errors.email && (
              <div className="error">{errors.email.message}</div>
            )}
          </Flex>

          <Flex sx={styles.formInput}>
            <Input
              name="phone"
              id="phone"
              placeholder="Contact Number"
              {...register('phone', {
                required: 'Phone no. is Required',
              })}
            />
            {errors.phone && (
              <div className="error">{errors.phone.message}</div>
            )}
          </Flex>
        </Grid>

        <Flex sx={styles.formInput}>
          <Textarea
            name="query"
            id="query"
            placeholder="Queries"
            rows={8}
            sx={styles.textArea}
            {...register('query', {
              required: 'Query is required',
            })}
          />
          {errors.query && <div className="error">{errors.query.message}</div>}
        </Flex>

        <Box sx={styles.buttons}>
          <Button type="submit">Submit</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;

const styles = {
  form: {
    backgroundColor: '#F4F4F6',
    // p: 3,
    maxWidth: 'container',
    mx: 'auto',
    pt: [3, 4, 5],
    pb: [3, 4, 5],
  },
  flex: {
    display: 'flex',
    flexDirection: ['column', null, null, 'row'],
    input: {
      flex: 1,
      gap: [2, null, null, 3],
      mb: [3],
      borderRadius: '15px',
      px: 5,
    },
  },
  textArea: {
    mb: [3],
    borderRadius: '15px',
    p: 5,
    mt: 3,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    mt: 5,
  },

  contact__heading: {
    textAlign: 'center',
    ml: 'auto',
    mr: 'auto',
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
  formInput: {
    flex: 1,
    flexDirection: 'column',
    '.error': {
      color: '#ff0000',
      fontSize: [1, null, null, 2],
      lineHeight: [1.87, null, null, 2.33],
      mb: [2],
      ml: 'auto',
    },
  },
};
