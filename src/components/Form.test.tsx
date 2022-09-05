import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";


test('When the input is empty, new participants can not be added',() => {

    render(<Form />)


    //find the input on DOM
    const input = screen.getByPlaceholderText("Enter the participants's names");
    // find the button
    const button = screen.getByRole('button');

    //make sure input is in the doc
    expect(input).toBeInTheDocument();
    //make sure the button is disabled
    expect(button).toBeDisabled();

})