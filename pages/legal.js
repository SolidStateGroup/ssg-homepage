import React from 'react';

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
