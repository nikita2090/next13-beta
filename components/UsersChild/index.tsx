'use client';

import React, { useState } from 'react';

interface PostsChildProps {
    children: React.ReactNode;
}

export const UsersChild: React.FC<PostsChildProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((c) => c + 1);
    };

    return (
        <section>
            <h3>UsersChild (Client component)</h3>
            <p>Users counter: {count}</p>
            <button onClick={handleClick}>increase</button>
            <br />
            <br />
            {children}
        </section>
    );
};
