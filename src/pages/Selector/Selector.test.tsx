import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useSelectorResult } from "state/hooks/useSelectorResult";
import Selector from ".";

jest.mock("state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    }
});

jest.mock("state/hooks/useSelectorResult", () => {
    return {
        useSelectorResult: jest.fn()
    }
});

describe('on the selector page', () => {
    const participants = ['Bruno', 'Bia', 'Jorel'];

    const result = new Map([
        ['Bruno', 'Jorel'],
        ['Jorel', 'Bia'],
        ['Bia', 'Bruno']
    ]);

    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants);
        (useSelectorResult as jest.Mock).mockReturnValue(result)
    })    

    test('every participant can see their secret santa', () => {
        render(
        <RecoilRoot>
            <Selector />
        </RecoilRoot>)

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(participants.length + 1) //+1 refers to the standard option"select your name"

    });

    test('the secret santa is shown when asked', () => {
        render(
            <RecoilRoot>
                <Selector />
            </RecoilRoot>)

            const select = screen.getByPlaceholderText('Select your name');

            fireEvent.change(select, {
                target: {
                    value: participants[0]
                }
            });

            const button = screen.getByRole('button');

            fireEvent.click(button);

            const secretSanta = screen.getByRole('alert');

            expect(secretSanta).toBeInTheDocument()


    })

})