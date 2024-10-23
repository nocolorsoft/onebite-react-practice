import './Main.css';

const Main = () => {
    const user = {
        name: '이정환',
        isLogin: false,
    };

    // return (
    //     <main>
    //         {user.isLogin ? (<div>로그인</div>) : (<div>로그아웃</div>)}
    //     </main>
    // );

    if (user.isLogin) {
        return <div>로그인</div>;
    } else {
        return <div className={'logout'}>로그아웃</div>;
    }
};

export default Main;
