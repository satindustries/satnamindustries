// Smooth scroll to sections
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
  navList.classList.toggle('active');
});

  // Function to sort table columns
  function sortTable(columnIndex) {
    const table = document.getElementById("machineTable");
    const rows = Array.from(table.rows).slice(1); // Get all rows except the header
    let ascending = true; // Default sort order is ascending

    // Check the current sorting direction
    if (table.getAttribute("data-sort-column") == columnIndex) {
        ascending = table.getAttribute("data-sort-direction") !== "asc";
    }

    // Sort rows based on the clicked column
    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim().toLowerCase();
        const cellB = b.cells[columnIndex].textContent.trim().toLowerCase();

        if (!isNaN(cellA) && !isNaN(cellB)) {
            // Compare numbers
            return ascending ? cellA - cellB : cellB - cellA;
        } else {
            // Compare strings
            return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
        }
    });

    // Rebuild the table with sorted rows
    const tbody = table.tBodies[0];
    tbody.innerHTML = "";
    rows.forEach(row => tbody.appendChild(row));

    // Update table's sort metadata
    table.setAttribute("data-sort-column", columnIndex);
    table.setAttribute("data-sort-direction", ascending ? "asc" : "desc");
}

// footer
// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Copy email to clipboard
document.getElementById('copy-email').addEventListener('click', () => {
    const email = document.getElementById('email-link').textContent;
    navigator.clipboard.writeText(email)
      .then(() => {
        alert('Email copied to clipboard!');
      })
      .catch(err => {
        alert('Failed to copy email. Please try again.');
        console.error(err);
      });
  });

//   net worth

document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('net-worth-counter');
    const targetValue = 240000000; // 24 Crores in Rupees
    const duration = 3000; // Total animation duration in milliseconds
    const increment = Math.ceil(targetValue / (duration / 10)); // Adjust increment speed

    let currentValue = 0;

    const updateCounter = () => {
        currentValue += increment;
        if (currentValue > targetValue) currentValue = targetValue;

        // Format as ₹X Crore
        counterElement.textContent = `₹${(currentValue / 10000000).toFixed(1)} Crore`;

        if (currentValue < targetValue) {
            setTimeout(updateCounter, 10); // Repeat every 10ms
        }
    };

    updateCounter();
});

fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data));  // Console mein data print hoga




//   path code

// Original path
let path = "C:\\Users\\Srabani\\OneDrive\\文档\\GitHub\\satnamindusties";

// Replace 'Srabani' with 'Satnam'
let updatedPath = path.replace("Srabani", "Satnam");

// Output the updated path
console.log(updatedPath);
