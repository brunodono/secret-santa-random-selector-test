import { fireEvent, render, screen,act } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Form from "./Form";


describe('functionality of the Form.tsx', () => {
    
test('when the input is empty, new participants can not be added', () => {

    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>)
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

    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>)
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

test('doubled names can not be added to the list', () => {

    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>)
    const input = screen.getByPlaceholderText("Enter the participants's names");
    const button = screen.getByRole('button');

    fireEvent.change(input, {
        target: {
            value: 'Bruno Bignardi'
        }
    });
    fireEvent.click(button);
    fireEvent.change(input, {
        target: {
            value: 'Bruno Bignardi'
        }
    });
    fireEvent.click(button);

    const errorMessage = screen.getByRole('alert');
    expect(errorMessage.textContent).toBe('Doubled names are not allowed!');
})

test('the error message has got to disappear after the timers', () => {
    jest.useFakeTimers()

    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>)
    const input = screen.getByPlaceholderText("Enter the participants's names");
    const button = screen.getByRole('button');

    fireEvent.change(input, {
        target: {
            value: 'Bruno Bignardi'
        }
    });
    fireEvent.click(button);
    fireEvent.change(input, {
        target: {
            value: 'Bruno Bignardi'
        }
    });
    fireEvent.click(button);

    let errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeInTheDocument();

    act(() => {
        jest.runAllTimers();
    });    

    errorMessage = screen.queryByRole('alert');
    expect(errorMessage).toBeNull();
})

})
