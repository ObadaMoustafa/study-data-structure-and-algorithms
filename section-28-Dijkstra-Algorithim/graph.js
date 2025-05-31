'use strict';
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    // adding vertices
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, end) {
    const priority = new PriorityQueue();
    const distances = {};
    const previous = {};
    let smallest;
    let path = [];

    // init distance
    for (const vertex in this.adjacencyList) {
      const initNumber = vertex === start ? 0 : Infinity;
      distances[vertex] = initNumber;
      priority.enqueue(vertex, initNumber);
      previous[vertex] = null;
    }

    // as long as there is something to visit
    while (priority.values.length) {
      smallest = priority.dequeue().val;
      if (smallest === end) {
        // finish and need to build up the route.
        let nextCheck = end;
        while (nextCheck) {
          path.unshift(nextCheck);
          nextCheck = previous[nextCheck];
        }
        return path;
      }
      if (smallest && distances[smallest] !== Infinity) {
        const graph = this.adjacencyList[smallest];
        for (let idx in graph) {
          const { node, weight } = graph[idx];
          const candidate = distances[smallest] + weight;
          if (candidate < distances[node]) {
            // updating new smallest distance
            distances[node] = candidate;
            // updating previous shortest point
            previous[node] = smallest;
            // enqueue in priority
            priority.enqueue(node, candidate);
          }
        }
      }
    }
    return path;
  }
}

var g = new WeightedGraph();
g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);
g.addEdge('Z', 'Q', 2);
g.addEdge('C', 'G', 4);
g.addEdge('D', 'Q', 8);
g.addEdge('E', 'H', 1);
g.addEdge('H', 'Q', 3);
g.addEdge('Q', 'C', 6);
g.addEdge('G', 'Q', 9);

g.Dijkstra('A', 'E'); // ["A", "Z", "Q", "H", "E"]
g.Dijkstra('A', 'Q'); // ["A", "Z", "Q"]
g.Dijkstra('A', 'G'); // ["A", "C", "G"]
g.Dijkstra('A', 'D'); // ["A", "Z", "Q", "D"]
