import React, { Component } from 'react'
import axios from 'axios';
import Card from './Card' ;
import './card.css' ; 

const url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

export default class Deck extends Component {

    constructor(props){
        super(props)
        this.state={ 
         deck_id:"" , 
         cards:[]
        }
        this.getCard = this.getCard.bind(this);
    }

    componentDidMount(){
       
       axios.get(url).then(result => this.setState({
           deck_id: result.data.deck_id
       }));
      
     }

     getCard(){
          axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=1`)
          .then(res =>    this.setState({
              cards :[...this.state.cards,res.data.cards[0].image]
         }));
       
          
     }


    render() {


       
    const draw_cards = this.state.cards.map(card => 
        
   {
        
            const rotation_angle = Math.random() * 90 + 45 ; 
      return  <Card rotation={rotation_angle} img={card} /> }) ; 

        return (
            <div   style={{ position:"relative",width:"100vw",height:"100vh",background:"red"}}>
            <button onClick={this.getCard}>click me</button>
             {draw_cards}
            </div>
        )
    }
}
