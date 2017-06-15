var teams = [
  'Atlanta Hawks',
  'Boston Celtics',
  'Brooklyn Nets',
  'Charlotte Hornets',
  'Chicago Bulls',
  'Cleveland Cavaliers',
  'Dallas Mavericks',
  'Denver Nuggets',
  'Detroit Pistons',
  'Golden State Warriors',
  'Houston Rockets',
  'Indiana Pacers',
  'Los Angeles Clippers',
  'Los Angeles Lakers',
  'Memphis Grizzlies',
  'Miami Heat',
  'Milwaukee Bucks',
  'Minnesota Timberwolves',
  'New Orleans Pelicans',
  'New York Knicks',
  'Oklahoma City Thunder',
  'Orlando Magic',
  'Philadelphia 76ers',
  'Phoenix Suns',
  'Portland Trail Blazers',
  'Sacramento Kings',
  'San Antonio Spurs',
  'Toronto Raptors',
  'Utah Jazz',
  'Washington Wizards'
]

var numberOfTeams = teams.length
// Generate a random number from 1 - 29 to randomize the round robin
var offSet = Math.ceil(Math.random() * (numberOfTeams - 1))

var rounds = {};

function shuffle() {
  console.log("The offset is: " + offSet);
  for (var i = 1; i <= numberOfTeams/2; i++) {

    console.log(teams[i] + " @ " + teams[i === numberOfTeams/2 ? 0 : i + numberOfTeams/2]);
  }
}

shuffle();