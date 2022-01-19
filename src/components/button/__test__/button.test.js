import React from 'react';
import ReactDOM from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom";


afterEach(cleanup);
it("renders Button component without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div)
});


it("Check Button's label", () => {
    const { getByTestId } = render(<Button label="save"></Button>);
    // check if 'save' is included in the button label name
    expect(getByTestId('button')).toHaveTextContent("save");
})

it("matches snapshot", () => {
    const tree = renderer.create(<Button label="test"></Button>).toJSON();

    expect(tree).toMatchSnapshot();
})