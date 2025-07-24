const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} - number of exercises {props.exercises}
    </p>
  );
};

const Content = (props) => {
  console.log(props.parts);
  return (
    <div>
      <Part
        part={props.parts[0].content}
        exercises={props.parts[0].exercises}
      />
      <Part
        part={props.parts[1].content}
        exercises={props.parts[1].exercises}
      />
      <Part
        part={props.parts[2].content}
        exercises={props.parts[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return <div>Number de exercises {props.total}</div>;
};

const App = () => {
  const course = "Half Stack Application Development";
  const content = [
    { content: "React Library Fundamentals", exercises: 10 },
    { content: "Using props to pass data", exercises: 7 },
    { content: "Component state", exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={content} />
      <Total
        total={
          content[0].exercises + content[1].exercises + content[2].exercises
        }
      />
    </div>
  );
};

export default App;
