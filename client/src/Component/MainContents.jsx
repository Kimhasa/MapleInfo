import React, {useEffect, useState} from "react";
import '../App.css';
import '../css/MainContents.css'
import Button from 'react-bootstrap/Button';
import axios from "axios";

function MainContents(){

    const [imageSrc1, setImageSrc1] = useState('');
    const [userName1, setUserName1] = useState('');
    const [userLevel1, setUserLevel1] = useState('');
    const [userClass1, setUserClass1] = useState('');
    const [userRank1, setUserRank1] = useState('');
    const [userRecord1, setUserRecord1] = useState('');

    const [imageSrc2, setImageSrc2] = useState('');
    const [userName2, setUserName2] = useState('');
    const [userLevel2, setUserLevel2] = useState('');
    const [userClass2, setUserClass2] = useState('');
    const [userRank2, setUserRank2] = useState('');
    const [userRecord2, setUserRecord2] = useState('');

    const [imageSrc3, setImageSrc3] = useState('');
    const [userName3, setUserName3] = useState('');
    const [userLevel3, setUserLevel3] = useState('');
    const [userClass3, setUserClass3] = useState('');
    const [userRank3, setUserRank3] = useState('');
    const [userRecord3, setUserRecord3] = useState('');

    const [imageSrc4, setImageSrc4] = useState('');
    const [userName4, setUserName4] = useState('');
    const [userLevel4, setUserLevel4] = useState('');
    const [userClass4, setUserClass4] = useState('');
    const [userRank4, setUserRank4] = useState('');
    const [userRecord4, setUserRecord4] = useState('');

    const [rankName1, setRankName1] = useState('');
    const [rankLevel1, setRankLevel1] = useState('');
    const [rankClass1, setRankClass1] = useState('');
    const [rankGuild1, setRankGuild1] = useState('');

    const [rankName2, setRankName2] = useState('');
    const [rankLevel2, setRankLevel2] = useState('');
    const [rankClass2, setRankClass2] = useState('');
    const [rankGuild2, setRankGuild2] = useState('');

    const [rankName3, setRankName3] = useState('');
    const [rankLevel3, setRankLevel3] = useState('');
    const [rankClass3, setRankClass3] = useState('');
    const [rankGuild3, setRankGuild3] = useState('');

    const [rankName4, setRankName4] = useState('');
    const [rankLevel4, setRankLevel4] = useState('');
    const [rankClass4, setRankClass4] = useState('');
    const [rankGuild4, setRankGuild4] = useState('');

    const [rankName5, setRankName5] = useState('');
    const [rankLevel5, setRankLevel5] = useState('');
    const [rankClass5, setRankClass5] = useState('');
    const [rankGuild5, setRankGuild5] = useState('');

    const [rankName6, setRankName6] = useState('');
    const [rankLevel6, setRankLevel6] = useState('');
    const [rankClass6, setRankClass6] = useState('');
    const [rankGuild6, setRankGuild6] = useState('');

    const [rankName7, setRankName7] = useState('');
    const [rankLevel7, setRankLevel7] = useState('');
    const [rankClass7, setRankClass7] = useState('');
    const [rankGuild7, setRankGuild7] = useState('');

    const [rankName8, setRankName8] = useState('');
    const [rankLevel8, setRankLevel8] = useState('');
    const [rankClass8, setRankClass8] = useState('');
    const [rankGuild8, setRankGuild8] = useState('');

    const [rebootRankName1, setRebootRankName1] = useState('');
    const [rebootRankLevel1, setRebootRankLevel1] = useState('');
    const [rebootRankClass1, setRebootRankClass1] = useState('');
    const [rebootRankGuild1, setRebootRankGuild1] = useState('');

    const [rebootRankName2, setRebootRankName2] = useState('');
    const [rebootRankLevel2, setRebootRankLevel2] = useState('');
    const [rebootRankClass2, setRebootRankClass2] = useState('');
    const [rebootRankGuild2, setRebootRankGuild2] = useState('');

    const [rebootRankName3, setRebootRankName3] = useState('');
    const [rebootRankLevel3, setRebootRankLevel3] = useState('');
    const [rebootRankClass3, setRebootRankClass3] = useState('');
    const [rebootRankGuild3, setRebootRankGuild3] = useState('');

    const [rebootRankName4, setRebootRankName4] = useState('');
    const [rebootRankLevel4, setRebootRankLevel4] = useState('');
    const [rebootRankClass4, setRebootRankClass4] = useState('');
    const [rebootRankGuild4, setRebootRankGuild4] = useState('');

    const [rebootRankName5, setRebootRankName5] = useState('');
    const [rebootRankLevel5, setRebootRankLevel5] = useState('');
    const [rebootRankClass5, setRebootRankClass5] = useState('');
    const [rebootRankGuild5, setRebootRankGuild5] = useState('');

    const [rebootRankName6, setRebootRankName6] = useState('');
    const [rebootRankLevel6, setRebootRankLevel6] = useState('');
    const [rebootRankClass6, setRebootRankClass6] = useState('');
    const [rebootRankGuild6, setRebootRankGuild6] = useState('');

    const [rebootRankName7, setRebootRankName7] = useState('');
    const [rebootRankLevel7, setRebootRankLevel7] = useState('');
    const [rebootRankClass7, setRebootRankClass7] = useState('');
    const [rebootRankGuild7, setRebootRankGuild7] = useState('');

    const [rebootRankName8, setRebootRankName8] = useState('');
    const [rebootRankLevel8, setRebootRankLevel8] = useState('');
    const [rebootRankClass8, setRebootRankClass8] = useState('');
    const [rebootRankGuild8, setRebootRankGuild8] = useState('');

    const [dojangRankName1, setDojangRankName1] = useState('');
    const [dojangRankClass1, setDojangRankClass1] = useState('');
    const [dojangRankLevel1, setDojangRankLevel1] = useState('');
    const [dojangRank1, setDojangRank1] = useState('');
    const [dojangRankRecord1, setDojangRankRecord1] = useState('');

    const [dojangRankName2, setDojangRankName2] = useState('');
    const [dojangRankClass2, setDojangRankClass2] = useState('');
    const [dojangRankLevel2, setDojangRankLevel2] = useState('');
    const [dojangRank2, setDojangRank2] = useState('');
    const [dojangRankRecord2, setDojangRankRecord2] = useState('');

    const [dojangRankName3, setDojangRankName3] = useState('');
    const [dojangRankClass3, setDojangRankClass3] = useState('');
    const [dojangRankLevel3, setDojangRankLevel3] = useState('');
    const [dojangRank3, setDojangRank3] = useState('');
    const [dojangRankRecord3, setDojangRankRecord3] = useState('');

    const [dojangRankName4, setDojangRankName4] = useState('');
    const [dojangRankClass4, setDojangRankClass4] = useState('');
    const [dojangRankLevel4, setDojangRankLevel4] = useState('');
    const [dojangRank4, setDojangRank4] = useState('');
    const [dojangRankRecord4, setDojangRankRecord4] = useState('');

    const [dojangRankName5, setDojangRankName5] = useState('');
    const [dojangRankClass5, setDojangRankClass5] = useState('');
    const [dojangRankLevel5, setDojangRankLevel5] = useState('');
    const [dojangRank5, setDojangRank5] = useState('');
    const [dojangRankRecord5, setDojangRankRecord5] = useState('');

    const [dojangRankName6, setDojangRankName6] = useState('');
    const [dojangRankClass6, setDojangRankClass6] = useState('');
    const [dojangRankLevel6, setDojangRankLevel6] = useState('');
    const [dojangRank6, setDojangRank6] = useState('');
    const [dojangRankRecord6, setDojangRankRecord6] = useState('');

    const [dojangRankName7, setDojangRankName7] = useState('');
    const [dojangRankClass7, setDojangRankClass7] = useState('');
    const [dojangRankLevel7, setDojangRankLevel7] = useState('');
    const [dojangRank7, setDojangRank7] = useState('');
    const [dojangRankRecord7, setDojangRankRecord7] = useState('');

    const [dojangRankName8, setDojangRankName8] = useState('');
    const [dojangRankClass8, setDojangRankClass8] = useState('');
    const [dojangRankLevel8, setDojangRankLevel8] = useState('');
    const [dojangRank8, setDojangRank8] = useState('');
    const [dojangRankRecord8, setDojangRankRecord8] = useState('');


    useEffect(() => {
        axios.get('http://localhost:3000/scrapingDojang')
            .then((response) => {
                setImageSrc1(response.data.imageSrc1);
                setUserName1(response.data.userName1);
                setUserLevel1(response.data.userLevel1);
                setUserClass1(response.data.userClass1);
                setUserRank1(response.data.userRank1);
                setUserRecord1(response.data.userRecord1);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingSeed')
            .then((response) => {
                setImageSrc2(response.data.imageSrc2);
                setUserName2(response.data.userName2);
                setUserLevel2(response.data.userLevel2);
                setUserClass2(response.data.userClass2);
                setUserRank2(response.data.userRank2);
                setUserRecord2(response.data.userRecord2);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingAchive')
            .then((response) => {
                setImageSrc3(response.data.imageSrc3);
                setUserName3(response.data.userName3);
                setUserLevel3(response.data.userLevel3);
                setUserClass3(response.data.userClass3);
                setUserRank3(response.data.userRank3);
                setUserRecord3(response.data.userRecord3);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingUnion')
            .then((response) => {
                setImageSrc4(response.data.imageSrc4);
                setUserName4(response.data.userName4);
                setUserLevel4(response.data.userLevel4);
                setUserClass4(response.data.userClass4);
                setUserRank4(response.data.userRank4);
                setUserRecord4(response.data.userRecord4);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingWorldRank')
            .then((response) => {
                setRankName1(response.data.rankName1);
                setRankLevel1(response.data.rankLevel1);
                setRankClass1(response.data.rankClass1);
                setRankGuild1(response.data.rankGuild1);

                setRankName2(response.data.rankName2);
                setRankLevel2(response.data.rankLevel2);
                setRankClass2(response.data.rankClass2);
                setRankGuild2(response.data.rankGuild2);

                setRankName3(response.data.rankName3);
                setRankLevel3(response.data.rankLevel3);
                setRankClass3(response.data.rankClass3);
                setRankGuild3(response.data.rankGuild3);

                setRankName4(response.data.rankName4);
                setRankLevel4(response.data.rankLevel4);
                setRankClass4(response.data.rankClass4);
                setRankGuild4(response.data.rankGuild4);

                setRankName5(response.data.rankName5);
                setRankLevel5(response.data.rankLevel5);
                setRankClass5(response.data.rankClass5);
                setRankGuild5(response.data.rankGuild5);

                setRankName6(response.data.rankName6);
                setRankLevel6(response.data.rankLevel6);
                setRankClass6(response.data.rankClass6);
                setRankGuild6(response.data.rankGuild6);

                setRankName7(response.data.rankName7);
                setRankLevel7(response.data.rankLevel7);
                setRankClass7(response.data.rankClass7);
                setRankGuild7(response.data.rankGuild7);

                setRankName8(response.data.rankName8);
                setRankLevel8(response.data.rankLevel8);
                setRankClass8(response.data.rankClass8);
                setRankGuild8(response.data.rankGuild8);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingRebootWorldRank')
            .then((response) => {
                setRebootRankName1(response.data.rebootRankName1);
                setRebootRankLevel1(response.data.rebootRankLevel1);
                setRebootRankClass1(response.data.rebootRankClass1);
                setRebootRankGuild1(response.data.rebootRankGuild1);

                setRebootRankName2(response.data.rebootRankName2);
                setRebootRankLevel2(response.data.rebootRankLevel2);
                setRebootRankClass2(response.data.rebootRankClass2);
                setRebootRankGuild2(response.data.rebootRankGuild2);

                setRebootRankName3(response.data.rebootRankName3);
                setRebootRankLevel3(response.data.rebootRankLevel3);
                setRebootRankClass3(response.data.rebootRankClass3);
                setRebootRankGuild3(response.data.rebootRankGuild3);

                setRebootRankName4(response.data.rebootRankName4);
                setRebootRankLevel4(response.data.rebootRankLevel4);
                setRebootRankClass4(response.data.rebootRankClass4);
                setRebootRankGuild4(response.data.rebootRankGuild4);

                setRebootRankName5(response.data.rebootRankName5);
                setRebootRankLevel5(response.data.rebootRankLevel5);
                setRebootRankClass5(response.data.rebootRankClass5);
                setRebootRankGuild5(response.data.rebootRankGuild5);

                setRebootRankName6(response.data.rebootRankName6);
                setRebootRankLevel6(response.data.rebootRankLevel6);
                setRebootRankClass6(response.data.rebootRankClass6);
                setRebootRankGuild6(response.data.rebootRankGuild6);

                setRebootRankName7(response.data.rebootRankName7);
                setRebootRankLevel7(response.data.rebootRankLevel7);
                setRebootRankClass7(response.data.rebootRankClass7);
                setRebootRankGuild7(response.data.rebootRankGuild7);

                setRebootRankName8(response.data.rebootRankName8);
                setRebootRankLevel8(response.data.rebootRankLevel8);
                setRebootRankClass8(response.data.rebootRankClass8);
                setRebootRankGuild8(response.data.rebootRankGuild8);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingDojangRank')
            .then((response) => {
                // 1번부터 8번까지의 변수 설정 코드
                setDojangRankName1(response.data.dojangRankName1);
                setDojangRankClass1(response.data.dojangRankClass1);
                setDojangRankLevel1(response.data.dojangRankLevel1);
                setDojangRank1(response.data.dojangRank1);
                setDojangRankRecord1(response.data.dojangRankRecord1);

                setDojangRankName2(response.data.dojangRankName2);
                setDojangRankClass2(response.data.dojangRankClass2);
                setDojangRankLevel2(response.data.dojangRankLevel2);
                setDojangRank2(response.data.dojangRank2);
                setDojangRankRecord2(response.data.dojangRankRecord2);

                setDojangRankName3(response.data.dojangRankName3);
                setDojangRankClass3(response.data.dojangRankClass3);
                setDojangRankLevel3(response.data.dojangRankLevel3);
                setDojangRank3(response.data.dojangRank3);
                setDojangRankRecord3(response.data.dojangRankRecord3);

                setDojangRankName4(response.data.dojangRankName4);
                setDojangRankClass4(response.data.dojangRankClass4);
                setDojangRankLevel4(response.data.dojangRankLevel4);
                setDojangRank4(response.data.dojangRank4);
                setDojangRankRecord4(response.data.dojangRankRecord4);

                setDojangRankName5(response.data.dojangRankName5);
                setDojangRankClass5(response.data.dojangRankClass5);
                setDojangRankLevel5(response.data.dojangRankLevel5);
                setDojangRank5(response.data.dojangRank5);
                setDojangRankRecord5(response.data.dojangRankRecord5);

                setDojangRankName6(response.data.dojangRankName6);
                setDojangRankClass6(response.data.dojangRankClass6);
                setDojangRankLevel6(response.data.dojangRankLevel6);
                setDojangRank6(response.data.dojangRank6);
                setDojangRankRecord6(response.data.dojangRankRecord6);

                setDojangRankName7(response.data.dojangRankName7);
                setDojangRankClass7(response.data.dojangRankClass7);
                setDojangRankLevel7(response.data.dojangRankLevel7);
                setDojangRank7(response.data.dojangRank7);
                setDojangRankRecord7(response.data.dojangRankRecord7);

                setDojangRankName8(response.data.dojangRankName8);
                setDojangRankClass8(response.data.dojangRankClass8);
                setDojangRankLevel8(response.data.dojangRankLevel8);
                setDojangRank8(response.data.dojangRank8);
                setDojangRankRecord8(response.data.dojangRankRecord8);

            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const currentDate = new Date();
    const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
    const currentMonth = monthNames[currentDate.getMonth()];
    const currentDay = currentDate.getDate();

    return(
        <div>
            <div className={"main-contents-container"}>
                <div className={"weakly-view1"}>
                    <div className={"weakly-view-header1"}>
                        <span>이번 주 <b className={"weakly-view-header-text1"}>무릉도장</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>{userName1} {userLevel1} {userClass1}</span>
                    </div>
                    <div>
                        <img src={imageSrc1} alt="무릉도장 1등 이미지"/>
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>{userRank1}</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        <span>{userRecord1}</span>
                    </div>
                    <div>
                        <Button variant="outline-dark" className="view-details-btn1">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view2"}>
                    <div className={"weakly-view-header2"}>
                        <span>이번 주 <b className={"weakly-view-header-text2"}>더시드</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>{userName2} {userLevel2} {userClass2}</span>
                    </div>
                    <div>
                        <img src={imageSrc2} alt="더시드 1등 이미지"/>
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>{userRank2}</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        {userRecord2}
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn2">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view3"}>
                    <div className={"weakly-view-header3"}>
                        <span>이번 주 <b className={"weakly-view-header-text3"}>업적</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>{userName3} {userLevel3} {userClass3}</span>
                    </div>
                    <div>
                        <img src={imageSrc3} alt="업적 1등 이미지"/>
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>{userRank3}</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        <span>{userRecord3}</span>
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn3">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
                <div className={"weakly-view4"}>
                    <div className={"weakly-view-header4"}>
                        <span>이번 주 <b className={"weakly-view-header-text4"}>유니온</b> 1등</span>
                    </div>
                    <div className={"weakly-view-text-small"}>
                        <span>{userName4} {userLevel4} {userClass4}</span>
                    </div>
                    <div>
                        <img src={imageSrc4} alt="유니온 1등 이미지"/>
                    </div>
                    <div className={"weakly-view-text"}>
                        <span>{userRank4}</span>
                    </div>
                    <div className={"weakly-view-text-duration"}>
                        <span>{userRecord4}</span>
                    </div>
                    <div>
                        <Button variant="dark" className="view-details-btn4">
                            <a href="#" className="view-details">상세보기</a>
                        </Button>
                    </div>
                </div>
            </div>

            <div className={"today-container"}>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 일반월드 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{rankName1}</td>
                            <td>{rankLevel1}</td>
                            <td>{rankClass1}</td>
                            <td>{rankGuild1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{rankName2}</td>
                            <td>{rankLevel2}</td>
                            <td>{rankClass2}</td>
                            <td>{rankGuild2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{rankName3}</td>
                            <td>{rankLevel3}</td>
                            <td>{rankClass3}</td>
                            <td>{rankGuild3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{rankName4}</td>
                            <td>{rankLevel4}</td>
                            <td>{rankClass4}</td>
                            <td>{rankGuild4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{rankName5}</td>
                            <td>{rankLevel5}</td>
                            <td>{rankClass5}</td>
                            <td>{rankGuild5}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>{rankName6}</td>
                            <td>{rankLevel6}</td>
                            <td>{rankClass6}</td>
                            <td>{rankGuild6}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>{rankName7}</td>
                            <td>{rankLevel7}</td>
                            <td>{rankClass7}</td>
                            <td>{rankGuild7}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>{rankName8}</td>
                            <td>{rankLevel8}</td>
                            <td>{rankClass8}</td>
                            <td>{rankGuild8}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 리부트월드 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>길드</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{rebootRankName1}</td>
                            <td>{rebootRankLevel1}</td>
                            <td>{rebootRankClass1}</td>
                            <td>{rebootRankGuild1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{rebootRankName2}</td>
                            <td>{rebootRankLevel2}</td>
                            <td>{rebootRankClass2}</td>
                            <td>{rebootRankGuild2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{rebootRankName3}</td>
                            <td>{rebootRankLevel3}</td>
                            <td>{rebootRankClass3}</td>
                            <td>{rebootRankGuild3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{rebootRankName4}</td>
                            <td>{rebootRankLevel4}</td>
                            <td>{rebootRankClass4}</td>
                            <td>{rebootRankGuild4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{rebootRankName5}</td>
                            <td>{rebootRankLevel5}</td>
                            <td>{rebootRankClass5}</td>
                            <td>{rebootRankGuild5}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>{rebootRankName6}</td>
                            <td>{rebootRankLevel6}</td>
                            <td>{rebootRankClass6}</td>
                            <td>{rebootRankGuild6}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>{rebootRankName7}</td>
                            <td>{rebootRankLevel7}</td>
                            <td>{rebootRankClass7}</td>
                            <td>{rebootRankGuild7}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>{rebootRankName8}</td>
                            <td>{rebootRankLevel8}</td>
                            <td>{rebootRankClass8}</td>
                            <td>{rebootRankGuild8}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 무릉도장 랭킹`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>케릭터</th>
                            <th>레벨</th>
                            <th>직업</th>
                            <th>층수</th>
                            <th>기록</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{dojangRankName1}</td>
                            <td>{dojangRankLevel1}</td>
                            <td>{dojangRankClass1}</td>
                            <td>{dojangRank1}</td>
                            <td>{dojangRankRecord1}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{dojangRankName2}</td>
                            <td>{dojangRankLevel2}</td>
                            <td>{dojangRankClass2}</td>
                            <td>{dojangRank2}</td>
                            <td>{dojangRankRecord2}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>{dojangRankName3}</td>
                            <td>{dojangRankLevel3}</td>
                            <td>{dojangRankClass3}</td>
                            <td>{dojangRank3}</td>
                            <td>{dojangRankRecord3}</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>{dojangRankName4}</td>
                            <td>{dojangRankLevel4}</td>
                            <td>{dojangRankClass4}</td>
                            <td>{dojangRank4}</td>
                            <td>{dojangRankRecord4}</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>{dojangRankName5}</td>
                            <td>{dojangRankLevel5}</td>
                            <td>{dojangRankClass5}</td>
                            <td>{dojangRank5}</td>
                            <td>{dojangRankRecord5}</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>{dojangRankName6}</td>
                            <td>{dojangRankLevel6}</td>
                            <td>{dojangRankClass6}</td>
                            <td>{dojangRank6}</td>
                            <td>{dojangRankRecord6}</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>{dojangRankName7}</td>
                            <td>{dojangRankLevel7}</td>
                            <td>{dojangRankClass7}</td>
                            <td>{dojangRank7}</td>
                            <td>{dojangRankRecord7}</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>{dojangRankName8}</td>
                            <td>{dojangRankLevel8}</td>
                            <td>{dojangRankClass8}</td>
                            <td>{dojangRank8}</td>
                            <td>{dojangRankRecord8}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={"today-rank-view"}>
                    <div className={"today-rank-view-header"}>
                        <span>{`${currentMonth} ${currentDay}일 월드별 인구수`}</span>
                    </div>
                    <table className={"today-rank-table"}>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>월드</th>
                            <th>인구수</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>스카니아</td>
                            <td>15.8%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>루나</td>
                            <td>15.7%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>엘리시움</td>
                            <td>13.6%</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>리부트</td>
                            <td>13%</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>크로아</td>
                            <td>12.2%</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>베라</td>
                            <td>8.5%</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>오로라</td>
                            <td>8%</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>리부트2</td>
                            <td>6.5%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            {/*<div>*/}
            {/*    <p> 초보자를 위한 유용한 정보</p>*/}
            {/*</div>*/}
        </div>
    );
}

export default MainContents;