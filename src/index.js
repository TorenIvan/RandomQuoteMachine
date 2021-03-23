import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

function NewQuoteButton(props){
    return(
        <button 
            id = "new-quote"
            onClick = {props.onClick}
            style = {{backgroundColor: props.color}}
        >
            <p>New Quote</p>
        </button>
    );
}

function TumblerButton(props){
    let handleClick = (props) => {
        window.open("https://twitter.com/intent/tweet?text="+props.quote+" By "+props.author);
    }
    return(
        <button 
            id = "quote"
            onClick = {() => handleClick(props)}
            style = {{backgroundColor: props.color}}    
        >
            <a class="fa fa-tumblr"></a>
        </button>
    );
}

function TwitterButton(props){
    let handleClick = (props) => {
        window.open("https://tumblr.com/intent/tweet?text="+props.quote+" By "+props.author);
    }
    return(
        <button 
            id = "quote"
            onClick = {() => handleClick(props)}
            style = {{backgroundColor: props.color}}
        >
            <a class="fa fa-twitter"></a>
        </button>
    );
}


class RQMachine extends React.Component{
    constructor(){
        super();
        this.state = {
            author: '',
            quote:  '',
            color:  '',
        };
        this.handleClick = this.handleClick.bind(this);     //bind handleClick to "this" class (you can also use arrow function)
        this.handleClick();                                 //call the first time it loads first time load
    }

    //get a random quote and pass the method as prop to New Quote 
    handleClick(){
        let randomQuote;
        let randomColor;
        fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
            randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
            randomColor = colors[Math.floor(Math.random() * colors.length)];
            this.setState({
                author: randomQuote.author,
                quote:  randomQuote.quote,
                color: randomColor,
            });
            // console.log(randomQuote);
        })
        .catch(error => console.log(error))
    }

    /* function components, due to only render method */
    render(){
        return (
            <body style={{backgroundColor: this.state.color}}>
                <div id="quote-box" style={{color: this.state.color}}>
                    <blockquote id="quote">
                        <span >
                            {this.state.quote}
                        </span>
                        <em> ~{this.state.author} </em>
                    </blockquote>
                    <div className="buttons">
                        <TwitterButton color={this.state.color} author={this.state.author} quote={this.state.quote}/>                            
                        <TumblerButton color={this.state.color} author={this.state.author} quote={this.state.quote}/>
                        <NewQuoteButton onClick={this.handleClick} color={this.state.color}/>
                    </div>
                </div>
            </body>
        );
    }
}

ReactDOM.render(
    <RQMachine />,
    document.getElementById('root')
);



