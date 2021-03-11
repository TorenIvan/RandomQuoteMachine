import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';


function NewQuoteButton(props){
    return(
        <button 
            id="new-quote"
            onClick={props.onClick}
        >
            <p>New Quote</p>
        </button>
    );
}

function TumblerButton(){
        return(
            <button id="tumblr-quote">
                <a href='https://twitter.com/share'ref='share' data-url='https://twitter.com/'>Tweet</a>
            </button>
        );
}

function TwitterButton(){
    return(
        <button id="tumblr-quote">
            <a href='https://twitter.com/intent/tweet' ref='share' data-url='https://twitter.com/'>Tweet</a>
        </button>
    );
}


class QuoteBox extends React.Component{
    constructor(){
        super();
        this.state = {
            author: '',
            quote: '',
        };
        this.handleClick = this.handleClick.bind(this);     //bind handleClick to "this" class (you can also use arrow function)
        this.handleClick();                                 //call the first time it loads first time load
    }

    //get a random quote and pass the method as prop to New Quote 
    handleClick(){
        let randomQuote;
        fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => response.json())
        .then(data => {
            randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];
            this.setState({
                author: randomQuote.author,
                quote:  randomQuote.quote,
            });
            console.log(randomQuote);
        })
        .catch(error => console.log(error))
    }

    /* function components, due to only render method */
    render(){
        return (
            <div id="quote-box">
                <blockquote id="quote">
                    <span >
                        {this.state.quote}
                    </span>
                    <em> ~{this.state.author} </em>
                </blockquote>
                <div className="buttons">
                    <TwitterButton/>                            
                    <TumblerButton/>
                    <NewQuoteButton onClick={this.handleClick}/>
                </div>
            </div>
        );
    }
}

// whole page component, no need but wth
class RQMachine extends React.Component{
    render(){
        return <QuoteBox/>;
    }
}

ReactDOM.render(
    <RQMachine />,
    document.getElementById('root')
);



/*onClick event handler to a functional component*/

//The event handler is passed as an attribute to an element or component. 
//This attribute receives a function that describes what happens when the user interacts with the element. 

//The onClick{exampleFunction()}    returns the result of exampleFunction   (only one time)
//The onClick{exampleFunction}      calls the function                      (as many times as you call the function)



/*onClick event handler to a class component*/

//Similar to functions

//The onClick{exampleMethod()}    returns the result of exampleMethod   (only one time)
//The onClick{exampleMethod}      calls the Method                      (as many times as you call the function)

/*On the above, what about when you want to call a method/function (with onClick{example}) but you want to pass parameters*/
//Answer:   onClick(() => example(parameter))           //on functions or classes
//          binding in constructor                      //on classes


/* TO-DO's */
//Buttons to tweet it
//On first try quote something