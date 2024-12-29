import {useParams} from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {DiaryDispatchContext, DiaryStateContext} from "../App.jsx";
import useDiary from "../hooks/useDiary.jsx";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Edit = () => {
    const params = useParams();
    const nav = useNavigate();
    const {onDelete, onUpdate} = useContext(DiaryDispatchContext);
    const currentDiaryItem = useDiary(params.id);
    usePageTitle(`${params.id}번 일기 수정하기`);

    const onClickDelete = () => {
        if(window.confirm("정말 삭제하시겠습니까? 다시 복구되지않습니다.")) {
            onDelete(params.id);
            nav("/", {replace: true});
        }
    };

    const onSubmit = (input) => {
        if(window.confirm("수정하시겠습니까?")) {
            onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        }
        nav("/", {replace: true});
    };

    return  (
        <div>
            <Header
                title={"일기 수정하기"}
                leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)}/>}
                rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}
            />
            <Editor initData={currentDiaryItem} onSubmit={onSubmit}/>
        </div>
    )
    ;
};

export default Edit;