const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('hidden');
      entry.target.classList.add('appear');
    }
  });
});

const blockStrings = document.querySelectorAll('.block__string');

blockStrings.forEach((item) => {
  observer.observe(item);
})