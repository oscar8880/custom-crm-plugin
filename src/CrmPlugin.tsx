import React from 'react';
import * as Flex from '@twilio/flex-ui';
import { FlexPlugin } from 'flex-plugin';

import CustomCrm from './components/CustomCrm/CustomCrm.Container';
import {Actions as CrmActions} from './states/CustomCrmState'
import reducers, { namespace } from './states';

const PLUGIN_NAME = 'CrmPlugin';

export default class CrmPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof Flex }
   * @param manager { Flex.Manager }
   */
  init(flex: typeof Flex, manager: Flex.Manager) {
    this.registerReducers(manager);

    // Replace the standard CRM component with the CustomCrm component
    Flex.CRMContainer.Content.replace(<CustomCrm uri="https://bing.com" key="CrmPlugin-component" />)

    // Initialise showCrm according to worker state
    if(manager.store.getState().flex.worker.activity.name === "Offline") {
      flex.Manager.getInstance().store.dispatch(CrmActions.setShowCrm(false));
    } else {
      flex.Manager.getInstance().store.dispatch(CrmActions.setShowCrm(true));
    }

    // Add event listener for setActivity action
    flex.Actions.addListener("afterSetActivity", (payload) => {
      if (payload.activityName === "Offline") {
        flex.Manager.getInstance().store.dispatch(CrmActions.setShowCrm(false));
      } else {
        flex.Manager.getInstance().store.dispatch(CrmActions.setShowCrm(true));
      }
    });
  }

  /**
   * Registers the plugin reducers
   *
   * @param manager { Flex.Manager }
   */
  private registerReducers(manager: Flex.Manager) {
    if (!manager.store.addReducer) {
      // tslint: disable-next-line
      console.error(`You need FlexUI > 1.9.0 to use built-in redux; you are currently on ${Flex.VERSION}`);
      return;
    }

    manager.store.addReducer(namespace, reducers);
  }
}
