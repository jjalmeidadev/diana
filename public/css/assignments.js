document.addEventListener('DOMContentLoaded', function () {
  const dropdownLinks = document.querySelectorAll('.dropdown-content a');
  const assignmentCards = document.querySelectorAll('.assignment-card');

  dropdownLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const subject = link.textContent.trim().toLowerCase();
      assignmentCards.forEach(card => {
        const title = card.querySelector('.assignment-title').textContent.toLowerCase();
        if (title.includes(subject)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Reset filter when clicking outside dropdown or on the filter button
  document.querySelector('.dropbtn').addEventListener('click', function () {
    assignmentCards.forEach(card => {
      card.style.display = '';
    });
  });

  // --- POPUP ---
  const popupOverlay = document.getElementById('assignment-popup');
  const popupTitle = document.getElementById('popup-title');
  const popupStatus = document.getElementById('popup-status');
  const popupDue = document.getElementById('popup-due');
  const popupDesc = document.getElementById('popup-desc');
  const closePopup = document.querySelector('.close-popup');

  // Descrições fictícias para exemplo
  const descriptions = {
    'Geography - Map Project': 'Create a detailed map of your neighborhood, highlighting key landmarks and natural features. Use colors and a legend for clarity.',
    'Art - Modern Art Essay': 'Write a 2-page essay about your favorite modern artist, discussing their style and influence on contemporary art.',
    'Mathematics - Algebra Worksheet': 'Solve all exercises on the provided worksheet. Show all your work for full credit.'
  };

  assignmentCards.forEach(card => {
    card.addEventListener('click', function () {
      const title = card.querySelector('.assignment-title').textContent;
      const status = card.classList.contains('completed') ? 'completed' : card.classList.contains('pending') ? 'pending' : 'late';
      const due = card.querySelector('.assignment-details').textContent;
      popupTitle.textContent = title;
      popupStatus.textContent = status.charAt(0).toUpperCase() + status.slice(1);
      popupStatus.className = 'popup-status ' + status;
      popupDue.textContent = due;
      popupDesc.textContent = descriptions[title] || 'No description available.';
      popupOverlay.style.display = 'flex';
    });
  });

  closePopup.addEventListener('click', function () {
    popupOverlay.style.display = 'none';
  });

  // Fecha popup ao clicar fora
  popupOverlay.addEventListener('click', function (e) {
    if (e.target === popupOverlay) {
      popupOverlay.style.display = 'none';
    }
  });
});
