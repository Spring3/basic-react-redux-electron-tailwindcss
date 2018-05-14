import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';

class WrappedIntlProvider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <IntlProvider
        locale={this.props.locale}
        messages={this.props.messages}
      >
        {this.props.children}
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  locale: state.intl.locale,
  messages: state.intl.messages
});

export default connect(mapStateToProps)(WrappedIntlProvider);
