import { render } from '@testing-library/react';

import { validate, renderField } from './formUtils';

describe('formUtils', () => {
  describe('validate', () => {
    it('returns all errors', () => {
      expect(validate({})).toEqual({
        email: 'Required',
        firstname: 'Required',
        lastname: 'Required',
        phone: 'Required',
        role: 'Required',
      });
    });

    it('returns firstname errors', () => {
      expect(validate({
        firstname: 't',
      }))
        .toHaveProperty('firstname', 'Minimum be 2 characters or more');
    });

    it('returns no firstname errors', () => {
      expect(validate({
        firstname: 'test',
      }))
        .not
        .toHaveProperty('firstname');
    });
  
    it('returns lastname errors', () => {
      expect(validate({
        lastname: 't',
      }))
        .toHaveProperty('lastname', 'Minimum be 2 characters or more');
    });

    it('returns no lastname errors', () => {
      expect(validate({
        lastname: 'test',
      }))
        .not
        .toHaveProperty('lastname');
    });

    it('returns email errors', () => {
      expect(validate({
        email: 't',
      }))
        .toHaveProperty('email', 'Invalid email address');
    });

    it('returns no email errors', () => {
      expect(validate({
        email: 'test@test.com',
      }))
        .not
        .toHaveProperty('email');
    });

    it('returns no errors', () => {
      expect(validate({
        email: 'test@test.com',
        firstname: 'testFirst',
        lastname: 'testLast',
        phone: '1234567890',
        role: 'Admin',
      })).toEqual({});
    });
  });

  describe('renderField', () => {
    it('renders radio', () => {
      const { container } = render(renderField({
        type: 'radio',
        meta: {},
      }));
      const label = container.querySelector('label');
      const input = label.querySelector('input');
      const error = container.querySelector('.text-danger');

      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(error).toBeFalsy();
    });

    it('renders radio with error', () => {
      const errorMsg = 'error message';
      const { container } = render(renderField({
        type: 'radio',
        meta: {
          touched: true,
          error: errorMsg,
        },
      }));
      const label = container.querySelector('label');
      const input = label.querySelector('input');
      const error = container.querySelector('.text-danger');

      expect(label).toBeTruthy();
      expect(input).toBeTruthy();
      expect(error.textContent).toBe(errorMsg);
    });

    it('renders text', () => {
      const { container } = render(renderField({
        type: 'text',
        meta: {},
      }));
      const label = container.querySelector('label');
      const input = container.querySelector('input');
      const error = container.querySelector('.text-danger');

      expect(label).toBeFalsy();
      expect(input).toBeTruthy();
      expect(error).toBeFalsy();
    });

    it('renders text with error', () => {
      const errorMsg = 'error message';
      const { container } = render(renderField({
        type: 'text',
        meta: {
          touched: true,
          error: errorMsg,
        },
      }));
      const label = container.querySelector('label');
      const input = container.querySelector('input');
      const error = container.querySelector('.text-danger');

      expect(label).toBeFalsy();
      expect(input).toBeTruthy();
      expect(error.textContent).toBe(errorMsg);
    });
  });
});
