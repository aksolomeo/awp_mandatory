import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostAnswer from "./PostAnswer";

it('should contain an input field with placeholder', () => {
    const {getByPlaceholderText} = render(<PostAnswer />);
    expect(getByPlaceholderText(/your answer/i)).toBeInTheDocument();
});