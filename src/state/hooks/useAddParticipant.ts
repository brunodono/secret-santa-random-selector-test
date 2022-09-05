import { useSetRecoilState } from "recoil";
import { participantsListState } from "../atom";

export const useAddParticipant = () => {
    const setList = useSetRecoilState(participantsListState)
    return (participantName:string) => {
        return setList(currentList => [...currentList, participantName])
    }
}