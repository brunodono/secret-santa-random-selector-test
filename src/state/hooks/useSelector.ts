import { useSetRecoilState } from "recoil";
import { secretSantaResult } from "state/atom";
import { selectSecretSanta } from "state/helpers/selectSecretSanta";
import { useParticipantsList } from "./useParticipantsList"

export const useSelector = () => {
    const participants = useParticipantsList();
    const setResult = useSetRecoilState(secretSantaResult);
    return () => {
        const result = selectSecretSanta(participants);
        setResult(result);
    }
}