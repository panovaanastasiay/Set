import Team from '../index'; 
import Character from '../character';

const warrior = new Character('AB', 'warrior');
const farmer = new Character('CD', 'farmer');

test('add character', () => {

  const team = new Team();
  team.add(warrior);

  const received = team.members;

  expect(received.has(warrior)).toEqual(true);
});

test('douplicate characters', () => {
    function errorTest() {
      const team = new Team();
      team.addAll(warrior, farmer);
      team.add(farmer);
    }

    expect(errorTest).toThrowError(Error);
});

test('add multiple characters', () => {
  const testAllAdd = new Set();
  const expected = testAllAdd.add(warrior).add(farmer);

  const team = new Team();
  team.addAll(warrior,farmer);
  const received = team.members;

  expect(received).toEqual(expected);
});

test('convert to array', () => {
  const newTeam = new Team();
  newTeam.addAll(warrior, farmer);

  const teamArray = newTeam.toArray();

  expect(teamArray).toEqual([
    {
      name: 'AB', role: 'warrior',
    },
    {
      name: 'CD', role: 'farmer',
    }
  ]);
});