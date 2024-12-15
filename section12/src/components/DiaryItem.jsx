import {getEmotionImage} from "../util/get-emotion.image.js";
import Button from "./Button.jsx";
import "./DiaryItem.css";

const DiaryItem = ({ diary }) => {
    const emotionId = 5;

    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)} alt=""/>
            </div>
            <div className="info_section">
                <div className="created_date">
                    {new Date().toLocaleDateString()}
                </div>
                <div className="content">
                    일기 컨텐츠
                </div>
            </div>
            <div className="button_section">
                <Button text={"수정하기"} />
            </div>
        </div>
    );
};

export default DiaryItem;