import React from 'react';

export function UserInfo() {
    const date = new Date().toLocaleString('ru');
    return (
        <>
            <h4>User Info (Server Component)</h4>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>A lot of text</p>
            <p>{date}</p>
        </>
    );
}
