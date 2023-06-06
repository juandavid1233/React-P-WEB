function Contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1);
  }

  const decrementar = () => {
    setCount(count - 1);
  }

  return (
