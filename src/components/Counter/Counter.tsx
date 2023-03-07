import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [ammount, setAmmount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <input
        type="number"
        name="ammount"
        value={ammount}
        onChange={(e) => setAmmount(parseInt(e.target.value, 10))}
      />
      <button type="button" onClick={() => setCount(ammount)}>
        Set
      </button>
    </div>
  );
}
