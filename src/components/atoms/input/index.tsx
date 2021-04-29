import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

interface InputProps {
    type?: 'text' | 'email' | 'number' | string
    name: string
    label: string | number
    variant?: 'input' | 'textarea' | string
    rows?: number | undefined
    cols?: number | undefined
    classes?: string
    [x:string]: any
}

const defaultProps: InputProps = {
    type: 'text',
    label: '',
    name: '',
    variant: 'input',
    rows: 3,
    cols: 3
}

const inputType = (Component, type, label, name, rows, cols, classes, register, validations, errors, dirtyFields, rest) => {        
    return(
        <div className={ classes }>
            <label className={ styles.input }>
                <Component 
                    className={
                        cn({
                            [styles.input__field]: true,
                            [styles.input__field__error]: errors[name],
                            [styles.input__field__input]: Component === 'input'
                        })
                    } 
                    name={ name }
                    type={ type }
                    rows={ rows }
                    cols={ cols }
                    placeholder=' '
                    { ...register(name, validations) }
                    { ...rest }
                />
                <span 
                    className={ 
                        cn({
                            [styles.input__label]: true,
                            [styles.input__label__error]: errors[name],
                        })
                    }                        
                >
                    { label }
                </span>
                <img 
                    src={
                        `/images/${Object.keys(errors).length > 0 && errors[name] ? 'close-error.png' : 
                            dirtyFields[name] && !errors[name] ? 'success-tick.png' : null }`
                    }
                />
            </label>
            { errors[name] && <p className={ styles.input__error }>{ errors[name].message }</p> }
        </div>
    );
};

const Input: React.FC<InputProps> = ({ 
    type, label, name, variant, rows, cols, register, validations, errors, dirtyFields, classes, ...rest
}) => {
    
    const variantsMapping = {
        input: 'input',
        textarea: 'textarea',
    };
    const Component = variant ? variantsMapping[variant] : 'input';

    return inputType(Component, type, label, name, rows, cols, classes, register, validations, errors, dirtyFields, rest);
};

Input.defaultProps = defaultProps;

export default Input;
