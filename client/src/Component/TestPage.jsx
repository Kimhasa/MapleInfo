import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestPage = () => {
    const [imageSrc, setImageSrc] = useState('');
    const [text, setText] = useState('');
    const [text2, setText2] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/scrapingDojang')
            .then((response) => {
                setImageSrc(response.data.imageSrc);
                setText(response.data.text);
                setText2(response.data.text2);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            {/* 이미지와 텍스트 표시 */}
            <p>테스트 페이지입니다</p>
            {imageSrc && <img src={imageSrc} alt="MapleStory Character" />}
            <p>{text}</p>
            <p>{text2}</p>
        </div>
    );
};

export default TestPage;
