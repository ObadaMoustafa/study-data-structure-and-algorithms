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
      const v: string = this.adjacencyList[vertex].pop()!;
      this.removeEdge(vertex, v);
    }

    delete this.adjacencyList[vertex];
    return true;
  }

  DFS(start: string): string[] | string {
    if (!this.adjacencyList[start]) return 'Not a valid vertex';
    let results: string[] = [];
    let visited: Record<string, boolean> = {};
    const recursiveFn = (v: string): void => {
      // check if visited
      if (!visited[v]) visited[v] = true;
      results.push(v);
      this.adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) recursiveFn(neighbor);
      });
    };

    recursiveFn(start);
    return results;
  }

  DFS2(start: string): string[] | string {
    if (!this.adjacencyList[start]) return 'Not valid vertex';
    const stack: string[] = [start];
    const results: string[] = [start];
    const visited: Record<string, boolean> = {};
    stack.push(...this.adjacencyList[start]);
    visited[start] = true;
    while (stack.length) {
      const vertex: string = stack.pop()!;
      if (!visited[vertex]) {
        visited[vertex] = true;
        results.push(vertex);
        stack.push(...this.adjacencyList[vertex]);
      }
    }
    return results;
  }

  BFS(start: string): string[] | string {
    if (!this.adjacencyList[start]) return 'Not valid vertex';

    const queue: string[] = [start];
    const results: string[] = [];
    const visited: Record<string, boolean> = {};
    visited[start] = true;

    while (queue.length) {
      const vertex: string = queue.shift()!;
      results.push(vertex);
      this.adjacencyList[vertex].forEach((v) => {
        if (!visited[v]) {
          visited[v] = true;
          queue.push(v);
        }
      });
    }

    return results;
  }
}

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.DFS('S'));
