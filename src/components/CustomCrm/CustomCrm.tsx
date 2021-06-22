import React from 'react';

import { StateToProps, DispatchToProps } from './CustomCrm.Container';

interface OwnProps {
  uri: string;
}

type Props = StateToProps & DispatchToProps & OwnProps;

const CustomCrm = (props: Props) => (
  <>
    {!props.showCrm && <p>You're offline this is all you get. Replace me with something useful.</p>}
    {props.showCrm && <iframe title="CRMContainer" key="iframe" src={props.uri} />}
  </>
);

export default CustomCrm;
