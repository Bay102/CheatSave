export type AuthContextType = {
  user: User | null;
  setUser:  React.Dispatch<React.SetStateAction<null>>
  register: (input: RegisterParams) => void | Promise<void>;
  logOut: () => void;
  logIn: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<void>;
};

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

export type Console = {
  id: number,
  console: string
}