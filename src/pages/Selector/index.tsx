import Card from "components/Card";
import { useState } from "react";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useSelectorResult } from "state/hooks/useSelectorResult";
import styles from './Selector.module.scss';

const Selector = () => {

    const participants = useParticipantsList();

    const [currentParticipant, setCurrentParticipant] = useState('');
    const [secretSanta, setSecretSanta] = useState('');


    const result = useSelectorResult();

    const select = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(result.has(currentParticipant)) {
        setSecretSanta(result.get(currentParticipant)!)
        };
    };

    return (
    <Card>
        <section className={styles.selector}>
            <h2>Whose turn is it?</h2>
            <form onSubmit={select}>
                <select 
                required 
                name="currentParticipant" 
                id="currentParticipant" 
                placeholder="Select your name"
                value={currentParticipant}
                onChange={event => setCurrentParticipant(event.target.value)}>
                    {participants.map(participant => <option key={participant}>{participant}</option>)}
                </select>
                <p>Click Select button to see who is your Secret Santa!</p>
                <button className={styles.button_selector}>Select</button>
            </form>
            {secretSanta && <p className={styles.result} role="alert">{secretSanta}</p>}
            <footer className={styles.selector}>
            <img src="assets/images/paper-plane.png" alt="A paper plane drawing" />
            </footer>
        </section>

        </Card>

    )
}

export default Selector;