import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const result = render(<CheckoutForm/>)
})

test("form shows success message on submit with form details", () => {
    const onSubmit = jest.fn();
    const { getByTestId } = render(<CheckoutForm onSubmit={onSubmit}/>)
    fireEvent.click(getByTestId('form'));
    expect(onSubmit)
});
