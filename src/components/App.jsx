import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import './App.css';
export const App = () => {
  return (
    <section className="contact-form">
      <ContactForm />
      <h2 className="contact">Contacts</h2>
      <Filter />
      <ContactList />
    </section>
  );
};
export default App;
