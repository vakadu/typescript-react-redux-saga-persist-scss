import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface TypographyProps {
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div' | 'p'
	color?: 'primary' | 'secondary' | 'white' | 'grey_light' | 'grey_medium' | 'grey_dark' | 'blue'
	weight: 'light' | 'medium' | 'bold'
    fontSize: 'smaller' | 'small' | 'medium' | 'large' | 'larger',
}

const defaultProps: TypographyProps = {
    variant: 'div',
    color: 'primary',
    weight: 'medium',
    fontSize: 'medium',
}

const typo = (Component, children, color, weight, fontSize, rest) => (
    <Component
        className={
            cn({
                [styles[`typography__color_${color}`]]: color,
                [styles[`typography__weight_${weight}`]]: weight,
                [styles[`typography__size_${fontSize}`]]: fontSize,
            })
        }
        { ...rest }
    >
        { children }
    </Component>
);

const Typography: React.FC<TypographyProps> = ({ 
	variant, color, weight, fontSize, children, ...rest
}) => {    
    const variantsMapping = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        span: 'span',
        div: 'div',
        p: 'p'
    };
    const Component = variant ? variantsMapping[variant] : 'p';

    return typo(Component, children, color, weight, fontSize, rest);
};

Typography.defaultProps = defaultProps;

export default Typography;
