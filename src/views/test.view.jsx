import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { injectIntl, intlShape } from 'react-intl';

class TestView extends PureComponent {
  render() {
    return (
      <div className="bg-grey-light text-center">
        <h2 className="pt-8">{this.props.intl.formatMessage({ id: 'app.next-page-text' })}</h2>
        <div className="mt-4 pb-8">
          <Link to='/'>{this.props.intl.formatMessage({ id: 'app.btn-go-home' })}</Link>
        </div>
      </div>
    );
  }
}

TestView.propTypes = {
  intl: intlShape.isRequired
}

export default withRouter(injectIntl(connect()(TestView)));
