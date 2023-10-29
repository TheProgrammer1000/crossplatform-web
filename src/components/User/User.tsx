import styles from './User.module.css';
import { useDeleteUserMutation } from '../../store/api/usersApi';

export const User = ({ props }) => {
  //console.log('props: ', props);
  const [deleteUser] = useDeleteUserMutation();

  return (
    <div className={styles.container}>
      <li>
        {props.firstName} {props.lastName}
      </li>
      <button
        onClick={() => {
          console.log('props.id', props.id);
          deleteUser(props.id).then((response) => {
            // Handle success, update the UI, show a confirmation message, etc.
            console.log('response: ', response);
          });
        }}
      >
        Delete
      </button>
    </div>
  );
};
