import { action, observable } from "mobx";

class UserStore {
  public static getInstance(): UserStore {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  private static instance: UserStore;

  @observable public number = 0;

  @observable public status = "NonMember";

  private constructor() {}

  @action
  public increase = () => {
    this.number++;
  };

  @action
  public decrease = () => {
    this.number--;
  };
}

export default UserStore;
