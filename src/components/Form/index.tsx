import { useRef, useState } from "react";
import { useAddParticipant } from "state/hooks/useAddParticipant";
import { useErrorMessage } from "state/hooks/useErrorMessage";

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
            <input 
            type="text" 
            placeholder="Enter the participants's names"
            value={name}
            onChange={event => setName(event.target.value)}
            ref={inputRef}
             />
            <button disabled={!name}>Add</button>
            {errorMessage && <p role="alert">{errorMessage}</p>}
        </form>
    )
}

export default Form;