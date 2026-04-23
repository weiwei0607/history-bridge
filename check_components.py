import re
import os

figures_data = open('src/data/figures.js').read()
ancient = open('src/data/connections_ancient.js').read()
medieval = open('src/data/connections_medieval.js').read()
modern = open('src/data/connections_modern.js').read()

figures = set(re.findall(r"id:\s*'([^']+)'", figures_data))

conns = []
for data in [ancient, medieval, modern]:
    conns.extend(re.findall(r"from:\s*'([^']+)',\s*to:\s*'([^']+)'", data))

adj = {f: set() for f in figures}
missing = set()
for u, v in conns:
    if u in adj:
        adj[u].add(v)
    else:
        missing.add(u)
    if v in adj:
        adj[v].add(u)
    else:
        missing.add(v)

visited = set()
components = []
for f in figures:
    if f not in visited:
        comp = []
        q = [f]
        visited.add(f)
        while q:
            curr = q.pop(0)
            comp.append(curr)
            for n in adj[curr]:
                if n in adj and n not in visited:
                    visited.add(n)
                    q.append(n)
        components.append(comp)

components.sort(key=len, reverse=True)
print(f"Total Figures: {len(figures)}")
print(f"Total Connections: {len(conns)}")
print(f"Missing from Figures array: {len(missing)}")
if missing:
    print(f"Missing IDs: {list(missing)[:10]}")

print(f"Total Components: {len(components)}")
for i, c in enumerate(components[:5]):
    print(f"Component {i+1} size: {len(c)}")
    if len(c) < 10:
        print(f" -> {c}")

isolated = [c[0] for c in components if len(c) == 1]
print(f"\nTotal isolated figures: {len(isolated)}")
print(f"Isolated: {isolated[:20]}")

