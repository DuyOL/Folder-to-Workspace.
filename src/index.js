import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom

// Tạo component App
function App() {
    return (
        <div>
            <h1 style={{ color: 'green', textAlign: 'center' }}>Xin chào anh em F8!</h1>
            <h2 style={{ color: 'red', textAlign: 'center' }}>Tôi làm được bạn cũng vậy</h2>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

