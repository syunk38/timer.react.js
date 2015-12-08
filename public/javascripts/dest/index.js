Separator = React.createClass({displayName: "Separator",
  render: () => {
    return (
      React.createElement("span", null, 
        ":"
      )
    );
  }
});

Second = React.createClass({displayName: "Second",
  render: () => {
    return (
      React.createElement("span", null, 
        "ss"
      )
    );
  }
});

Minute = React.createClass({displayName: "Minute",
  render: () => {
    return (
      React.createElement("span", null, 
        "mm"
      )
    );
  }
});

Hour = React.createClass({displayName: "Hour",
  render: () => {
    return (
      React.createElement("span", null, 
        "HH"
      )
    );
  }
});

Timer = React.createClass({displayName: "Timer",
  render: () => {
    return (
    React.createElement("div", null, 
      React.createElement(Hour, null), 
      React.createElement(Separator, null), 
      React.createElement(Minute, null), 
      React.createElement(Separator, null), 
      React.createElement(Second, null)
    )
    );
  }
});


React.render(
  React.createElement(Timer, null),
  document.getElementById('container')
);

//# sourceMappingURL=index.js.map
