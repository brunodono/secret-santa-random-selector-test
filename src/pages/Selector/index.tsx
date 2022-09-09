import { useParticipantsList } from "state/hooks/useParticipantsList";

const Selector = () => {

    const participants = useParticipantsList();

    return (
        <section>
            <form>
                <select name="currentParticipant" id="currentParticipant">
                    {participants.map(participant => <option key={participant}>{participant}</option>)}

                </select>
            </form>
        </section>

    )
}

export default Selector;