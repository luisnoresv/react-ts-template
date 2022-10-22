type Props = {
  message?: string;
};

export default function App({ message = 'Hello World' }: Props) {
  return <h1>{message}</h1>;
}
