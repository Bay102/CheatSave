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
      id: 1,
      gameTitle: 'GTA 4',
      code: 'X-A-L1',
      consoleId: 1,
      userId: 1,
    },
    {
      id: 2,
      gameTitle: 'Red Dead Redemption 2',
      code: 'X-A-L1',
      consoleId: 1,
      userId: 1,
    },
    {
      id: 3,
      gameTitle: 'Sims 4',
      code: 'X-A-L1',
      consoleId: 2,
      userId: 1,
    },
  ],
};

writeFileSync('db.json', JSON.stringify(data), { encoding: 'utf-8' });
