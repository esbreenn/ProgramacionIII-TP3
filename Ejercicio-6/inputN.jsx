function InputN({ id, text, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <br />
      <input
        type="number"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
      />
    </>
  );
}
