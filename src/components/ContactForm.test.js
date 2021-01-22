import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders ContactForm', () => {
  render(<ContactForm />);
});
test('User can fill out and submit form', async () => {
  render(<ContactForm />);
  // 1. create variables that allow us to test our input fields and submit button
  const firstName = screen.getByLabelText(/First Name/i);
  const lastName = screen.getByLabelText(/Last Name/i);
  const emailAddrs = screen.getByLabelText(/email/i);
  const msg = screen.getByLabelText(/message/i);
  const button = screen.getByRole('button');

  // 2. enter text in the fields and immediately test assertions (expect) once await receives response

  await userEvent.type(firstName, 'Gabriel');
  expect(firstName).toHaveValue('Gabriel');

  await userEvent.type(lastName, 'Henton');
  expect(lastName).toHaveValue('Henton');

  await userEvent.type(emailAddrs, 'g@g.com');
  expect(emailAddrs).toHaveValue('g@g.com');

  await userEvent.type(msg, 'Enjoy this day');
  expect(msg).toHaveValue('Enjoy this day');

  // 3. push the submit button - wait until the field is completely filled out this needs to be at the end of your code
  //  act(() => {
  //     await userEvent.click(button);
  //   });

  userEvent.click(button);

  const result = await screen.findByTestId('result');
  expect(result).toBeInTheDocument();

  screen.debug();
});
// {
//     "firstName": "Gabriel",
//     "lastName": "Henton",
//     "email": "g@g.com",
//     "message": "Enjoy this day"
//   }
