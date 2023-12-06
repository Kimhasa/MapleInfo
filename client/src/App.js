import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Component/Header';
import SignIn from "./Component/SignIn";
import SignUp from "./Component/SignUp";
import MainContents from "./Component/MainContents";
import MyPage from "./Component/MyPage";
import BossCaculator from "./Component/BossCaculator";
import NoticeBoard from "./Component/NoticeBoard";
import NoticeBoardCreate from "./Component/NoticeBoardCreate";
import NoticesUpdates from "./Component/NoticesUpdates";
import TestPage from "./Component/TestPage";

function App() {
    return (
        <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<MainContents />} />
                    <Route path="/TestPage" element={<TestPage />} />
                    <Route path="/SignIn" element={<SignIn />} />
                    <Route path="/SignUp" element={<SignUp />} />
                    <Route path="/MyPage" element={<MyPage />} />
                    <Route path="/MainContents" element={<MainContents />} />
                    <Route path="/BossCaculator" element={<BossCaculator />} />
                    <Route path="/NoticeBoard" element={<NoticeBoard />} />
                    <Route path="/NoticesUpdates" element={<NoticesUpdates />} />
                    <Route path="/NoticeBoardCreate" element={<NoticeBoardCreate />} />
                    {/* 라우트 경로 설정 추가할 수 있습니다. */}S
                </Routes>
        </Router>
    );
}

export default App;
