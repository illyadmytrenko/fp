const graphviz = require("graphviz");

function gcd(m, n, graph, parent) {
  if (n === 0) {
    const node = graph.addNode(`gcd(${m}, 0)`, {
      label: `gcd(${m}, 0) = ${m}`,
    });
    if (parent) {
      graph.addEdge(parent, node);
    }
    return m;
  } else {
    const node = graph.addNode(`gcd(${m}, ${n})`, { label: `gcd(${m}, ${n})` });
    if (parent) {
      graph.addEdge(parent, node);
    }
    return gcd(n, m % n, graph, node);
  }
}

const graph = graphviz.digraph("G");

const result = gcd(8, 36, graph, null);

graph.setGraphVizPath("C:\\Program Files\\Graphviz\\bin");
graph.output("png", "laba8.png");

console.log(`Найбільший спільний дільник: ${result}`);
