import React, { useEffect, useState } from "react";
import Header from "./componets/Header";
import AddContact from "./componets/AddContact";
import ContactList from "./componets/ContactList";
import { uuid } from "uuidv4";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ContactDetails from "./componets/ContactDetails";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContact(newContactList);
  };
  useEffect(() => {
    const retrieveLocalStorage = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveLocalStorage) setContact(retrieveLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContact}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          /> 
              <Route
              path="/contact/:id"
              component={ContactDetails }
          /> 
        </Switch>
      </Router>

    </div>
  );
}
export default App;
