document.addEventListener('DOMContentLoaded', function () {
  const departmentDropdown = document.getElementById('department-dropdown');
  const genderDropdown = document.getElementById('gender-dropdown');
  const tableBody = document.querySelector('#employee-table tbody');

  departmentDropdown.addEventListener('change', filterData);
  genderDropdown.addEventListener('change', filterData);

  function filterData() {
    const selectedDepartment = departmentDropdown.value;
    const selectedGender = genderDropdown.value;

    // Sample data for testing
    const data = [
      { id: 1, name: 'Benson yoell', gender: 'female', department: 'operation', salary: 25000 },
      { id: 2, name: 'Lorettalorna Rosenfarb', gender: 'female', department: 'operation', salary: 25000 },
      { id: 3, name: 'Claudia Vasyukhin', gender: 'female', department: 'hr', salary: 25000 },
      { id: 4, name: 'Brian Wildblood', gender: 'female', department: 'finance', salary: 27000 },
      { id: 5, name: 'Elli Godlip', gender: 'female', department: 'hr', salary: 27000 },
      { id: 6, name: 'Rina Nase', gender: 'female', department: 'enginnering', salary: 27000 },
      { id: 7, name: 'Tobi Pizer', gender: 'female', department: 'operations', salary: 30000 },
      { id: 8, name: 'Llyssa Staning', gender: 'female', department: 'operations', salary: 35000 },
      { id: 9, name: 'Monty Neers', gender: 'female', department: 'enginnering', salary: 35000 },
      { id: 10, name: 'Courtenay Risborough', gender: 'female', department: 'hr', salary: 35000 },
    ];

    // Filter the data based on selected department and gender
    const filteredData = data.filter(employee => {
      if (selectedDepartment && employee.department !== selectedDepartment) {
        return false;
      }
      if (selectedGender && employee.gender !== selectedGender) {
        return false;
      }
      return true;
    });

    // Clear the table before populating filtered data
    tableBody.innerHTML = '';

    // Populate the filtered data on the DOM
    filteredData.forEach(employee => {
      const row = tableBody.insertRow();
      row.innerHTML = `
              <td>${employee.id}</td>
              <td>${employee.name}</td>
              <td>${employee.gender}</td>
              <td>${employee.department}</td>
              <td>${employee.salary}</td>
          `;
    });
  }

  // Initial population of data
  filterData();
});
