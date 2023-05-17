import { writeFileSync } from 'fs';

const data = {
  users: [
    {
      id: 1,
      username: 'doomslayer',
      password: 'dog',
    },
    {
      id: 2,
      username: 'jon',
      password: 'fake',
    },
    {
      id: 3,
      username: 'ZakBay',
      password: 'fake',
    }

  ],
  consoles: [
    {
      id: 0,
      console: 'XboxOne',
    },
    {
      id: 1,
      console: 'PS4',
    },
    {
      id: 2,
      console: 'PC',
    },
    {
      id: 3,
      console: 'Nintendo Switch',
    },
  ],
  users_CheatCodes: [
    {
      gameTitle: "GTA 5",
      consoleId: '1',
      codeTitle: "Invincibility",
      code: "Enter Right, A, Right, Left, Right, RB, Right, Left, A, Y",
      userId: 1,
      id: 1
    },
    {
      gameTitle: "SpiderMan",
      consoleId: '2',
      codeTitle: "Health",
      code: "down-up-right-R1-R2",
      userId: 1,
      id: 2
    },
    {
      gameTitle: "Saints Row 3",
      consoleId: '3',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2-A-A-Y",
      userId: 1,
      id: 3
    },
    {
      gameTitle: "Saints Row 3",
      consoleId: '3',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2-A-A-Y",
      userId: 2,
      id: 4
    },
    {
      gameTitle: "Stardew Valley",
      consoleId: '2',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2",
      userId: 1,
      id: 5
    },
    {
      gameTitle: "Pokemon",
      consoleId: '3',
      codeTitle: "Skip Intro",
      code: "B05557898BBD",
      userId: 1,
      id: 6
    },
    {
      gameTitle: "Pokemon",
      consoleId: '3',
      codeTitle: "Skip Intro",
      code: "B05557898BBD",
      userId: 2,
      id: 7
    },
    {
      gameTitle: "The Sims",
      consoleId: '3',
      codeTitle: "Money",
      code: "RoseBud",
      userId: 2,
      id: 8
    },
    {
      gameTitle: "The Sims",
      consoleId: '3',
      codeTitle: "Money",
      code: "RoseBud",
      userId: 1,
      id: 9
    },
    {
      gameTitle: "The Sims",
      consoleId: '3',
      codeTitle: "Speed Up Time",
      code: "Speed",
      userId: 1,
      id: 10
    },
    {
      gameTitle: "GTA 5",
      consoleId: '1',
      codeTitle: "All Weapons",
      code: "Enter Y, RT, Left, LB, A, Right, Y, Down, X, LB(3)",
      userId: 1,
      id: 11
    },
    {
      gameTitle: "Sims 4",
      consoleId: '3',
      codeTitle: "50,000 Simoleons",
      code: "MotherLoad",
      userId: 1,
      id: 12
    },
    {
      gameTitle: "Sims 4",
      consoleId: '3',
      codeTitle: "50,000 Simoleons",
      code: "MotherLoad",
      userId: 2,
      id: 13
    },
    {
      gameTitle: "Sims 4",
      consoleId: '3',
      codeTitle: "50,000 Simoleons",
      code: "MotherLoad",
      userId: 3,
      id: 14
    }
  ],
};

writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8' });
