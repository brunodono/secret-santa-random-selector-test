import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";


test('when the input is empty, new participants can not be added',() => {

    render(<Form />)
    //find the input on DOM
    const input = screen.getByPlaceholderText("Enter the participants's names");
    // find the button
    const button = screen.getByRole('button');
    //make sure input is in the doc
    expect(input).toBeInTheDocument();
    //make sure the button is disabled
    expect(button).toBeDisabled();
});

test('add a new participant if there is a full filled name', () => {

    render(<Form />)
    //find the input on DOM
    const input = screen.getByPlaceholderText("Enter the participants's names");
    // find the button
    const button = screen.getByRole('button');
    //enter a value to input
    fireEvent.change(input, {
        target: {
            value: 'Bruno Bignardi'
        }
    });

    //click on submit button
    fireEvent.click(button);

    //make sure the input has active focus
    expect(input).toHaveFocus();

    //make sure the input has no value
    expect(input).toHaveValue("");
    
})