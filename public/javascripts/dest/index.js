"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
console.log(course.getHour());
// console.info(current)

var Separator = React.createClass({ displayName: "Separator",
  render: function render() {
    return React.createElement("span", null, ":");
  }
});

var Second = React.createClass({ displayName: "Second",
  getDefaultProps: function getDefaultProps() {
    return { second: course.diffTime().second() };
  },
  render: function render() {
    return React.createElement("span", null, this.props.second);
  }
});

var Minute = React.createClass({ displayName: "Minute",
  getDefaultProps: function getDefaultProps() {
    return { minute: course.diffTime().minute() };
  },
  render: function render() {
    return React.createElement("span", null, this.props.minute);
  }
});

var Hour = React.createClass({ displayName: "Hour",
  getDefaultProps: function getDefaultProps() {
    return { hour: course.getHour() };
  },
  render: function render() {
    return React.createElement("span", null, this.props.hour);
  }
});

var Timer = React.createClass({ displayName: "Timer",

  render: function render() {
    return React.createElement("div", null, React.createElement(Hour, null), React.createElement(Separator, null), React.createElement(Minute, null), React.createElement(Separator, null), React.createElement(Second, null));
  }
});

var StartTime = React.createClass({ displayName: "StartTime",
  render: function render() {
    return React.createElement("div", { className: "start-time" }, course.formatedStartTime());
  }
});

var Container = React.createClass({ displayName: "Container",
  render: function render() {
    return React.createElement("div", null, React.createElement(StartTime, null), React.createElement(Timer, null));
  }
});

React.render(React.createElement(Container, null), document.getElementById('container'));
//# sourceMappingURL=maps/index.js.map
