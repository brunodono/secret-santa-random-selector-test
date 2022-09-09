import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import Selector from ".";

jest.mock("state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    }
});

describe('on the selector page', () => {
    const participants = ['Bruno', 'Bia', 'Jorel'];
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    });
    test('every participant can see their secret santa', () => {
        render(<RecoilRoot>
            <Selector />
        </RecoilRoot>)

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(participants.length)

    })
})