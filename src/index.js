import React from "react";
import ReactDOM from "react-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Button } from 'reactstrap';
import "./index.css";

class MessageArea extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputText: " ",
            submittedText:" "
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({
            inputText : e.target.value
        });
    }

    handleSubmit(e) {
        //the defualt is it opening a new page
        e.preventDefault();
        this.setState({
            submittedText: this.state.inputText
        });
        
    }

    render(props){
        return (
            <div>
                <DisplayTask inputText={this.state.inputText}
                    submittedText={this.state.submittedText}
                    onchange={this.handleChange}
                    submit={this.handleSubmit} />              
            </div>
        );
    }
}

class DisplayTask extends React.Component {
    render(){
        return (
            <div>
                <h1>To do list</h1>
                <br/>
                <hr/>
                    <div id="textarea">
                    
                    <p>{this.props.submittedText}</p>
                    </div>
                <hr/>
                <form onSubmit={this.props.submit}>
                    <input type="text" 
                        placeholder="What is your task"
                        value={this.props.inputText}
                        onChange={this.props.onchange} />
                    <button type="submit" >+</button>
                </form>
            </div>
        );
    }

}

ReactDOM.render(
    <MessageArea />,
    document.getElementById("listArea")
);
//NEXT// 
// add functionality that you can submit more than one item,
//ie.a list of submitted things.
//i think i have to append the next submit to the current one