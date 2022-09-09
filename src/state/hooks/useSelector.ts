import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { secretSantaResult } from "state/atom";
import { useParticipantsList } from "./useParticipantsList"

export const useSelector = () => {

    const participants = useParticipantsList();

    const setResult = useSetRecoilState(secretSantaResult);

    return () => {

        const totalParticipants = participants.length;
        const randomized = shuffle(participants)

        const result = new Map<string, string>();

        for (let index = 0; index < totalParticipants; index++) {

            const indexSecretSanta = index === (totalParticipants - 1) ? 0 : index + 1;
            result.set(randomized[index], randomized[indexSecretSanta]);

            setResult(result);
        }

    }
}