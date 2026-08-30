---
tags:
- coding
- programming
- software-engineering
- javascript
- webdev
- web-development
title: Multiple HTML elements
---


When targetting multiple HTML elements, we can use [querySelectorAll](#queryselectorall)




```

                    
const elements = document.querySelectorAll('.class');
                    
                
```

Now we can use these elements, with any [JS array method](#javascript-array-methods), here I'm using [forEach](#javascript-foreach)



```
elements.forEach(element =>{})
```




This is the least problematic way of linking scripts inside of the html document.



```

                <script type="module"></script>
            
```

