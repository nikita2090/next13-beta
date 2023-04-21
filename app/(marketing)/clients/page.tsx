'use client';

import { useState } from 'react';

export default function Clients() {
    const [err, setErr] = useState(false);
    const handleThrowError = () => {
        setErr(true);
    };

    return !err ? (
        <div>
            <h2>Clients</h2>

            <button onClick={handleThrowError}>Throw error</button>
        </div>
    ) : (
        {}
    );
}
