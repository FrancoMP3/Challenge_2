function findRoutes(routes) {
  const graph = {};
    const inDegree = {};
    for (let [from, to] of routes) {
        if (!graph[from]) {
            graph[from] = [];
            inDegree[from] = 0;
        }
        if (!graph[to]) {
            graph[to] = [];
            inDegree[to] = 0;
        }
        graph[from].push(to);
        inDegree[to]++;
    }

    const result = [];
    const visited = new Set();
    function dfs(node) {
        if (visited.has(node)) return;
        visited.add(node);
        result.push(node);
        if (graph[node]) {
            for (let next of graph[node]) {
                dfs(next);
            }
        }
    }
    const startNodes = Object.keys(inDegree).filter(node => inDegree[node] === 0);
    for (let node of startNodes) {
        dfs(node);
    }
    return result.join(', ');
}