export class User {
  public id: string;
  public login: string;

  constructor(params: TUserParams) {
    this.id = params.id;
    this.login = params.login;
  }
}

type TUserParams = {
  id: string;
  login: string;
};
