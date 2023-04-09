import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/Operations'
import { Button, ListItem } from "./ContactsItem.styled";

export const ContactsItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <p> {name}:  {phone}</p>
    <Button type="button" onClick={() => dispatch(deleteContact(id)) }>
    Delete</Button>
</ListItem>
  );
};
