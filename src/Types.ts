export type RegisterParams = {
   username: string;
   password: string;
 };
 
export type User = {
  username: string;
  password: string;
  id: number 
}

export type NewGameFormProps = {
  setShowNewGame: React.Dispatch<React.SetStateAction<boolean>>;
  showNewGame: any
}
