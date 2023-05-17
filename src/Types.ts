export type AuthContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
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

export type AppContextType = {
  display: string ;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  showNewGame: boolean;
  setShowNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  consoles: string[];
};

export type UsersCodeContextType = {
  usersCodes: CheatCode[] | null | undefined;
  setUsersCodes: any;
  handleDelete: (   
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  userSearch: string;
  setUserSearch: React.Dispatch<React.SetStateAction<string>>;
  consoleFilter: string;
  setConsoleFilter: React.Dispatch<React.SetStateAction<string>>;
  fetchCodes: () => void;
};

export type NavBarTypes = {
  login: JSX.Element;
  signUp: JSX.Element;
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

export type CheatCode = {
  gameTitle: string;
  consoleId: string;
  codeTitle: string;
  code: string;
  userId: number;
  id: number;
};

export type Console = {
  id: number;
  console: string;
};
