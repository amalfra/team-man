import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Segment, Header, Divider, Button, Icon, Item, List, Message } from 'semantic-ui-react';

const ListScreen = ({ members }) => (
  <section id="list-screen">
    <Grid
      textAlign="center"
      style={{ height: '100%' }}
      verticalAlign="middle"
    >
      <Grid.Column largeScreen="8" widescreen="8" mobile="16">
        <Segment padded>
          <NavLink to="/add">
            <Button circular icon color="blue" floated="right">
              <Icon name="add" />
            </Button>
          </NavLink>
          <Header textAlign="left" as="h1">
            Team members
            <Header.Subheader>You have {members.length} team member{members.length != 1 ? 's' : null}</Header.Subheader>
          </Header>
          <br />
          <Divider />
          {members.length > 0 ? (
              <Item.Group divided link>
                {members.map((member, index) => (
                  <Item as={NavLink} to={'/edit/' + index} key={'member-' + index}>
                    <Item.Image avatar size="tiny" src="/assets/daniel.jpg" />
                    <Item.Content style={{ textAlign: 'left' }}>
                      <Item.Header>{member.firstname} {member.lastname}
                        {member.role == 1 ? (<i> (admin)</i>) : null}</Item.Header>
                      <Item.Meta>
                        <List>
                          <List.Item>{member.phone}</List.Item>
                          <List.Item>{member.email}</List.Item>
                        </List>
                      </Item.Meta>
                    </Item.Content>
                  </Item>
                ))}
              </Item.Group>
            ) : (
              <Message info>
                <Message.Header>Your team has no members</Message.Header>
                <p>Now is a good time to add members to your team. Hit the plus button on top and start strengthening your team!</p>
              </Message>
            )
          }
        </Segment>
      </Grid.Column>
    </Grid>
  </section>
);

export default ListScreen;
