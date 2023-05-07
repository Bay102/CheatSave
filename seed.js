import { writeFileSync } from 'fs';

const data = {
  users: [
    {
      id: 1,
      username: 'zak',
      password: 'coding',
    },
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
      id: 4,
      console: 'PS5',
    },
    {
      id: 5,
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
      gameTitle: "Sims 4",
      consoleId: '3',
      codeTitle: "More Money",
      code: "down-up-right-right-R1-R2",
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
      userId: 1,
      id: 4
    }
    
  ],
};

writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8' });
