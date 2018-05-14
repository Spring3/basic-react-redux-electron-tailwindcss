import React, { PureComponent } from 'react';
import { injectIntl, intlShape } from 'react-intl';

class Hello extends PureComponent {

  render() {
    return (
      <div
        className="test text-indigo text-center text-4xl pt-8">
        { this.props.intl.formatMessage({ id: 'app.greetings' }) }
      </div>
    );
  }
}

Hello.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(Hello);
