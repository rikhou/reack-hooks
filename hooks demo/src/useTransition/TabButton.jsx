export default function TabButton({ children, isActive, onClick }) {
  if (isActive) {
    return <button disabled>{children}</button>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      {children}
    </button>
  );
}
