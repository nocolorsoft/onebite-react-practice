import {useState, useContext} from "react";
import Header from "../components/Header";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";
import {DiaryStateContext, DiaryDispatchContext} from "../App";
import usePageTitle from "../hooks/usePageTitle.jsx";

const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth(), 1, 0, 0, 0).getTime();
    const endTime = new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1, 0, 23, 59, 59).getTime();
    return data.filter((item) => {
        return item.createDate >= beginTime && item.createDate <= endTime;
    });
};

const Home = () => {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date());
    usePageTitle("감정 일기장");

    const monthlyData = getMonthlyData(pivotDate, data);
    console.log(monthlyData);

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1));
    };

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1));
    };

    return (
        <div>
            <Header title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                leftChild={<Button onClick={onDecreaseMonth} text={"<"}/>}
                rightChild={< Button onClick={onIncreaseMonth} text={">"}/>}/>
            <DiaryList data={monthlyData}/>
        </div>
    );
};

export default Home;