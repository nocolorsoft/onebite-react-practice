const Controller = ({onCliickBoutton}) => {
    return (
        <div>
            <button
                onClick={
                    () => {
                        onCliickBoutton(-1);
                    }
                }
            >
                -1
            </button>
            <button
                onClick={
                    () => {
                        onCliickBoutton(-10);
                    }
                }
            >
                -10
            </button>
            <button
                onClick={
                    () => {
                        onCliickBoutton(-100);
                    }
                }
            >
                -100
            </button>
            <button
                onClick={
                    () => {
                        onCliickBoutton(100);
                    }
                }
            >
                +100
            </button>
            <button
                onClick={
                    () => {
                        onCliickBoutton(10);
                    }
                }
            >
                +10
            </button>
            <button
                onClick={
                    () => {
                        onCliickBoutton(1);
                    }
                }
            >
                +1
            </button>
        </div>
    );
};

export default Controller;