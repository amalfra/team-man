import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Header, Divider, Button, Icon, Item, List, Label } from 'semantic-ui-react';

class ListScreen extends React.Component {
  constructor() {
    super()
  }

  render() {
    return(
      <section id='list-screen'>
        <Grid
          textAlign='center'
          style={{ height: '100%' }}
          verticalAlign='middle'
        >
          <Grid.Column largeScreen='8' widescreen='8' mobile='16'>
            <Segment padded>
              <NavLink to="/add">
                <Button circular icon color='blue' floated='right'>
                  <Icon name='add' />
                </Button>
              </NavLink>
              <Header textAlign='left' as='h1'>
                Team members
                <Header.Subheader>You have 2 team members</Header.Subheader>
              </Header>
              <br />
              <Divider />
              <Item.Group divided link>
                <Item as={NavLink} to='/edit/1'>
                  <Item.Image avatar size='tiny' src='/assets/daniel.jpg' />

                  <Item.Content style={{ textAlign: 'left' }}>
                    <Item.Header>Name 1</Item.Header>
                    <Item.Meta>
                      <List>
                        <List.Item>123-456-789</List.Item>
                        <List.Item>test@test.com</List.Item>
                      </List>
                    </Item.Meta>
                  </Item.Content>
                </Item>
                <Item as={NavLink} to='/edit/2'>
                  <Item.Image avatar size='tiny' src='/assets/daniel.jpg' />

                  <Item.Content style={{ textAlign: 'left' }}>
                    <Item.Header>Name 2</Item.Header>
                    <Item.Meta>
                      <List>
                        <List.Item>123-456-789</List.Item>
                        <List.Item>test@test.com</List.Item>
                      </List>
                    </Item.Meta>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Segment>
          </Grid.Column>
        </Grid>
      </section>
    )
  }
};

export default ListScreen;
