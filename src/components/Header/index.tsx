import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo} role="img" aria-label="logo-santa-big"></div>
            <img className={styles.participant} src="assets/images/participant.png" alt="participant"></img>
        </header>

    )
};

export default Header;