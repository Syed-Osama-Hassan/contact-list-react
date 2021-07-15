import React from "react";
import PropTypes from "prop-types";

class ContactList extends React.Component {
  render() {
    return (
      <ol>
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{
                background: `url(${contact.avatarURL})`,
              }}
            />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
                
              </div>
           <div><button onClick={() => this.props.onDeleteContact(contact)} className="contact-remove">Remove</button></div>
          </li>
        ))}
      </ol>
    );
  }
}


export default ContactList;
