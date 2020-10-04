import React, {Component} from 'react';

import Table from './Table';
import Form from './Form';

//import the delete Component
import Deleted from './Deleted'

class App extends Component{
    //Try to use, this Hooks, useState and useEffect, they are good, and bring new features
    state = {
        characters: [],
        recentlyDeleted: []
    }

    //removing characters
    removerCharacter = (index) => {

        const {characters} = this.state;

        const newCharacter = characters.filter((character, i) => {
            if ( index === i ) this.setState({recentlyDeleted:recentlyDeleted.push(character)});
            else return character;
        });

        this.setState({characters:newCharacter})
    }
    
    //adding characters
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
        //set time to delete from recent deleted
        setTimeout(() =>{
            this.state.recentlyDeleted.pop();
        },10000);
    }

    render(){
        return(
            <div className="container">
                <h1>App TodoList</h1>
                <Table characterData={this.state.characters} removerCharacter={this.removerCharacter} />
                <Deleted deleted={this.state.recentlyDeleted} /> {/* the deleted componet and his props*/}
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;