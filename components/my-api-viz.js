const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');
const vl = require('vega-lite-api')

class MyAPIViz extends IdyllVegaLite {
  render() {
    this.props = {
      // Note how this is directly calling the javascript, and it's NOT a string.
      spec: vl.markBar().encode(
        vl.x().fieldN("month").sort("none").axis({labelAngle: 0, ticks: false}),
        vl.y().fieldQ("sunshine"),
        vl.tooltip().fieldQ("sunshine")
      ).toSpec(),
      ...this.props
    };

    return super.render();
  }
}

module.exports = MyAPIViz;
