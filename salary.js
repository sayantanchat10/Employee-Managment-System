const sortDropdown = document.getElementById('sort-dropdown');

sortDropdown.addEventListener('change', sortData);

function sortData() {
  const selectedSortOption = sortDropdown.value;

  // Sort the data based on selected sort option
  if (selectedSortOption === 'low-to-high') {
    data.sort((a, b) => a.salary - b.salary);
  } else if (selectedSortOption === 'high-to-low') {
    data.sort((a, b) => b.salary - a.salary);
  }

  // Clear the table before populating sorted data
  const table = document.getElementById('employee-table');
  table.innerHTML = '';

  // Populate the sorted data on the DOM
  data.forEach(employee => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${employee.id}</td>
      <td>${employee.name}</td>
      <td>${employee.gender}</td>
      <td>${employee.department}</td>
      <td>${employee.salary}</td>
    `;
    table.appendChild(row);
  });
}