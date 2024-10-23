import log from 'eslint-plugin-react/lib/util/log.js';

const Button = ({ text, color, children }) => {
    const onClickButton = () => {
        console.log(text);
    };

    return (
        <button
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
            style={{ color: color }}
        >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
};

Button.defaultProps = {
    color: 'blue',
};

export default Button;
