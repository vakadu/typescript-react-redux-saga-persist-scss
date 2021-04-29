import React, { MouseEvent } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';
import Backdrop from '../backdrop';

interface ModalProps {
    show: boolean
    onClick?(e: MouseEvent<HTMLElement>): void
}

const defaultProps: ModalProps = {
    show: false,
    onClick: () => {}
}

const Modal: React.FC<ModalProps> = ({ show, onClick, children }) => {
	return(
        <>
            <Backdrop
                show={ show }
                onClick={ onClick }
            />
            <div 
                className={
                    cn({
                        [styles.modal]: true,
                        [styles.modal__show]: show
                    })
                }
            >
                { children }
            </div>
        </>
    );
};

Modal.defaultProps = defaultProps;

export default Modal;
