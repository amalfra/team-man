import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {
  ActionIcon,
  Alert,
  Avatar,
  Box,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { IconPlus, IconInfoCircle } from '@tabler/icons-react';
import PropTypes from 'prop-types';

const ListScreen = ({ members }) => (
  <section id="list-screen">
    <Container
      size="md"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box w="100%" maw={700}>
        <Paper shadow="sm" p="lg" radius="md">
          <Group justify="space-between" mb="md">
            <div>
              <Title order={1}>Team members</Title>
              <Text c="dimmed" size="sm">
                You have {members.length} team member
                {members.length !== 1 ? "s" : ""}
              </Text>
            </div>

            <ActionIcon
              component={Link}
              to="/add"
              color="blue"
              radius="xl"
              size="lg"
            >
              <IconPlus size={18} />
            </ActionIcon>
          </Group>

          <Divider my="md" />

          {members.length > 0 ? (
            <Stack gap="sm">
              {members.map((member, index) => (
                <Paper
                  key={index}
                  component={NavLink}
                  to={`/edit/${index}`}
                  withBorder
                  p="md"
                  radius="md"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Group align="flex-start" wrap="nowrap">
                    <Avatar
                      src="/assets/daniel.jpg"
                      size="lg"
                      radius="xl"
                    />

                    <Box>
                      <Group gap={4}>
                        <Text fw={600}>
                          {member.firstname} {member.lastname}
                        </Text>
                        {member.role === '1' && (
                          <Text size="sm" c="dimmed" fs="italic">
                            (admin)
                          </Text>
                        )}
                      </Group>

                      <Text size="sm" c="dimmed">
                        {member.phone}
                      </Text>

                      <Text size="sm" c="dimmed">
                        {member.email}
                      </Text>
                    </Box>
                  </Group>
                </Paper>
              ))}
            </Stack>
          ) : (
            <Alert
              icon={<IconInfoCircle size={16} />}
              title="Your team has no members"
              color="blue"
              variant="light"
            >
              Now is a good time to add members to your team. Hit the plus
              button above and start strengthening your team!
            </Alert>
          )}
        </Paper>
      </Box>
    </Container>
  </section>
);

ListScreen.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ListScreen;
