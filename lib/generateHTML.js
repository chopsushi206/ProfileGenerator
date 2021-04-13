const generateCard = require('./generateCard');

module.exports = function generateHTML(team) {

  // dynamically build team from list provided
  let teamListHtml = ''; 

  // loop though list of teams
  for (let i = 0; i < team.length; i += 1) {
    // loop through each team
    for (let j = 0; j < team[i].length; j += 1) {
      // grab employee out of team list in list of teams
      const empl = team[i][j];
      // generate card for employee
      teamListHtml += generateCard(empl);
    }
  }


  const HTML = `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Members</title>
    <script src="https://kit.fontawesome.com/19bde09cf1.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>

    <section class="pageTitle">
        <h1>My Team</h1>
    </section>

    <section class="cardContainer">
  ${teamListHtml}
  </section>

  </body>
  
  </html>

`;

  return HTML;
};