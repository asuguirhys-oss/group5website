const lessons = [
    { title: "Boolean Operators", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40.png", desc: "Learn how to use Boolean operators effectively.", link: "boolean-operators.html" },
    { title: "Web Design Principles", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40%20(6).png", desc: "Discover different what it takes to make your website perfect!", link: "#" },
    { title: "Online Tools", img: "https://file.garden/Z6dDZnlsF39IcGo1/6.png", desc: "Understand different productivity tools easily!.", link: "#" },
    { title: "Netiquette and Guidelines", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40%20(3).png", desc: "Explore Netiquette Guidelines.", link: "#" },
    { title: "Web Evolution", img: "https://file.garden/Z6dDZnlsF39IcGo1/8.png", desc: "Wonder how web evolve? What are the fundamentals before? Click me.", link: "" }
  ];
  
  const tests = [
    { title: "Boolean Operators", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40%20(1).png", desc: "Test your Boolean search skills.", link: "boolean-operators-test.html" },
    { title: "Web Design Principles", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40%20(7).png", desc: "Can you ace this cookie quiz?", link: "web-design-test.html" },
    { title: "Online Tools", img: "https://file.garden/Z6dDZnlsF39IcGo1/7.png", desc: "Show off your decoration skills.", link: "online-tools-test.html" },
    { title: "Netiquette and Guidelines", img: "https://file.garden/Z6dDZnlsF39IcGo1/KABANATA%2039-40%20(4).png", desc: "Prove your skills in web structure and style.", link: "netiquette-guidelines-test.html" },
    { title: "Web Evolution", img: "https://file.garden/Z6dDZnlsF39IcGo1/8.png", desc: "Challenge your coding logic abilities.", link: "web-evo-test.html" }
  ];
  
  function showSection(section) {
    const content = document.getElementById('content');
    content.innerHTML = '';
    let data = section === 'lessons' ? lessons : tests;
  
    data.forEach(item => {
      let backText = '';
      if (section === 'lessons') {
        switch (item.title) {
          case "Boolean Operators":
            backText = "Logical words (like AND, OR, NOT) used in searching and programming to combine or limit results.";
            break;
          case "Web Design Principles":
            backText = "Guidelines for creating effective, user-friendly, and visually appealing websites, focusing on layout, color, typography, and usability.";
            break;
          case "Online Tools":
            backText = "Software or applications accessible via the internet to perform tasks such as design, collaboration, or data analysis.";
            break;
          case "Netiquette and Guidelines":
            backText = "Rules and good manners for respectful and effective online communication.";
            break;
          case "Web Evolution":
            backText = "The development of the internet from static Web 1.0 pages to interactive Web 2.0 platforms and immersive Web 3.0 experiences.";
            break;
          default:
            backText = "Start learning this lesson!";
        }
      } else {
        switch (item.title) {
          case "Boolean Operators":
            backText = "Test your knowledge of Boolean logic.";
            break;
          case "Web Design Principles":
            backText = "Can you design the perfect web page?";
            break;
          case "Online Tools":
            backText = "Show what you know about dev tools.";
            break;
          case "Netiquette and Guidelines":
            backText = "Time to test your digital manners.";
            break;
          case "Web Evolution":
            backText = "How well do you know web history?";
            break;
          default:
            backText = "Ready for the quiz?";
        }
      }
  
      let certButton = '';
      if (section === 'tests') {
        certButton = `<button style="margin-top: 10px;" onclick="showCertificateWithScore(
          localStorage.getItem('userName') || 'Cookie Champ', 
          '${item.title.replace(/'/g, "\\'")}', 
          localStorage.getItem('score-${item.title.replace(/'/g, "\\'")}') || '0/10'
        )">Get Certificate</button>`;
      }
  
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
          <div class="card-back">
            <h3>${item.title}</h3>
            <p>${backText}</p>
            <button onclick="window.location.href='${item.link}'">Open</button>
            ${certButton}
          </div>
        </div>
      `;
      content.appendChild(card);
    });
  }
  
  // Show lessons by default
  showSection('lessons');
  
  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
  }
  
  function saveAvatar(avatar) {
    localStorage.setItem("avatar", avatar);
    alert("Avatar saved successfully.");
  }
  
  // Certificate modal handlers
  const certModal = document.getElementById('certificateModal');
  const closeCertBtn = document.getElementById('closeCertBtn');
  closeCertBtn.addEventListener('click', () => {
    certModal.style.display = 'none';
  });
  
  // Close modal if click outside content
  window.onclick = function(event) {
    if (event.target === certModal) {
      certModal.style.display = "none";
    }
  };
  
  // Show certificate with score
  function showCertificateWithScore(userName, courseName, score) {
    document.getElementById('certName').textContent = userName;
    document.getElementById('certCourse').textContent = courseName;
    document.getElementById('certScore').textContent = `Score: ${score}`;
    document.getElementById('certDate').textContent = new Date().toLocaleDateString();
    certModal.style.display = 'block';
  }
  
  // Download certificate as image
  const downloadBtn = document.getElementById('downloadCertBtn');
  downloadBtn.addEventListener('click', () => {
    const certContent = document.querySelector('.modal-content.certificate');
    html2canvas(certContent).then(canvas => {
      const link = document.createElement('a');
      link.download = 'certificate.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  });
  
  // Set welcome name on page load
  document.addEventListener('DOMContentLoaded', () => {
    const welcomeName = document.getElementById('welcomeName');
    const storedName = localStorage.getItem('userName');
  
    if (storedName && storedName.trim() !== '') {
      welcomeName.textContent = storedName;
    } else {
      welcomeName.textContent = 'Guest';
    }
  });
  