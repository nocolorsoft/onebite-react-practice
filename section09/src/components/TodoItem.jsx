import './TodoItem.css';

const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {

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

export default TodoItem;