export type AuthContextType = {
  authToken: string;
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
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  showNav: boolean;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  showNewGame: boolean;
  setShowNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  consoles: ConsoleType[];
};

export type UsersCodeContextType = {
  usersCodes: CheatCode[];
  setUsersCodes: React.Dispatch<React.SetStateAction<CheatCode[]>>;
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

export type LoginParams = {
  username: string;
  password: string;
};

export type User = {
  userId: number;
  username: string;
  token?: string | null;
  userInformation: any;
};

export type Event = {
  e: React.ChangeEvent<HTMLSelectElement>;
};

export type CheatCode = {
  gameTitle: string;
  consoleId: string;
  codeTitle: string;
  code: string;
  userId: number;
  id: number;
};

export type ConsoleType = {
  id: number;
  consoleName: string;
};

export type FilterParams = {
  codes: CheatCode[];
  searchTerm: string;
  consoleID: string;
};
