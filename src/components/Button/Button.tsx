import React from 'react';
import './Button.css'
// import classNames from 'classnames';
type Props = {
    // id: any,
    // className: any,
    onClick?: () => void,
    children?: React.ReactNode
    className?: any,
}



export function Button({ onClick, children, className }: Props) {
    // const isStylesSet = classNames(styles.button, {
        // [className]: className
    // });

    // const [width, setWidth] = React.useState<number>(0);


    return (
        <button className='button' onClick={onClick}>{children}</button>
    )
}

