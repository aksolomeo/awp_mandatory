import React from "react";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Questions from "./Questions";

it('should show questions inside Questions component', () => {
    const dummyData = [
        {
            _id: "dsa987fsd",
            question: "Help"
        },
        {
            _id: "asdaioedsa",
            question: "How do I turn on my pc?"
        }
    ];
    const {getByText} = render(<Questions questions={dummyData}/>);
    expect(getByText(/Help/i)).toBeInTheDocument();
    expect(getByText(/How do I turn on my pc?/i)).toBeInTheDocument();
});