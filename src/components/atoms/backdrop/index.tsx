import React, { MouseEvent } from 'react';

import styles from './styles.module.scss';

interface BackdropProps {
    show: boolean
    onClick(e: MouseEvent<HTMLElement>): void
}

const defaultProps: BackdropProps = {
    show: false,
    onClick: () => {}
}

const Backdrop: React.FC<BackdropProps> = ({ show, onClick }) => {
	return show ? <div onClick={ onClick } className={ styles.backdrop }/> : null
};

Backdrop.defaultProps = defaultProps;

export default Backdrop;
