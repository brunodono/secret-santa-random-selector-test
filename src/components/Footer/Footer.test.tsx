import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useParticipantsList } from "state/hooks/useParticipantsList";


jest.mock("state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    }
});

const mockBrowsing = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockBrowsing
    }
});

describe('when there is not enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test('the button can not be clicked', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();
    })
});

describe('when there is enough participants', () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(['Bruno','Bia', 'Josefina'])
    })
    test('the game can be started', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button');
        expect(button).not.toBeDisabled();
    })
    test('the game has started', () => {
        render(<RecoilRoot>
            <Footer />
        </RecoilRoot>)
        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockBrowsing).toHaveBeenCalledTimes(1);
        expect(mockBrowsing).toHaveBeenCalledWith('/select')

    })
});