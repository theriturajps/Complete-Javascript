/** We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored */


// we got data from a web service about a certain game 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

/////////////////////////// Coding Challenge #1

// 1.
const [players1, players2] = game.players
console.log(players1, players2);

// 2.
const [goalKeeper1, ...otherPlayer1] = players1
const [goalKeeper2, ...otherPlayer2] = players2
console.log(goalKeeper1, goalKeeper2);


// 3.
const allPlayers = [...game.players[0], ...game.players[1]]
console.log(allPlayers);

// 4.
const players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic']
console.log(players1Final);

// 5.
const { odds: {
	team1, x: draw, team2
} } = game;

console.log(team1, draw, team2); // 1.33 3.25 6.5

// 6.
const printGoals = function (...players) {
	console.log(`${players.length} goll scored ....`) 
}

printGoals('Davies', 'Muller') // 2 goll scored ....
printGoals(...game.scored) // 4 goll scored ....


// 7.
team1 < team2 && console.log('team1 is win');
team1 > team2 && console.log('team2 is win')



/////////////////////////// Coding Challenge #2

/**
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
  Odd of victory Bayern Munich: 1.33
  Odd of draw: 3.25
  Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them
(except for "draw"). 

Hint: Note how the odds and the game objects have the same property names

-----------------------------------------------------------------------------

Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. 

In this game, it will look like this:
    {
    Gnarby: 1,
    Hummels: 1,
    Lewandowski: 2
    }
*/


// 1.
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// 2.
let avg = 0
const odds = Object.values(game.odds)
for (const odd of odds) avg += odd;
  avg /= odds.length;
  console.log(avg);

// 3.
for (const [object, value] of Object.entries(game.odds)) {
  const teamStr = object === 'x' ? 'draw' : `victory ${game[object]}`
  console.log(`Odd of ${teamStr}: ${value}`)
}


////////////////////////////// Coding Challenge #3
/**
Let's continue with our football betting app! This time, we have a map called
'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which
each event happened (a football game has 90 minutes plus some extra time).


Your tasks:

1. Create an array 'events' of the different game events that happened (no
duplicates)

2. After the game has finished, it was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.

3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)

4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, 

like this:
[FIRST HALF] 17: ⚽ GOAL
 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🟨 Yellow card'],
])

// 1.
// Set for unique values
const events = [...new Set(gameEvents.values())]
console.log(events); // (4) ['⚽ GOAL', '🔁 Substitution', '🟨 Yellow card', '🔴 Red card']

// 2.
gameEvents.delete(64)

// 3.
let average = 0

for (const [key] of gameEvents) {
  average += key
  console.log(key);
}

const time = [...gameEvents.keys()].pop()

console.log(
  `An event happened, on ${
    time / (gameEvents.size)
  }, every 9 minutes \n average event is ${Math.round(average / 90)}`
)

// 4.
for (const [min, event] of gameEvents) {
  if (min < 45) {
    console.log(`[FIRST HALF] ${min}: ${event}`)
  } else {
    console.log(`[SECOND HALF] ${min}: ${event}`)
  }
}
