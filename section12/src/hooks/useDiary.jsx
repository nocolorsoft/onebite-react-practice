import {useContext, useEffect, useState} from "react";
import {DiaryStateContext} from "../App.jsx";
import {useNavigate, useParams} from "react-router-dom";

const useDiary = (id) => {
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();
    const nav = useNavigate();

    useEffect(() => {
        let find = data.find((item) => String(item.id) === String(id));
        if(!find) {
            window.alert("해당 일기를 찾을 수 없습니다.");
            nav("/", {replace: true});
        }

        setCurrentDiaryItem(find);
    }, [id]);

    return currentDiaryItem;
};

export default useDiary;