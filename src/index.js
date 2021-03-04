import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';


class Footer extends React.Component{

}

class Quote extends React.Component{

}

class Wrapper extends React.Component{
    render() {
        return (
            <body className="page">

            </body>
        );
    }
}

class Machine extends React.Component{
    render(){
        return <wrapper/>
    }
}

ReactDOM.render(
    <Machine />,
    document.getElementById('root')
);