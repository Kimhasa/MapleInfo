import React, { useState } from 'react';
import '../css/NoticeBoard.css'
import MdEditor from '@uiw/react-md-editor';
import Button from "react-bootstrap/Button";

function NoticeBoardCreate() {
    const [content, setContent] = useState('');

    // Markdown 에디터에서 내용이 변경될 때 실행되는 함수
    const handleEditorChange = (value) => {
        setContent(value || '');
    };
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const [user, setUser] = useState('');

    const handleTitle = (e) => setTitle(e.target.value);
    const handleContents = (e) => setContents(e.target.value);
    const writing = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        fetch('http://localhost:3000/writing', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                contents: contents,
                sessionID: localStorage.getItem('sessionID')
            })
        })
            .then(response => response.json())
            .then(result => {
                // 서버로부터 받은 응답을 확인하고, 성공적으로 전송되었을 때 알림 창을 띄웁니다.
                if (result.message === '데이터가 성공적으로 전송되었습니다.') {
                    alert('게시글이 작성되었습니다.');
                    // localStorage.setItem('sessionID', result.sessionID);
                    window.location.href = '/MainContents';
                } else {
                    alert('게시글 작성이 실패했습니다. 다시 시도해주세요.');
                }
            })
            .catch(error => console.error('에러 발생: ', error));
    };
    return (
        <div className={"board-container"}>
            <div>
                <input
                    type={"text"}
                    placeholder={"제목을 입력해 주세요"}
                    style={{width:"500px"}}
                />
            </div>
            <div className={"board-view"}>
                <MdEditor
                    value={content}
                    onChange={handleEditorChange}
                    height={600}
                    textareaProps={{
                        placeholder: "타인을 비방하거나 분쟁을 일으키는 게시글은 제재를 받을 수 있습니다.."
                    }}
                />
            </div>
            <div>
                <Button style={{margin:"5px"}} variant="dark" >
                    <a href="/NoticeBoardCreate" className={"board-create-btn"}>글작성</a>
                </Button>
                <Button style={{margin:"5px"}} variant="dark" >
                    <a href="/NoticeBoard" className={"board-create-btn"}>글목록</a>
                </Button>
            </div>
        </div>
    );
}

export default NoticeBoardCreate;
