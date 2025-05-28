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
  

  // swiper
  document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.thm-swiper__slider');
  
    swiperContainers.forEach(container => {
      let options = {};
  
      try {
        options = JSON.parse(container.getAttribute('data-swiper-options')) || {};
      } catch (e) {
        console.error('Failed to parse Swiper options:', e);
      }
  
      // Enhance settings to match smooth continuous scroll
      const finalOptions = Object.assign(
        {
          loop: true,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
          },
          speed: 3000,
          slidesPerView: 'auto',
          spaceBetween: 100,
          grabCursor: true,
          freeMode: {
            enabled: true,
            momentum: false,
          },
        },
        options
      );
  
      new Swiper(container, finalOptions);
    });
  });
  