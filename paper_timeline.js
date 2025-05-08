const timeline    = document.querySelector('.timeline');
const items       = document.querySelectorAll('.timeline-item');
let   currentIdx  = 0;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// only wire up nav if both buttons are present
if (prevBtn && nextBtn) {
  function updateTimeline() {
    timeline.style.transform = `translateX(-${currentIdx * 100}%)`;
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx === items.length - 1;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIdx < items.length - 1) {
      currentIdx++;
      updateTimeline();
    }
  });
  prevBtn.addEventListener('click', () => {
    if (currentIdx > 0) {
      currentIdx--;
      updateTimeline();
    }
  });
}


document.querySelectorAll('.gradcam-cell').forEach(cell => {
  cell.addEventListener('mousemove', e => {
    const rect = cell.getBoundingClientRect();
    const x = e.clientX - rect.left + 'px';
    const y = e.clientY - rect.top  + 'px';
    cell.style.setProperty('--mouse-x', x);
    cell.style.setProperty('--mouse-y', y);
  });

  cell.addEventListener('mouseleave', () => {
    // optional: hide mask when cursor leaves
    cell.style.setProperty('--mouse-x', '50%');
    cell.style.setProperty('--mouse-y', '50%');
  });
});



// Initialize
updateTimeline();
