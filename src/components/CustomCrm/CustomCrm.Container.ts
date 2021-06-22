import { AppState } from '../../states';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Actions } from '../../states/CustomCrmState';
import CustomCrm from './CustomCrm';

export interface StateToProps {
  showCrm: boolean;
}

export interface DispatchToProps {
  setShowCrm: (showCrm: boolean) => void;
}

const mapStateToProps = (state: AppState): StateToProps => ({
  showCrm: state['crm'].customCrm.showCrm,
});

const mapDispatchToProps = (dispatch: Dispatch<any>): DispatchToProps => ({
  setShowCrm: bindActionCreators(Actions.setShowCrm, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomCrm);
