function navigateTo(pageId) {
  // Hapus kelas aktif dari semua slide
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));

  // Tambahkan kelas aktif ke slide yang dipilih
  const targetSlide = document.getElementById(pageId);
  if (targetSlide) {
    targetSlide.classList.add('active');
  }
}
