An editor that lives inside the website, would be so useful on mobile! for example, we could edit real files within the website, while on mobile. and we could implement our own workflows, like alternative file explorers and commands and things that make editing faster.

secondarily, for any nuances like formatting guidelines, or special elements that interact with the website, although the wiki itself is plain text and source files, the editor could supercharge the editing experience! it would basically be like obsidian, cross-platform, but dedicated to our wiki, and using our website as a remote editing tool. 

also, we've always dreamed of creating our own obsidian tool. our very own text editor. because we had so many ideas for improvements upon obsidian, rather than developing plugins to extend the functionality of upsetting, we thought it would be so much fun to create our very own editor from scratch. 

but as with all things in programming, it was way harder than it appeared. however, now with our web system in place, having an editor that lives inside the website, would simply offer another portal to read and edit the same source of files, without the actual wiki existing in the website. so this follows our websys architecture!

Wireframe model for websys file-editor
- PHP Server (since our hosting provider, Infinity free, only supports php, not python or node.js. so PHP is our only option for file system interaction)
- Edit file - would be a internal command in our websys Command-API
- Request for merge - instead of anyone having the ability to change files (like in Wikipedia) or  having to implement a password login system (just for article editing), we would implement "request" as a main function. This would only push changes to the actual files, once we authorize them on our Linux machine. this is essentially how a real Wikipedia editor system works! the editor exists inside the system, and only the administrators can authorize article changes.

Basically the editor could have a strong Git aesthetic and influence. this way, instead of pushing directly to our website, we pushed to GitHub and then our website. so that we can access GitHub's features, so that we can diff...