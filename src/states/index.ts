import { AppState as FlexAppState } from '@twilio/flex-ui';
import { combineReducers, Action as ReduxAction } from 'redux';

import { CustomCrmState, reduce as CustomCrmReducer } from './CustomCrmState';

// Register your redux store under a unique namespace
export const namespace = 'crm';

// Extend this payload to be of type that your ReduxAction is
export interface Action extends ReduxAction {
  payload?: any;
}

// Register all component states under the namespace
export interface AppState {
  flex: FlexAppState;
  'crm': {
    customCrm: CustomCrmState;
    // Other states
  };
}

// Combine the reducers
export default combineReducers({
  customCrm: CustomCrmReducer
});
