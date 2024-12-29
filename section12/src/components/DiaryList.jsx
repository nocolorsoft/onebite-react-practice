import "./DiaryList.css";
import Button from "./Button.jsx";
import DiaryItem from "./DiaryItem.jsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";


const DiaryList = ({data}) => {
    const nav = useNavigate();
    const [sortType, setSortType] = useState("latest");

    const onChangeSortType = (e) => {
        setSortType(e.target.value);
    };

    const getSortedData = () => {
        return data.toSorted((a, b) => {
            if (sortType === "latest") {
                return Number(b.createDate) - Number(a.createDate);
            } else {
                return Number(a.createDate) - Number(b.createDate);
            }
        });
    };

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </select>
                <Button text={"새 일기 쓰기"} type={"POSITIVE"} onClick={()=>{nav("/new");}}/>
            </div>
            <div className="list_wrapper">
                {sortedData.map((item) => (
                    <DiaryItem key={item.id}{...item}/>
                ))}
            </div>
        </div>
    );
    
};

export default DiaryList;