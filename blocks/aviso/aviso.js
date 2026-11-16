export default function decorate(block) {
  const [titleRow, ...bodyRows] = [...block.children];
  if (titleRow) titleRow.classList.add('aviso-title');
  bodyRows.forEach((row) => row.classList.add('aviso-body'));

  block.setAttribute('role', 'note');

  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'aviso-close';
  close.setAttribute('aria-label', 'Cerrar aviso');
  close.textContent = '×';
  close.addEventListener('click', () => {
    block.hidden = true;
  });
  block.append(close);
}
