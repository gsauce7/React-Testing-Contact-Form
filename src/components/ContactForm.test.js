import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders ContactForm', () => {
  render(<ContactForm />);
});
test('User can fill out and submit form', () => {
  render(<ContactForm />);
  // create variables that allow us to test our input fields
  const firstName = screen.getByText(/first name/i);
  const lastName = screen.getByText(/last name/i);
  const emailAddrs = screen.getByText(/email/i);
  const msg = screen.getByText(/message/i);

  // enter text in the fields

  userEvent.type(firstName, 'Gabriel');
  userEvent.type(lastName, 'Henton');
  userEvent.type(emailAddrs, 'g@g.com');
  userEvent.type(msg, 'Success!');

  // test expectations
  expect(firstName).toHaveValue('Gabriel');
  expect(lastName).toHaveValue('Henton');
  expect(msg).toHaveValue('Success!');
  expect(emailAddrs).toHaveValue('g@g.com');

  //submit button test
  const button = screen.getByRole('button');
  userEvent.click(button);

  const newContact = screen.findByText(/Gabriel Henton/i);

  newContact.then((item) => {
    expect(item).toBeTruthy();
  });
});
