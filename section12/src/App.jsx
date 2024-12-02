import "./App.css";
import Diary from "./pages/Diary.jsx";
import Home from "./pages/Home.jsx";
import New from "./pages/New.jsx";
import NotFound from "./pages/NotFound.jsx";
import { Routes, Route} from "react-router-dom";
import Edit from "./pages/Edit.jsx";
import {useReducer, useRef, createContext} from "react";

const mockData = [
    {
        id: 1,
        createDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용"
    },
    {
        id: 2,
        createDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용"
    },
];

function reducer(state, action) {
    switch (action.type) {
    case "CREATE":
        return [action.data, ...state];
    case "UPDATE":
        return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item);
    case "DELETE":
        return state.filter((item) => String(item.id) !== String(action.id));
    default:
        return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createDate,
                emotionId,
                content
            }
        });
    };

    const onUpdate = (id, createDate, emotionId, content) => {
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createDate,
                emotionId,
                content
            }
        });
    };
    
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id: id
        });
    };
    
    return (
        <>
            <button onClick={() => {onCreate(new Date().getTime(), 1, "Hello");}}>일기 추가</button>
            <button onClick={() => {onUpdate(2, new Date().getTime(), 3, "수정된 일기입니다.");}}>일기 수정</button>
            <button onClick={() => {onDelete(1);}}>일기 삭제</button>
            <DiaryStateContext.Provider value={{data}}>
                <DiaryDispatchContext.Provider value={{onCreate, onDelete, onUpdate}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit/>}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
};

export default App;
