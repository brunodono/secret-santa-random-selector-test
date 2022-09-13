import { useRecoilValue } from "recoil"
import { secretSantaResult } from "state/atom"

export const useSelectorResult = () => {
    return useRecoilValue(secretSantaResult)
}