import { action, observable } from "mobx";

class UserStore {
  @observable public number = 0;

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
