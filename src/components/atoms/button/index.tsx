import React, { useState, useEffect, MouseEvent } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface ButtonProps {
	color?: 'primary' | 'secondary' | 'white' | 'grey_light' | 'grey_medium'
	type?: 'button' | 'submit'
	background?: 'primary' | 'secondary' | 'white' | 'transparent' | 'grey_medium' | 'blue'
	weight?: 'light' | 'medium' | 'bold'
    fontSize?: 'smaller' | 'small' | 'medium' | 'large' | 'larger'
    size?: 'small' | 'medium' | 'large' | 'none'
	block?: true | false
	radius?: true | false
	disabled?: true | false
	onClick?(e: MouseEvent<HTMLElement>): void
};

const defaultProps: ButtonProps = {
	color: 'white',
	background: 'primary',
	type: 'button',
	weight: 'medium',
	fontSize: 'medium',
	size: 'medium',
	block: false,
	radius: true,
	disabled: false,
	onClick: () => {}
};

const Button: React.FC<ButtonProps> = ({ 
	color, onClick, type, children, background, weight, fontSize, size, block, radius, disabled
}) => {
	const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);
    
    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
	}, [isRippling]);
	
	return (
		<button
			type={ type }
			disabled={ disabled }
			className={
				cn({
					'button': true,
					[styles[`button__color__${color}`]]: color,
					[styles[`button__background__${background}`]]: background,
                    [styles[`button__size__${size}`]]: size,
                    [styles[`button__radius`]]: radius,
					[styles[`button__block`]]: block,
                    [styles[`button__weight__${weight}`]]: weight,
                    [styles[`button__color__${color}`]]: color,
					[styles[`button__fontsize__${fontSize}`]]: fontSize,
					[styles[`button__disabled`]]: disabled,
				})
			}
			onClick={ e => {
				const target = e.target as HTMLTextAreaElement;
				const rect = target.getBoundingClientRect();
				setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
				onClick && onClick(e);
			}}
		>
			  { isRippling ? (
                <span
                    className='ripple'
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            ) : (
                ''
            )}
			{ children }
		</button>
	);
};

Button.defaultProps = defaultProps;

export default Button;
