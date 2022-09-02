import { render, screen } from "@testing-library/react";
import React from "react";


test('When the input is empty, new participants can not be added',() => {

    render(<Form />)



    const input = screen.getByPlaceholderText("Enter the participants's names");

    const button = screen.getByRole('button');


    expect(input).toBeInTheDocument();

    expect(button).toBeDisabled();

})