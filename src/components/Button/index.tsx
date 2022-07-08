import './style.scss'

interface IButton {
  onClick: () => void;
  text: string;
}

const Button = (props: IButton) => {
  return <button className='Button' onClick={props.onClick}>{props.text}</button>;
};

export default Button;
