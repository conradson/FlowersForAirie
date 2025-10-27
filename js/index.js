const title = document.querySelector('.title')
const text = `Happy 2nd month, Airie.`.split('')

// Create container for better responsive layout
title.style.display = 'flex'
title.style.flexWrap = 'wrap'
title.style.justifyContent = 'center'
title.style.gap = '0.8rem'


for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>`
  } else {
    title.innerHTML += `<span style='width: 1rem'></span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});
// ===== Tambahan: munculkan note di bawah tulisan =====
const message = document.querySelector('.message');
message.textContent = " Today, 29/10/2025 — exactly two months since we first met on 29/8/2025. Today, I wanna give you something simple yet meaningful: eight daisy flowers, the flower you adore. Thank you for always being my peace, my laughter, and my favorite person. Every day with you feels softer, kinder, and warmer — like a little light that never fades.";
setTimeout(() => {
  message.style.opacity = '1';
  message.style.transform = 'translateY(0)';
}, 3000); // muncul setelah ±3 detik