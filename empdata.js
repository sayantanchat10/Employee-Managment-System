fetch('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees')
  .then(response => response.json())
  .then(data => {
    // Populate the data on the DOM
    const table = document.getElementById('employee-table');
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
  });