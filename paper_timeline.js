const timeline    = document.querySelector('.timeline');
const items       = document.querySelectorAll('.timeline-item');
const prevBtn     = document.getElementById('prevBtn');
const nextBtn     = document.getElementById('nextBtn');
let   currentIdx  = 0;

// Update transform and button states
function updateTimeline() {
  timeline.style.transform = `translateX(-${currentIdx * 100}%)`;
  prevBtn.disabled = currentIdx === 0;
  nextBtn.disabled = currentIdx === items.length - 1;
}

// Advance or rewind
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

// Initialize
updateTimeline();
