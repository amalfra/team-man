import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Button,
  Center,
  Container,
  Divider,
  Group,
  Paper,
  Radio,
  Stack,
  Text,
  TextInput,
  Title,
  ActionIcon,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

import validations from './validations';

const Edit = ({ handleDelete, onSubmit, member }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(validations),
    defaultValues: member,
  });

  return (
    <section id="edit-screen">
      <Center mih="100vh">
        <Container size="sm" w="100%">
          <Paper withBorder shadow="sm" p="xl" radius="md">
            <Group justify="flex-end" mb="md">
              <NavLink to="/">
                <ActionIcon variant="filled" color="blue" radius="xl" size="lg">
                  <IconX size={18} />
                </ActionIcon>
              </NavLink>
            </Group>

            <Title order={1}>Edit team member</Title>
            <Text c="dimmed" size="sm" mb="lg">
              Edit contact info, location and role
            </Text>

            <Divider mb="lg" />

            <form name="edit-member" onSubmit={handleSubmit(onSubmit)}>
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
                    {...field}
                    error={errors.role?.message}
                  >
                    <Stack>
                      <Radio
                        value="2"
                        label="Regular - Can't delete members"
                      />
                      <Radio
                        value="1"
                        label="Admin - Can delete members"
                      />
                    </Stack>
                  </Radio.Group>
                )}
              />

              <Divider my="xl" />

              <Group justify="space-between">
                <Button
                  color="red"
                  variant="filled"
                  type="button"
                  onClick={handleDelete}
                >
                  Delete
                </Button>

                <Button type="submit">
                  Save
                </Button>
              </Group>
            </form>
          </Paper>
        </Container>
      </Center>
    </section>
  );
};

Edit.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  member: PropTypes.object,
};

export default Edit;
