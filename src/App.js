import React, { useState } from 'react';

function App() {
    const [jsonData, setJsonData] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [filter, setFilter] = useState([]);

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://bajaj-health-s7jw.vercel.app//bfhl', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(JSON.parse(jsonData))
            });
            const data = await response.json();
            setResponseData(data);
        } catch (error) {
            alert('Invalid JSON or API error');
        }
    };

    return (
        <div>
            <h1>BFHL Challenge</h1>
            <textarea
                value={jsonData}
                onChange={(e) => setJsonData(e.target.value)}
                placeholder="Enter JSON data"
            />
            <button onClick={handleSubmit}>Submit</button>
            {responseData && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(responseData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;


