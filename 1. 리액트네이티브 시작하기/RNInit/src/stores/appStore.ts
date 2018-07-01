import { observable } from 'mobx';
import { NavigationActions } from 'react-navigation';

class ObservableListStore {
  @observable private _cnt: number = 0;
  @observable private _loading: boolean = false;

  public get loading(): boolean  {
    return this._loading;
  }

  public set loading(value: boolean ) {
    this._loading = value;
  }

  public get cnt(): number  {
    return this._cnt;
  }

  public set cnt(value: number ) {
    this._cnt = value;
  }
}

const observableListStore = new ObservableListStore();
export default observableListStore;
