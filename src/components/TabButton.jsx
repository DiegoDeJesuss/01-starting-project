export default function TabButton({ children }) {

function handleClick() {
    console.log(`Tab button clicked: ${children}`);
}

  return (
    <li><button onClick={handleClick}>{children}</button></li>
  );
}