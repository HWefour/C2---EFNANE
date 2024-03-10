import TeamGenerator from './TeamGenerator';

describe('Team Generator', () => {
  let generator;

  beforeEach(() => {
    const players = ['Player1', 'Player2', 'Player3', 'Player4', 'Player5', 'Player6'];
    generator = new TeamGenerator(players);
  });

  test('Generate teams with default number of players per team', () => {
    generator.generateTeams();
    const teams = generator.getTeams();
    expect(teams.length).toBe(2); 
  });

  test('Add players to the team', () => {
    const newPlayers = ['Player7', 'Player8'];
    generator.addPlayers(newPlayers);
    const players = generator.getPlayers();
    expect(players.length).toBe(8); 
  });

});
