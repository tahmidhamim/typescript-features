import React, { useState } from 'react';

function ColorPicker1() {
    const [colors, setColors] = useState<string[]>([]);

    const handleClick = () => {
        setColors([...colors, 'red']);
    };

    return <button onClick={handleClick}>Click</button>;
}