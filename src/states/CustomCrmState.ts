import { Action } from './index';

const ACTION_SET_SHOW_CRM = 'SET_SHOW_CRM';

export interface CustomCrmState {
  showCrm: boolean;
}

const initialState: CustomCrmState = {
  showCrm: false,
};

export class Actions {
  public static setShowCrm = (showCrm: boolean): Action => ({ type: ACTION_SET_SHOW_CRM, payload: showCrm });
}

export function reduce(state: CustomCrmState = initialState, action: Action) {
  switch (action.type) {
    case ACTION_SET_SHOW_CRM: {
      return {
        ...state,
        showCrm: action.payload,
      };
    }

    default:
      return state;
  }
}
