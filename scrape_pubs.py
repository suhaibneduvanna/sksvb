import urllib.request
import re
import json

url = "https://jamiathulhind.com/publications.php"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

books = []

chunks = html.split('<div class="event__thumb">')
for chunk in chunks[1:]:
    # find image
    img_match = re.search(r'<img[^>]*src="([^"]+)"', chunk)
    img = "https://jamiathulhind.com/" + img_match.group(1).lstrip('/') if img_match else ""
    
    # find title inside toggle-description
    title_match = re.search(r'class="toggle-description"[^>]*>([^<]+)</a>', chunk)
    title = title_match.group(1).strip() if title_match else ""
    
    # find author inside span
    # <div class="text-center">\s*<span>جعفر...</span>
    author_match = re.search(r'<div class="text-center">\s*<span>([^<]+)</span>', chunk)
    author = author_match.group(1).strip() if author_match else ""
    
    # find description
    # <div class="collapse description-container ...>
    desc_match = re.search(r'class="collapse description-container[^>]*>.*?<p[^>]*>(.*?)</p>\s*</div>', chunk, re.DOTALL)
    description = ""
    if desc_match:
        # Strip internal tags
        description = re.sub(r'<[^>]+>', '', desc_match.group(1)).strip()
        # Decode HTML entities if any
        description = description.replace('&nbsp;', ' ').replace('&#39;', "'")
    
    if title:
        books.append({
            "title": title,
            "author": author,
            "image": img,
            "description": description
        })

print(json.dumps(books, indent=2, ensure_ascii=False))
