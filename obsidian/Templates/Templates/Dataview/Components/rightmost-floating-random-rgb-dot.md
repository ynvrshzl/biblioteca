 "<span style='float: right; height: .6em; width: .6em; border-radius: 50%; display: inline-block; " + DOT + "</span>"


 
flatten "hsl(" + truncate(string(hash(file.name, 3)), 3, "") + ", 50%, 60%);" as XRGB
flatten "background-color: " + XRGB + "'>" as DOT