import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "state/hooks/useParticipantsList";
import { useSelector } from "state/hooks/useSelector";
import styles from './Footer.module.scss';

const Footer = () => {

    const participants = useParticipantsList();

    const browseTo = useNavigate();

    const select = useSelector();

    const start = () => {
        select();
        browseTo('/selector')
    }

    return (
        <footer className={styles.footer_settings}>
            <button className={styles.button} disabled={participants.length < 3} onClick={start}>Start Game!</button>
            <img src="assets/images/bags.png" alt="shopping bags" />
        </footer>

    )
};

export default Footer;