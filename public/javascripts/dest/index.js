"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CourseTime = (function () {
  function CourseTime(startAt) {
    _classCallCheck(this, CourseTime);

    this.startAt = new Date(startAt);
  }

  _createClass(CourseTime, [{
    key: "currentTime",
    value: function currentTime() {
      return moment();
    }
  }, {
    key: "startTime",
    value: function startTime() {
      return moment(this.startAt);
    }
  }, {
    key: "formatedStartTime",
    value: function formatedStartTime() {
      return this.startTime().format("YYYY-MM-DD HH:mm:ss");
    }
  }, {
    key: "diff",
    value: function diff() {
      var current = this.currentTime().toDate();
      var start = this.startAt;
      return current.getTime() - start.getTime();
    }
  }, {
    key: "getHour",
    value: function getHour() {
      return parseInt(this.diff() / (60 * 60 * 1000));
    }
  }, {
    key: "diffTime",
    value: function diffTime() {
      return moment(this.diff());
    }
  }]);

  return CourseTime;
})();

var course = new CourseTime("2015-12-07T00:50:00");

var Separator = (function (_React$Component) {
  _inherits(Separator, _React$Component);

  function Separator() {
    _classCallCheck(this, Separator);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Separator).apply(this, arguments));
  }

  _createClass(Separator, [{
    key: "render",
    value: function render() {
      return React.createElement("span", null, ":");
    }
  }]);

  return Separator;
})(React.Component);

var Second = (function (_React$Component2) {
  _inherits(Second, _React$Component2);

  function Second() {
    _classCallCheck(this, Second);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Second).apply(this, arguments));
  }

  _createClass(Second, [{
    key: "render",
    value: function render() {
      return React.createElement("span", null, this.props.second);
    }
  }]);

  return Second;
})(React.Component);

var Minute = (function (_React$Component3) {
  _inherits(Minute, _React$Component3);

  function Minute() {
    _classCallCheck(this, Minute);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Minute).apply(this, arguments));
  }

  _createClass(Minute, [{
    key: "render",
    value: function render() {
      return React.createElement("span", null, this.props.minute);
    }
  }]);

  return Minute;
})(React.Component);

var Hour = (function (_React$Component4) {
  _inherits(Hour, _React$Component4);

  function Hour() {
    _classCallCheck(this, Hour);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Hour).apply(this, arguments));
  }

  _createClass(Hour, [{
    key: "render",
    value: function render() {
      return React.createElement("span", null, this.props.hour);
    }
  }]);

  return Hour;
})(React.Component);

var Timer = (function (_React$Component5) {
  _inherits(Timer, _React$Component5);

  function Timer(props) {
    _classCallCheck(this, Timer);

    var _this5 = _possibleConstructorReturn(this, Object.getPrototypeOf(Timer).call(this, props));

    _this5.state = {
      hour: course.getHour(),
      minute: course.diffTime().minute(),
      second: course.diffTime().second()
    };
    return _this5;
  }

  _createClass(Timer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      setInterval((function () {
        this.setState({
          hour: course.getHour(),
          minute: course.diffTime().minute(),
          second: course.diffTime().second()
        });
      }).bind(this), 1000);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "timer" }, React.createElement(Hour, { hour: this.state.hour }), React.createElement(Separator, null), React.createElement(Minute, { minute: this.state.minute }), React.createElement(Separator, null), React.createElement(Second, { second: this.state.second }));
    }
  }]);

  return Timer;
})(React.Component);

var StartTime = (function (_React$component) {
  _inherits(StartTime, _React$component);

  function StartTime() {
    _classCallCheck(this, StartTime);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(StartTime).apply(this, arguments));
  }

  _createClass(StartTime, [{
    key: "render",
    value: function render() {
      return React.createElement("div", { className: "start-time" }, course.formatedStartTime());
    }
  }]);

  return StartTime;
})(React.component);

var Container = React.createClass({ displayName: "Container",
  render: function render() {
    return React.createElement("div", null, React.createElement(StartTime, null), React.createElement(Timer, null));
  }
});

React.render(React.createElement(Container, null), document.getElementById('container'));
//# sourceMappingURL=maps/index.js.map
