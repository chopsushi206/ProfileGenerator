module.exports = function generateCard(empl) {
    let icon;
    if (empl.getRole() == 'Manager') {
        icon = `<i class="fas fa-mug-hot"></i>`;
    } else if (empl.getRole() == 'Engineer') {
        icon = `<i class="fas fa-glasses"></i>`;
    } else if (empl.getRole() == 'Intern') {
        icon = `<i class="fas fa-user-graduate"></i>`;
    }
  let html = `
  <div class="card">
            <div class="cardTitle">
                <p><h3>${empl.getName()}</h3></p>
                <p>${icon} ${empl.getRole()}</p>
            </div>
            <div class="cardBody">
                <p>ID Number: ${empl.getId()}</p>
                <p>Email: <a href="mailto:${empl.getEmail()}">${empl.getEmail()}</a></p>
                <p>${empl.getSpecial()}</p>
            </div>
        </div>
  `;

  return html;
};