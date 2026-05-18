import json

with open('books_data.json', 'r') as f:
    books = json.load(f)

out = []
out.append("export type Publication = {")
out.append("  id: string;")
out.append("  title: string;")
out.append("  author: string;")
out.append("  image: string;")
out.append("  description: string;")
out.append("};")
out.append("")
out.append("export const publications: Publication[] = [")

for i, b in enumerate(books):
    out.append("  {")
    out.append(f"    id: 'pub-{i}',")
    out.append(f"    title: {repr(b['title'])},")
    out.append(f"    author: {repr(b['author'])},")
    out.append(f"    image: {repr(b['image'])},")
    out.append(f"    description: {repr(b['description'])},")
    out.append("  },")

out.append("];")

with open('src/data/publications.ts', 'w') as f:
    f.write("\n".join(out))
