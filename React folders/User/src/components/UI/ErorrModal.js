import { ReactDOM } from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm} />;
  };

  const Modal = (props) => {
    return (
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.contet}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Oakey</Button>
        </footer>
      </Card>
    );
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('modal')
      )}
    </>
  );
};

export default ErrorModal;
