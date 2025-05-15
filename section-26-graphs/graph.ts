class Graph {
  adjacencyList: Record<string, string[]>;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(name: string): void {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = [];
  }

  addEdge(vertex1: string, vertex2: string) {
    // adding vertices
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string): void {
    // adding vertices
    const isVertex1: boolean = Boolean(this.adjacencyList[vertex1]);
    const isVertex2: boolean = Boolean(this.adjacencyList[vertex2]);

    if (!isVertex1 || !isVertex2) return;

    // find vertex1 and remove it
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex: string): boolean {
    const isVertex: boolean = Boolean(this.adjacencyList[vertex]);
    if (!isVertex) return false;

    while (this.adjacencyList[vertex].length) {
      const v = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v);
    }
    // this.adjacencyList[vertex].forEach((v) => {
    //   this.adjacencyList[v] = this.adjacencyList[v].filter((e) => e !== vertex);
    // });

    delete this.adjacencyList[vertex];

    return true;
  }
}

const g = new Graph();
// g.addVertex('Tokyo');
// g.addVertex('Dallas');
// g.addVertex('Aspen');
g.addEdge('Tokyo', 'Dallas');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Tokyo', 'Aspen');
console.log(g.adjacencyList);
