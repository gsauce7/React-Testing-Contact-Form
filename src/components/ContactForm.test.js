import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('renders ContactForm w/o errors', () => {
    render(< ContactForm />);
});
test('User can fill out and submit form', async () => {

    render(<ContactForm />);

    const firstName = await screen.getByText(/first name/i);
    const lastName = await screen.getByText(/last name/i);
    const emailAdrs = await screen.getByText(/email/i);
    const msg = await screen.getByText(/message/i);

//lets us enter text in the fields
    fireEvent.change(firstName, {
        target: { name: 'Gabriel'}});

    fireEvent.change(lastName, {
        target: { name: 'Henton' }});

    fireEvent.change(emailAdrs, {
        target: { name: 'gabrielhenton@gmail.com' }});

    fireEvent.change(msg, {
        target: { name: 'This is a test' }});

    //submit button test
    const button = screen.getByRole('button');
    fireEvent.click(button);

    await screen.queryByText(/gabriel/i);
    await screen.queryByText(/henton/i);
    await screen.queryByText(/gabrielhenton@gmail.com/i);
    await screen.queryByText(/this is a test/i);

});
