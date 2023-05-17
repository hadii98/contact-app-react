import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetails from "./components/ContactDetails";
import ContactDelete from "./components/ContactDelete";
import EditContact from "./components/EditContact";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route
              path="/contact-app-react/add"
              exact
              element={<AddContact />}
            />
            <Route
              path="/contact-app-react/contacts/:id"
              exact
              element={<EditContact />}
            />
            <Route path="/contact-app-react" exact element={<ContactList />} />
            <Route
              path="/contact-app-react/contact/:id"
              exact
              component={ContactDetails}
            />
            <Route
              path="/contact-app-react/delete"
              exact
              element={<ContactDelete />}
            />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
