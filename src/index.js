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
            idNumber: 0 //going to be used for giving the li's unique Id's
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
            idNumber: this.state.idNumber + 1
        });

        //console.log(this.state.idNumber);

        let submittedText = this.state.inputText;
        let idNumber = this.state.idNumber;

        //convert idNumber to a string
        let idNumberString = idNumber.toString();
        //console.log(idNumberString);

        //creating li's with specific ids
        //let li = document.createElement("li");
        //li.innerHTML = submittedText;
        //li.setAttribute("id", idNumberString);

        //creating p with specific ids
        let p = document.createElement("p");
        p.innerHTML = submittedText;
        p.setAttribute("id", idNumberString);
        
        
        //appending li to div
        //document.getElementById("textArea").appendChild(li);

        //adding li to the unordered list
        //document.getElementById("myList").appendChild(li);

        //adding p to the div id="textArea"
        document.getElementById("textArea").appendChild(p);

        //remove all li tags
        /*
        document.querySelector("li").addEventListener("click", () => {
            //console.log("clicked");
            let parent = document.getElementById("textArea");
            let child = document.querySelector("li");
            
            parent.removeChild(child);
        });
        */
        
        //remove specific li tags
        
        //*still not working at 100% *//
        /*
        document.getElementById("0").addEventListener("click", () => {
            //parent = document.getElementById("textArea");
            let child = document.getElementById("0");

            child.parentNode.removeChild(child);
            //console.log(child.parentNode.removeChild(child));
        });
        */
        document.getElementById("textArea").addEventListener("click",(e) => {
           //console.log(e.target);
           
           //if a paragraph element is clicked ,that element will be removed
           if(e.target === p) {

                let child = document.getElementById(idNumberString);
                child.innerHTML = "";
               //console.log("removed");
            //console.log("p was removed"); 
            
            
            
            //let parent = document.getElementById("textArea");
            //parent.removeChild(child);
            
            
            
            //let textNode = document.createTextNode(".");
            //parent.appendChild(textNode);
            
           /* this.setState({
                   idNumber: this.state.idNumber - 1
               });
            */

           } else {
               //console.log("not removed");
           }
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
                    <div id="textArea">
                    
                    <ul id="myList"></ul>
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
// Add buttons at the end of the list item,and add functionality 
//so that it asks "are you sure you wanna exit
//progress half done
