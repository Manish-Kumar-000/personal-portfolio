const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    toggleBtn.innerHTML = `<i class="bi bi-sun"></i>`;
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
        toggleBtn.innerHTML = `<i class="bi bi-sun"></i>`;
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.innerHTML = `<i class="bi bi-moon"></i>`;
        localStorage.setItem("theme", "dark");
    }
});
// ------------------------------
// EmailJS Initialization
// ------------------------------
emailjs.init("xAfH75a4OfKpCdxZd"); // Your Public Key

// ------------------------------
// CONTACT FORM SEND FUNCTION
// ------------------------------
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill all fields.");
        return;
    }

    const btn = e.target.querySelector("button");
    btn.innerHTML = "Sending...";
    btn.disabled = true;

    emailjs.send("service_khca36v", "template_yoyi1nv", {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        btn.innerHTML = "Sent ✔";
        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
        setTimeout(() => {
            btn.innerHTML = "Send Message";
            btn.disabled = false;
        }, 2000);
    })
    .catch((err) => {
        console.error(err);
        alert("Error sending message!");
        btn.innerHTML = "Send Message";
        btn.disabled = false;
    });


});

// ------------------------------
// RESUME BUTTON FUNCTIONALITY
// ------------------------------

// Resume Path
const resumePath = "assets/resume/Manish_Kumar_Resume.pdf";

// Download Resume
document.getElementById("downloadResume").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Manish_Kumar_Resume.pdf";
    link.click();
});

// View Resume in new tab
document.getElementById("viewResume").addEventListener("click", () => {
    window.open(resumePath, "_blank");
});

/* =============== Certifications JS =============== */
/* ==================== Certifications JS ==================== */
(() => {
  const certs = [
    { png: "static-website.png", title: "Build Your Own Static Website", issued: "September 03, 2024" },
    { png: "responsive-website.png", title: "Build Your Own Responsive Website", issued: "September 10, 2024" },
    { png: "javascript-essentials.png", title: "JavaScript Essentials", issued: "October 04, 2025" },
    { png: "developer-foundations.png", title: "Developer Foundations", issued: "September 28, 2025" },
    { png: "introduction-databases.png", title: "Introduction to Databases", issued: "January 26, 2025" },
    { png: "dynamic-webapp.png", title: "Build Your Own Dynamic Web Application", issued: "October 07, 2025" },
    { png: "flexbox-design.png", title: "Responsive Web Design using Flexbox", issued: "October 07, 2025" },
    { png: "apsche-internship.png", title: "APSCHE Cloud Virtual Internship", issued: "2024" }
  ];

  const basePath = "assets/Certificates/";
  const grid = document.getElementById("certsGrid");

  // =================== RENDER CARDS ===================
  certs.forEach((c, i) => {
    const card = document.createElement("article");
    card.className = "certs-card";

    card.innerHTML = `
      <div class="certs-thumb-wrap" data-view="${i}">
        <img src="${basePath + c.png}" alt="${c.title}">
        <div class="certs-thumb-badge">Preview</div>
      </div>

      <h3 class="certs-title">${c.title}</h3>
      <p class="certs-sub">Issued: ${c.issued}</p>
    `;
    grid.appendChild(card);
  });

  // =================== MODAL ELEMENTS ===================
  const modal = document.getElementById("certsModal");
  const modalImg = document.getElementById("certsModalImg");
  const modalDownload = document.getElementById("certModalDownload");
  const modalOpenImage = document.getElementById("certModalOpenPdf");
  const modalClose = document.getElementById("certsModalClose");
  const modalBackdrop = document.querySelector(".certs-modal-backdrop");

  // =================== OPEN MODAL ===================
  function openModal(index) {
    const c = certs[index];
    const imgPath = basePath + c.png;

    modalImg.src = imgPath;

    // Download image
    modalDownload.href = imgPath;
    modalDownload.download = c.title.replace(/\s+/g, "-") + ".png";

    // Open in new tab
    modalOpenImage.onclick = () => window.open(imgPath, "_blank");

    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  // =================== CLOSE MODAL ===================
  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }

  // =================== CLICK TO OPEN MODAL ===================
  document.addEventListener("click", e => {
    const wrap = e.target.closest(".certs-thumb-wrap");
    if (!wrap) return;
    openModal(wrap.dataset.view);
  });

  // =================== CLOSE EVENTS ===================
  modalClose.onclick = closeModal;
  modalBackdrop.onclick = closeModal;

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeModal();
  });
})();


