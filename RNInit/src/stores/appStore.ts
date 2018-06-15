import { observable } from 'mobx';
import { NavigationActions } from 'react-navigation';

class ObservableListStore {
  @observable private _cnt: number = 0;

  public get cnt(): number  {
    return this._cnt;
  }

  public set cnt(value: number ) {
    this._cnt = value;
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
