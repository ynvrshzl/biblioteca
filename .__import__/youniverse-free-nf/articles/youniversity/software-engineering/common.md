Common web software-engineering design questions

Should you create HTML with javascript/frameworks?
This depends on the part of the web design you're building. If you are prototyping/testing & frequently change the structure, then keeping it in plain HTML is less work. However, for elements that are created dynamically (modals, tooltips, notifications) then you can't clutter the HTML with markup—js/frameworks are better here.