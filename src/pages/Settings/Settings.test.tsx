import { render } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Settings from ".";

const mockBrowsing = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockBrowsing
    }
});

describe('the settings page',() => {
    test('has to render correctly', () => {
        const { container } = render(
        <RecoilRoot>
            <Settings />
        </RecoilRoot>)

        expect(container).toMatchSnapshot()
    })
})