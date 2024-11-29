import './TodoItem.css';
import {memo, useContext} from 'react';
import {TodoContext} from '../App.jsx';


const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    };

    const onChangeDelete = () => {
        onDelete(id);
    };

    return (
        <div className="TodoItem">
            <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onChangeDelete}>삭제</button>
        </div>
    );
};

/*
export default memo(TodoItem, (prevProps, nextProps) => {
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;
    return true;
});*/

export default memo(TodoItem);