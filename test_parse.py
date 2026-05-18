import urllib.request

url = "https://jamiathulhind.com/publications.php"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

idx = html.find("اقرأ لتعليم اللغة العربية")
if idx != -1:
    print(html[idx-1000:idx+1500])
