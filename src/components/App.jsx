import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Layout } from "./Layout/Layout.styled";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getError, getIsLoading } from "redux/selectors";
import { fetchContacts } from "redux/Operations";

export const App = () => {

const isLoading = useSelector(getIsLoading);
const error = useSelector(getError);
const dispatch = useDispatch();

useEffect(()=>{
dispatch(fetchContacts());
}, [dispatch] );

  return (
    <Layout>
     <h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      {isLoading && <h3>Loading....</h3>}
      {error && <h3>{error}</h3>}
      <Filter />
      <ContactList />
    </Layout>
  );
};
