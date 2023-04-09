export default function MyWork() {
  const style = {
    skills: {
      technologies: [
        "Git",
        "Javascript",
        "Flutter/Dart",
        "React.js",
        "SQL",
        "MongoDB",
        "AWS/DynamoDB",
        "Node.js",
        "Express",
        "GraphQL",
        "Firebase",
      ],
    },
  };

  return (
    <Container fluid style={style.skills}>
      <Projects>
        <Routes>
          <Route path="/sniffer" element={<Sniffer />}></Route>

          <Route path="/insta_clone" element={<InstaClone />}></Route>

          <Route path="/T[-]H NIGHTCLUB" element={<TheNightclub />}></Route>

          <Route path="/pos_flutter" element={<POS />}></Route>
        </Routes>
      </Projects>
    </Container>
  );
}
