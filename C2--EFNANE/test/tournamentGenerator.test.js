import TournamentGenerator from './TournamentGenerator';

describe('TournamentGenerator', () => {
  let generator;

  beforeEach(() => {
    const teams = [
      ['Team1', 'Team2', 'Team3', 'Team4'],
      ['Team5', 'Team6', 'Team7', 'Team8']
    ];
    generator = new TournamentGenerator(teams);
  });

  test('Generate pools correctly', () => {
    generator.generatePoules();
    const pools = generator.getPoules();
    expect(pools.length).toBe(2); 
    expect(pools[0].length).toBe(4); 
  });

  test('Simulate pool matches', () => {
    generator.generatePoules();
    generator.simulatePoulesMatches();
    const finalStages = generator.getFinalStages();
    expect(finalStages.length).toBe(1); 
    expect(finalStages[0].length).toBe(4); 
  });

  test('Generate tournament', () => {
    const tournament = generator.generateTournament();
    expect(tournament.length).toBeGreaterThan(0); 
  });

  test('Determine winner', () => {
    generator.generateTournament();
    const winner = generator.determineWinner();
    expect(winner).toBeDefined(); 
    expect(typeof winner).toBe('string'); 
  });

  test('Get teams', () => {
    const teams = generator.getTeams();
    expect(teams.length).toBe(2); 
  });

  test('Get poules', () => {
    generator.generatePoules();
    const poules = generator.getPoules();
    expect(poules.length).toBe(2); 
  });

  test('Get final stages', () => {
    generator.generatePoules();
    generator.simulatePoulesMatches();
    generator.generateFinalStages();
    const finalStages = generator.getFinalStages();
    expect(finalStages.length).toBeGreaterThan(0); 
  });

});
