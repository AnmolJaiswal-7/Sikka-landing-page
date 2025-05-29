document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accrodion');

    accordions.forEach(acc => {
      const title = acc.querySelector('.accrodion-title');
      const content = acc.querySelector('.accrodion-content');

      if (acc.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }

      title.addEventListener('click', () => {
        const isActive = acc.classList.contains('active');

        // Collapse all
        accordions.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.accrodion-content').style.maxHeight = null;
        });

        // Expand if not already active
        if (!isActive) {
          acc.classList.add('active');
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });

  // custom cursor
document.addEventListener("DOMContentLoaded", function () {
    const customCursor = document.querySelector(".custom-cursor");

    if (customCursor) {
      const cursor = document.querySelector(".custom-cursor__cursor");
      const cursorInner = document.querySelector(".custom-cursor__cursor-two");
      const links = document.querySelectorAll("a");

      document.addEventListener("mousemove", (e) => {
        const { clientX: x, clientY: y } = e;

        // Move outer cursor
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;

        // Move inner cursor
        cursorInner.style.left = x + "px";
        cursorInner.style.top = y + "px";
      });

      document.addEventListener("mousedown", () => {
        cursor.classList.add("click");
        cursorInner.classList.add("custom-cursor__innerhover");
      });

      document.addEventListener("mouseup", () => {
        cursor.classList.remove("click");
        cursorInner.classList.remove("custom-cursor__innerhover");
      });

      links.forEach((link) => {
        link.addEventListener("mouseenter", () => {
          cursor.classList.add("custom-cursor__hover");
        });

        link.addEventListener("mouseleave", () => {
          cursor.classList.remove("custom-cursor__hover");
        });
      });
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const lightbox = document.getElementById("swiperLightbox");
    const lightboxImage = document.querySelector(".swiper-lightbox-image");
    const lightboxClose = document.querySelector(".swiper-lightbox-close");
    const lightboxPrev = document.querySelector(".swiper-lightbox-prev");
    const lightboxNext = document.querySelector(".swiper-lightbox-next");
    const lightboxCounter = document.querySelector(".swiper-lightbox-counter");
  
    const swiperSlides = document.querySelectorAll(".swiper-slide-1 img");
    let currentIndex = 0;
  
    swiperSlides.forEach((img, index) => {
      img.addEventListener("click", () => {
        currentIndex = index;
        updateLightbox();
        lightbox.style.display = "flex";
      });
    });
  
    function updateLightbox() {
      lightboxImage.src = swiperSlides[currentIndex].src;
      lightboxCounter.textContent = `${currentIndex + 1} of ${swiperSlides.length}`;
    }
  
    lightboxClose.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  
    lightboxPrev.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + swiperSlides.length) % swiperSlides.length;
      updateLightbox();
    });
  
    lightboxNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % swiperSlides.length;
      updateLightbox();
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") lightbox.style.display = "none";
      if (e.key === "ArrowRight") lightboxNext.click();
      if (e.key === "ArrowLeft") lightboxPrev.click();
    });
  });
  