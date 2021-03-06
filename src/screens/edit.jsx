import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Header, Divider, Button, Icon, List, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { validate, renderField } from './formUtils';

let EditScreen = ({ handleDelete, handleSubmit }) => (
  <section id="edit-screen">
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column largeScreen="8" widescreen="8" mobile="16">
        <Segment padded>
          <NavLink to="/">
            <Button circular icon color="blue" floated="right">
              <Icon name="close" />
            </Button>
          </NavLink>
          <Header textAlign="left" as="h1">
            Edit team member
            <Header.Subheader>Edit contact info, location and role</Header.Subheader>
          </Header>
          <br />
          <Divider />
          <Form onSubmit={handleSubmit}>
            <Header textAlign="left" as="h3">Info</Header>
            <Form.Field>
              <Field name="firstname" component={renderField} placeholder="Firstname" type="text" />
            </Form.Field>
            <Form.Field>
              <Field name="lastname" component={renderField} placeholder="Lastname" type="text" />
            </Form.Field>
            <Form.Field>
              <Field name="email" component={renderField} placeholder="Email" type="email" />
            </Form.Field>
            <Form.Field>
              <Field name="phone" component={renderField} placeholder="Phone" type="text" />
            </Form.Field>
            <Header textAlign="left" as="h3">Role</Header>
            <Form.Field>
              <List divided verticalAlign="middle" size="large">
                <List.Item>
                  <List.Content>
                    <Field name="role" label="Regular - Can't delete members" component={renderField} type="radio" value="2" />
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <Field name="role" label="Admin - Can delete members" component={renderField} type="radio" value="1" />
                  </List.Content>
                </List.Item>
              </List>
            </Form.Field>
            <Divider />
            <Button type="button" negative floated="left" onClick={handleDelete}>Delete</Button>
            <Button primary floated="right">Save</Button>
            <br /><br />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  </section>
);

const mapStateToProps = (state, ownProps) => ({
  initialValues: ownProps.member,
});

EditScreen = connect(mapStateToProps)(reduxForm({
  form: 'edit-member',
  enableReinitialize: true,
  validate,
})(EditScreen));

export default EditScreen;
