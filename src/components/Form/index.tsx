import { useRef, useState } from "react";
import { useAddParticipant } from "state/hooks/useAddParticipant";
import { useErrorMessage } from "state/hooks/useErrorMessage";
import styles from "./Form.module.scss";

const Form = () => {

    const [name, setName] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const addToList = useAddParticipant();

    const errorMessage = useErrorMessage();

    const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToList(name);
        setName('');
        inputRef.current?.focus();
    }
    
    return (
        <form onSubmit={addParticipant}>
            <div className={styles.input_button}>
            <input 
            type="text" 
            placeholder="Enter the participants's names"
            value={name}
            onChange={event => setName(event.target.value)}
            ref={inputRef}
             />
            <button disabled={!name}>Add</button>
            {errorMessage && <p role="alert" className={styles.error_message}>{errorMessage}</p>}
            </div>
        </form>
    )
}

export default Form;