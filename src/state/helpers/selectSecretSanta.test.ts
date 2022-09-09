import React from "react";
import { selectSecretSanta } from "./selectSecretSanta";

describe('when secret santa is selected', () => {
    test('each participant can not take its own name', () => {

        const participants = [
            'Bruno', 
            'Bia', 
            'Jorel', 
            'IrmaoDoJorel', 
            'Harry', 
            'Hermione'
        ];

        const select = selectSecretSanta(participants);
        participants.forEach(participant =>  {
            const secretSanta = select.get(participant);
            expect(secretSanta).not.toEqual(participant);
        })

    })
})