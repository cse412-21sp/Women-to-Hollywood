const React = require('react');

class ObservableEmbed extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <iframe 
        width={this.props.width}
        height={this.props.height}
        frameBorder={"0"}
        src={this.props.link}
      />
    );
  }
}

module.exports = ObservableEmbed;
