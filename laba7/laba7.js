const graphviz = require("graphviz");

function yCombinatorGraph() {
  const g = graphviz.digraph("YCombinator");

  g.addNode("Y", { label: "Y = λf. (λx. f (x x)) (λx. f (x x))" });
  g.addNode("lambda_x_fx", { label: "λx. f (x x)" });
  g.addNode("f_xx", { label: "f (x x)" });
  g.addNode("f", { label: "f" });
  g.addNode("x", { label: "x" });

  g.addEdge("Y", "lambda_x_fx", { label: "(λx. f (x x)) (λx. f (x x))" });
  g.addEdge("lambda_x_fx", "f_xx", { label: "λx. f (x x)" });
  g.addEdge("f_xx", "f");
  g.addEdge("f_xx", "x");

  return g;
}

const graph = yCombinatorGraph();

graph.setGraphVizPath("C:\\Program Files\\Graphviz\\bin");
graph.output("png", "laba7.png");
