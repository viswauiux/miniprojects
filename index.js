import ReactDOM from 'react-dom/client'

const Index = () =>{
    return(
        <h1>Hello React</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Index/>)