import { BsTelephone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.contactButton}>
        <div>
          <p className={css.contactItem}>
            <IoPersonOutline size={20} />
            {name}
          </p>
          <p className={css.contactItem}>
            <BsTelephone size={20} />
            {number}
          </p>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  );
};

export default Contact;
