import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import React from 'react';
import ParticipantsList from ".";
import { useParticipantsList } from "state/hooks/useParticipantsList";

jest.mock("state/hooks/useParticipantsList", () => {
    return {
        useParticipantsList: jest.fn()
    }
})

describe("an empty participants list", () => {
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue([])
    })
    test("has got to be rendered with no elements", () => {
        render(<RecoilRoot>
            <ParticipantsList />
            </RecoilRoot>)
    
    
            const items = screen.queryAllByRole('listItem');
            expect(items).toHaveLength(0);
    });
});

describe("a filled participants list", () => {
    const participants = ['Bruno', 'Bia']
    beforeEach(() => {
        (useParticipantsList as jest.Mock).mockReturnValue(participants)
    })
    test("has got to be rendered with no elements", () => {
        render(<RecoilRoot>
            <ParticipantsList />
            </RecoilRoot>)
    
            const items = screen.queryAllByRole('listitem');
            expect(items).toHaveLength(participants.length);
    })
})