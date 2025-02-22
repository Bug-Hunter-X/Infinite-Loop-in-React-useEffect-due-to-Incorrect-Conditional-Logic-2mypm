```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic. The condition is always true
    if (count > 0 || count < 0) {
      console.log('Count is not zero');
    }
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```