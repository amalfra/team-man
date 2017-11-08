import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Header, Divider, Button, Icon, Item, List, Label, Form } from 'semantic-ui-react';

const EditScreen = (props) => {
  return <section id='edit-screen'>
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
            Edit team member
            <Header.Subheader>Edit contact info, location and role</Header.Subheader>
            </Header>
            <br />
            <Divider />
            <Form>
            <Header textAlign='left' as='h3'>Info</Header>
            <Form.Field>
                <input type='text' placeholder='Firstname' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Lastname' />
            </Form.Field>
            <Form.Field>
                <input type='email' placeholder='Email' />
            </Form.Field>
            <Form.Field>
                <input type='text' placeholder='Phone' />
            </Form.Field>
            <Header textAlign='left' as='h3'>Role</Header>
            <Form.Field>
                <List divided verticalAlign='middle' size='large'>
                <List.Item>
                    <List.Content floated='right'>
                    <Form.Radio name='role' value='1' />
                    </List.Content>
                    <List.Content style={{ textAlign: 'left' }}>
                    Regular - Can't delete members
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content floated='right'>
                    <Form.Radio name='role' value='0' />
                    </List.Content>
                    <List.Content style={{ textAlign: 'left' }}>
                    Admin - Can delete members
                    </List.Content>
                </List.Item>
                </List>
            </Form.Field>
            <Divider />
            <Button negative floated='left'>Delete</Button>
            <Button primary floated='right'>Save</Button>
            <br /><br />
            </Form>
        </Segment>
        </Grid.Column>
    </Grid>
  </section>;
};

export default EditScreen;
