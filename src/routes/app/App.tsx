import { Counter } from '../../components/Counter/Counter';

type Props = {
  message?: string;
};

export default function App({ message = 'Hello World' }: Props) {
  return (
    <>
      <h1>{message}</h1>
      <Counter />
    </>
  );
}
