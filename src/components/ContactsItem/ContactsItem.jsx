import { useDispatch } from "react-redux";
import { deleteContact } from "redux/ContactSlice";
import { Button, ListItem } from "./ContactsItem.styled";

export const ContactsItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <p> {name}:  {number}</p>
    <Button type="button" onClick={() => dispatch(deleteContact(id)) }>
    Delete</Button>
</ListItem>
  );
};
