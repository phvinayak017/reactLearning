import React, { Component } from 'react';
import './App.css'

class memeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
          topText: "",
          bottomText :"",
          memeImages : "http://i.imgflip.com/1bij.jpg",
          allMemeImages : []

        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response =>{
            const {memes} = response.data
            this.setState({
                allMemeImages : memes
            })
        })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }
    
    handleSubmit(event){
        event.preventDefault()        
        const randomNo = Math.floor(Math.random() * this.state.allMemeImages.length)
        const randomImage = this.state.allMemeImages[randomNo].url
        this.setState({
           memeImages : randomImage
        })
       
    }

    render() {  
        return (
            <div>
               <form onSubmit = {this.handleSubmit.bind(this)}>
                    <label>                   
                        <input type="text" name="topText" value = {this.state.topText}  placeholder = "Top Text" onChange = {this.handleChange.bind(this)}/>
                    </label>
    
                    <label>
                        <input type="text" name="bottomText" value = {this.state.bottomText} placeholder = "Bottom Text"  onChange = {this.handleChange.bind(this)}/>
                    </label>
                    <button className = "button" >Generate</button>
                    
               </form>

                <div className = "meme">
                    <img src={this.state.memeImages} alt="memImage" className = "memeImage"/>                   
                    <h2 className = "top">{this.state.topText}</h2>
                    <h2 className = "bottom">{this.state.bottomText}</h2>
                    
                </div>


            </div>
        );
    }
}

export default memeGenerator;
    

