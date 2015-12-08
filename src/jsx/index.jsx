Separator = React.createClass({
  render: () => {
    return (
      <span>
        :
      </span>
    );
  }
});

Second = React.createClass({
  render: () => {
    return (
      <span>
        ss
      </span>
    );
  }
});

Minute = React.createClass({
  render: () => {
    return (
      <span>
        mm
      </span>
    );
  }
});

Hour = React.createClass({
  render: () => {
    return (
      <span>
        HH
      </span>
    );
  }
});

Timer = React.createClass({
  render: () => {
    return (
    <div>
      <Hour/>
      <Separator/>
      <Minute/>
      <Separator/>
      <Second/>
    </div>
    );
  }
});


React.render(
  <Timer />,
  document.getElementById('container')
);
