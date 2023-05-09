export type RegisterParams = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  password: string;
  id: number;
};

export type NewGameFormProps = {
  setShowNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  showNewGame: any;
};

export type CheatCode = {
  gameTitle: string;
  consoleId: string;
  codeTitle: string;
  code: string;
  userId: number;
  id: number;
};
