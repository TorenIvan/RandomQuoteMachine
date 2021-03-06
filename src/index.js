import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';


class NewQuoteButton extends React.Component{
    render(){
        return(
            <button id="new-quote-button">
                <p>New Quote</p>
            </button>
        );
    }
}

class TumblerButton extends React.Component{
    render(){
        return(
            <button id="tumbler-button">
                <a href="#" className="fa fa-tumblr"></a>
            </button>
        );
    }
}

class TwitterButton extends React.Component{
    render(){
        return(
            <button id="twitter-button">
                <a href="#" className="fa fa-twitter"></a>
            </button>
        );
    }
}

class Quote extends React.Component{
    render(){
        return (
            <>
                <div id="quote">
                    <p>
                        ponaei
                    </p>
                </div>
                <div className="buttons">
                    <TwitterButton/>
                    <TumblerButton/>
                    <NewQuoteButton/>
                </div>
            </>
        );
    }
}

class RQMachine extends React.Component{
    constructor(){
        super();
        //edo diloneis to state
        this.handleClick = this.handleClick.bind(this);     //bind handleClick to "this" class (also you can use arrow functions)
    }

    handleClick(){
        fetch('https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render(){
        return (
            <div className="wrapper">
                <Quote onClick={this.handleClick}/>
            </div>
        );
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