import { writeFileSync } from 'fs';

const data = {
  users: [
    {
      id: 1,
      username: 'zak',
      password: 'fake',
    },
    {
      id: 2,
      username: 'jon',
      password: 'fake',
    }
  ],
  consoles: [
    {
      id: 1,
      console: 'XboxOne',
    },
    {
      id: 2,
      console: 'PS4',
    },
    {
      id: 3,
      console: 'PC',
    },
    {
      id: 4,
      console: 'Nintendo Switch',
    },
  ],
  users_CheatCodes: [
    {
      gameTitle: "GTA 4",
      consoleId: '1',
      codeTitle: "Max Stamina",
      code: "left-left-right-right-R1-R2",
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
      consoleId: '4',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2",
      userId: 1,
      id: 3
    },
    {
      gameTitle: "Saints Row 3",
      consoleId: '4',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2",
      userId: 2,
      id: 4
    },
    {
      gameTitle: "Stardew Valley",
      consoleId: '3',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2",
      userId: 1,
      id: 5
    }
    
  ],
};

writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8' });
