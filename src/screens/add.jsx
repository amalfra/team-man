import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Radio,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import validations from './validations';

const Add = ({ onSubmit }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validations),
  });

  return (
    <section id="add-screen">
      <Container size="md" h="100vh">
        <Grid justify="center" align="center" h="100%">
          <Grid.Col span={{ base: 12, lg: 8 }}>
            <Paper p="xl" shadow="sm" withBorder radius="md">
              <Group justify="flex-end">
                <Button
                  component={NavLink}
                  to="/"
                  variant="filled"
                  color="blue"
                  radius="xl"
                  size="sm"
                >
                  <IconX size={16} />
                </Button>
              </Group>

              <Title order={1}>Add a team member</Title>
              <Text c="dimmed" mb="md">
                Set email, location and role
              </Text>

              <Divider my="md" />

              <form onSubmit={handleSubmit(onSubmit)}>
                <Title order={3} mb="md">
                  Info
                </Title>

                <Stack>
                  <TextInput
                    placeholder="Firstname"
                    {...register("firstname")}
                    error={errors.firstname?.message}
                  />

                  <TextInput
                    placeholder="Lastname"
                    {...register("lastname")}
                    error={errors.lastname?.message}
                  />

                  <TextInput
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    error={errors.email?.message}
                  />

                  <TextInput
                    placeholder="Phone"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                </Stack>

                <Title order={3} mt="xl" mb="md">
                  Role
                </Title>

                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <Radio.Group
                      label="Role"
                      value={field.value}
                      onChange={field.onChange}
                      error={errors.role?.message}
                    >
                      <Stack>
                        <Radio value="2" label="Regular - Can't delete members" />
                        <Radio value="1" label="Admin - Can delete members" />
                      </Stack>
                    </Radio.Group>
                  )}
                />

                <Divider my="xl" />

                <Group justify="flex-end">
                  <Button type="submit">Save</Button>
                </Group>
              </form>
            </Paper>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
};

Add.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Add;
