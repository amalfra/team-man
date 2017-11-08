import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Header, Divider, Button, Icon, Item, List, Label, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

const validate = (values) => {
  const errors = {}
  if (!values.firstname) {
    errors.firstname = 'Required'
  } else if (values.firstname.length < 2) {
    errors.firstname = 'Minimum be 2 characters or more'
  }
  if (!values.lastname) {
    errors.lastname = 'Required'
  } else if (values.lastname.length < 2) {
    errors.lastname = 'Minimum be 2 characters or more'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  }
  if (!values.role) {
    errors.role = 'Required'
  }
  return errors
};

const renderField = ({input, placeholder, type, meta: {touched, error, warning}}) => (
  <div>
    <input {...input} placeholder={placeholder} type={type} />
    {touched && ((error && <span className="text-danger">{error}</span>))}
  </div>
)

let AddScreen = (props) => {
  const { handleSubmit } = props;

  return <section id='add-screen'>
    <Grid
      textAlign='center'
      style={{ height: '100%' }}
      verticalAlign='middle'
    >
      <Grid.Column largeScreen='8' widescreen='8' mobile='16'>
        <Segment padded>
          <NavLink to="/">
            <Button circular icon color='blue' floated='right'>
              <Icon name='close' />
            </Button>
          </NavLink>
          <Header textAlign='left' as='h1'>
            Add a team member
            <Header.Subheader>Set email, location and role</Header.Subheader>
          </Header>
          <br />
          <Divider />
          <Form onSubmit={handleSubmit}>
            <Header textAlign='left' as='h3'>Info</Header>
            <Form.Field>
              <Field name='firstname' component={renderField} placeholder='Firstname' type='text' />
            </Form.Field>
            <Form.Field>
              <Field name='lastname' component={renderField} placeholder='Lastname' type='text' />
            </Form.Field>
            <Form.Field>
              <Field name='email' component={renderField} placeholder='Email' type='email' />
            </Form.Field>
            <Form.Field>
              <Field name='phone' component={renderField} placeholder='Phone' type='text' />
            </Form.Field>
            <Header textAlign='left' as='h3'>Role</Header>
            <Form.Field>
              <List divided verticalAlign='middle' size='large'>
                <List.Item>
                  <List.Content floated='right'>
                    <Field name='role' component={renderField} type='radio' value='2' />
                  </List.Content>
                  <List.Content style={{ textAlign: 'left' }}>
                    Regular - Can't delete members
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content floated='right'>
                    <Field name='role' component={renderField} type='radio' value='1' />
                  </List.Content>
                  <List.Content style={{ textAlign: 'left' }}>
                    Admin - Can delete members
                  </List.Content>
                </List.Item>
              </List>
            </Form.Field>
            <Divider />
            <Button primary floated='right'>Save</Button>
            <br /><br />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  </section>;
};

AddScreen = reduxForm({
  form: 'add-member',
  validate,
  initialValues: {role: 2}
})(AddScreen);

export default AddScreen;
