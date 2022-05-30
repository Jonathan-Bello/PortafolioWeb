const Button = (props: IButton) => {
  return <button className={props.btnType}>{props.text}</button>;
};

export default Button;

interface IButton {
  text: string;
  btnType: string;
}
