const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <p>{props.parts[0]}</p>
      <p>{props.parts[1]}</p>
      <p>{props.parts[2]}</p>
    </div>
  );
};

const Total = (props) => {
  return <div>Numver de exercises {props.total}</div>;
};

const App = () => {
  const course = "Half Stack Application Development";
  const part1 = "React Library Fundamentals";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "Component state";
  const exercises3 = 14;
  const content = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={content} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
