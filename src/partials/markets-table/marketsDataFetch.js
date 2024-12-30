const data = [
  {
    category: 'INDICES',
    rows: [
      {
        name: 'S&P 500',
        value: 5856.7,
        change: -14.5,
        chgPercent: '-0.17%',
        open: 5874.0,
        high: 5878.6,
        low: 5800.7,
        prev: 5874.0,
      },
      {
        name: 'US 100',
        value: 21231.4,
        change: -14.5,
        chgPercent: '-0.17%',
        open: 21128.8,
        high: 21279.9,
        low: 20735.6,
        prev: 21128.8,
      },
      // Add other rows here
    ],
  },
  {
    category: 'FUTURES',
    rows: [
      {
        name: 'Gold',
        value: 5856.7,
        change: -14.5,
        chgPercent: '-0.17%',
        open: 5874.0,
        high: 5878.6,
        low: 5800.7,
        prev: 5874.0,
      },
      // Add other rows here
    ],
  },
  // Add other categories here
];

function renderTable() {
  const tableBody = document.querySelector('#dynamic-table tbody');
  tableBody.innerHTML = '';

  data.forEach(section => {
    // Add category row
    const categoryRow = document.createElement('tr');
    categoryRow.innerHTML = `<td colspan="8" class="category">${section.category}</td>`;
    tableBody.appendChild(categoryRow);

    // Add data rows
    section.rows.forEach(row => {
      const dataRow = document.createElement('tr');
      dataRow.innerHTML = `
                    <td>${row.name}</td>
                    <td>${row.value}</td>
                    <td>${row.change}</td>
                    <td>${row.chgPercent}</td>
                    <td>${row.open}</td>
                    <td>${row.high}</td>
                    <td>${row.low}</td>
                    <td>${row.prev}</td>
                `;
      tableBody.appendChild(dataRow);
    });
  });
}

renderTable();
