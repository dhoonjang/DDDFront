import { action, observable } from "mobx";
import {
  ElocakItemsKey,
  getLocalItem,
  setLocalItem
} from "../../tool/localTool";

class UserStore {
  public static getInstance(): UserStore {
    if (!UserStore.instance) {
      UserStore.instance = new UserStore();
    }
    return UserStore.instance;
  }

  private static instance: UserStore;

  @observable public name: string | null = null;
  @observable public status: string | null = getLocalItem(
    ElocakItemsKey.userStatus
  );
  @observable public highSchool: string | null = null;
  @observable public grade: number | null = null;

  private constructor() {}

  @action
  public setUserName(name: string) {
    this.name = name;
  }

  @action
  public setUserStatus(status: string) {
    setLocalItem(ElocakItemsKey.userStatus, status);
    this.status = status;
  }

  @action
  public setUserHs(hs: string) {
    this.highSchool = hs;
  }
  @action
  public setUserGrade(grade: number) {
    this.grade = grade;
  }
}

export default UserStore;
