import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";
import useDiary from "../hooks/useDiary.jsx";
import {getStringedDate} from "../util/get-stringed-date.js";
import usePageTitle from "../hooks/usePageTitle.jsx";

const Diary = () => {
    const params = useParams();
    const nav = useNavigate();
    usePageTitle(`${params.id}번 일기`);

    const currentDiaryItem = useDiary(params.id);
    console.log(currentDiaryItem);

    if(currentDiaryItem === undefined) {
        return <div>데이터 로딩중...</div>;
    }

    const {createDate, emotionId, content} = currentDiaryItem;
    const title = getStringedDate(new Date(createDate));

    return (
        <div>
            <Header
                title={`${title} 기록`}
                leftChild={<Button text={"< 뒤로 가기"} onClick={() => {nav(-1);}}/>}
                rightChild={<Button text={"수정하기"} onClick={() => nav(`/edit/${params.id}`)}/>}/>
            <Viewer emotionId={emotionId} content={content} />
        </div>
    );
};

export default Diary;