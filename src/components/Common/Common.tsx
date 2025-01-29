interface ButtonProps extends HTMLButtonElement {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <button className="">{text}</button>;
}
