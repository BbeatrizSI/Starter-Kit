import '../css/componentes.css';

export const greet = (name) => {
  console.log('Adding H1 tag, in HTML');

  const h1 = document.createElement('h1');
  h1.innerText = `Hi, ${name}`;

  document.body.append(h1);
};
