const React = require('react');
const IdyllVegaLite = require('idyll-vega-lite');

class MyViz extends IdyllVegaLite {
  render() {
    this.props = {
      // Note how this spec is an object, NOT a string!
      spec: {
        mark: "bar",
        encoding: {
          x: {
            field: "month",
            type: "nominal",
            sort: "none",
            axis: {labelAngle: 0, ticks: false}
          },
          y: {
            field: "sunshine",
            type: "quantitative"
          },
          tooltip: {
            field: "sunshine",
            type: "quantitative"
          }
        }
      },
      ...this.props
    };

    return super.render();
  }
}

module.exports = MyViz;
