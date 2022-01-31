import { useLocation } from 'react-router-dom';

export default function Contact() {
  const queryString = useLocation().search;

  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get('name');

  return (
    <div>
      <h2> Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum minus
        non totam sed nobis id officiis quis dolorem accusantium, tempora fuga
        quas dolores ducimus et nisi veritatis doloribus atque? Atque.
      </p>
    </div>
  );
}
