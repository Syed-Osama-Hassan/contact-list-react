import React from 'react';
import './App.css';
import ContactList from "./ContactList"
import avatar from "./images/default-avatar.png"



class App extends React.Component {

  state= {
    contacts: [
      {
        id: "John",
        name: "John Doe",
        email: "John@email.com",
        avatarURL:` ${avatar}`
      },
      {
        id: "Hassan",
        name: "Hassan Raza",
        email: "hassan@email.com",
        avatarURL:` ${avatar}`
      },
      {
        id: "Junaid",
        name: "Junaid Imdad",
        email: "junaid@email.com",
        avatarURL:` ${avatar}`
      }
    ]
  }
  removeContact = (contact) => {
    this.setState( (state) => (
      {
        contacts: state.contacts.filter( (c) => c.id !== contact.id)
      }
    ))
  }
  render()
  {   
    return (
      <div className="App">
       <ContactList onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
