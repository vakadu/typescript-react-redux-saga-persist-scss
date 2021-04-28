import React from 'react';

import styles from './styles.module.scss';

interface ContainerProps {
	type?: 'fluid'
}

const defaultProps: ContainerProps = {
	type: undefined
}

const Container: React.FC<ContainerProps> = ({ 
	type, children, ...rest
}) => {
	const renderContainerType = type => {
        switch (type) {
            case 'fluid' :
                return styles.container__fluid;
            default :
                return styles.container;
        }
    }
	
	return <div { ...rest } className={ renderContainerType(type) }>{ children }</div>
};

Container.defaultProps = defaultProps;

export default Container;
