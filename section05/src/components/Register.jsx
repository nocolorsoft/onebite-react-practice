import { useState, useRef } from 'react';

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        birth: '',
        country: '',
        bio: '',
    });

    const countRef = useRef(0);
    const inputRef = useRef();

    let count = 0;

    const onChage = (e) => {
        countRef.current++;
        // count++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onsubmit = () => {
        if(input.name === '') {
            inputRef.current.focus();
            console.log(inputRef.current);
        }
    };


    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name={'name'}
                    onChange={onChage}
                    placeholder={'이름'}
                    value={input.name}
                />
            </div>
            <div>
                <input
                    name={'birth'}
                    type='date'
                    value={input.birth}
                    onChange={onChage}
                />
            </div>
            <div>
                <select
                    name={'country'}
                    value={input.country}
                    onChange={onChage}
                >
                    <option>선택</option>
                    <option value='kr'>한국</option>
                    <option value='us'>미국</option>
                    <option value='uk'>영국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea
                    name={'bio'}
                    value={input.bio}
                    onChange={onChage}
                    cols="30"
                    rows="10">
                </textarea>
                {input.bio}
            </div>

            <button onClick={onsubmit}>제출</button>
        </div>
    );
};

export default Register;
