import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Grid, Segment, Header, Divider, Button, Icon, List, Form,
} from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import validations from './validations';

export default ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validations),
  });

  return (
    <section id="add-screen">
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
              Add a team member
              <Header.Subheader>Set email, location and role</Header.Subheader>
            </Header>
            <br />
            <Divider />
            <Form name="add-member" onSubmit={handleSubmit(onSubmit)}>
              <Header textAlign="left" as="h3">Info</Header>
              <Form.Field>
                <input {...register('firstname')} defaultValue="" placeholder="Firstname" type="text" />
                {errors.firstname?.message && <span className="text-danger left floated">{errors.firstname.message}</span>}
              </Form.Field>
              <Form.Field>
                <input {...register('lastname')} defaultValue="" placeholder="Lastname" type="text" />
                {errors.lastname?.message && <span className="text-danger left floated">{errors.lastname.message}</span>}
              </Form.Field>
              <Form.Field>
                <input {...register('email')} defaultValue="" placeholder="Email" type="email" />
                {errors.email?.message && <span className="text-danger left floated">{errors.email.message}</span>}
              </Form.Field>
              <Form.Field>
                <input {...register('phone')} defaultValue="" placeholder="Phone" type="text" />
                {errors.phone?.message && <span className="text-danger left floated">{errors.phone.message}</span>}
              </Form.Field>
              <Header textAlign="left" as="h3">Role</Header>
              <Form.Field>
                <List divided verticalAlign="middle" size="large">
                  <List.Item>
                    <List.Content>
                      <label>
                        <div className="left floated">Regular - Can't delete members</div>
                        <input {...register('role')} placeholder="Phone" type="radio" value="2" className="right floated" />
                      </label>
                      {errors.role?.message && <div className="text-danger clearfix left floated">{errors.role.message}</div>}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <label>
                        <div className="left floated">Admin - Can delete members</div>
                        <input {...register('role')} placeholder="Phone" type="radio" value="1" className="right floated" />
                      </label>
                      {errors.role?.message && <div className="text-danger clearfix left floated">{errors.role.message}</div>}
                    </List.Content>
                  </List.Item>
                </List>
              </Form.Field>
              <Divider />
              <Button primary floated="right">Save</Button>
              <br /><br />
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </section>
  );
};
