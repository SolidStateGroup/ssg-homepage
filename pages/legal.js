import React from 'react';
import Constants from '../common/utils/constants';

const TermsPoliciesPage = class extends React.Component {
  static contextTypes = {
      router: React.PropTypes.object.isRequired,
  };

  static displayName = 'TermsPoliciesPage'

  constructor(props, context) {
      super(props, context);
      this.state = {};
  }

  componentWillMount() {
      API.trackPage(Constants.pages.POLICIES);
  }

  render = () => {
      return (
          <div>
        Legal
          </div>
      );
  }
};
export default TermsPoliciesPage;
