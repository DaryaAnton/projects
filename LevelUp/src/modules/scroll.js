const scroll = () => {
  const scrollBtn = document.querySelectorAll('.btn');
  const form = document.getElementById('form')

  scrollBtn.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      form.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

export default scroll;