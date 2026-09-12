// const Body = dv.el('section', null);
// await dv.view("Section", { Text: "README.md", Body: Body, Open: 1 });
// const variable = Body.append(dv.el('div', (  dv.current().description ?? "No description")));




const helper = dv.el('details');

const content_container = dv.el('div');
helper.style.cssText = `background: var(--color-base-30); box-shadow: 0px 15px 25px var(--shadow); border-radius: 15px; position: fixed; font-size: 0.75em; max-width: 250px; top: 70px; right: 25px; z-index: 9;`

content_container.style.cssText = 'padding: 15px; max-height: 200px; overflow-y: auto;'

helper.append(dv.el('summary', 'README.md'));
helper.append(content_container);

// content for showing
// content_container.append(dv.el('div', `${dv.current().description ?? "File has no description."}`))
content_container.append(dv.el('div', dv.current().description))

/** 
 * Check if current file has a 'README.md' file at the folder root.
 * Like GitHub
*/
let readme_contents;

/** Check
 * Bool
 */
const bool_has_readme = dv.page(dv.current().file.path.replace('.md', '') + "/README.md");

/** Logic
 * Branching
 */
if (bool_has_readme){

    readme_contents = await dv.io.load(bool_has_readme.file.path)
    
    const blink = dv.el('a', "Open README.md");
    // blink.style.cssText = `padding: 5px 10px;--text-faint: white; --link-color: white; border-radius: 50px; vertical-align: middle; float: right; background: var(--color-blue);`;
    blink.style.cssText = `font-size: 0.9em; float: right;`;
    blink.classList.add('internal-link');
    blink.setAttribute('data-tooltip-position', 'top');
    blink.setAttribute('aria-label', bool_has_readme.file.path);
    blink.setAttribute('href', bool_has_readme.file.path);
    blink.setAttribute('target', "_blank");
    blink.setAttribute('rel', "noopener");
    blink.setAttribute('rel', "nofollow");

    /** Content for flaoting readme */
    content_container.append(dv.el('div', `${readme_contents}<br><br>`), dv.el('sup', blink))
} else {

    readme_contents = "<div style='height: 20vh; display: flex; justify-content: center; align-items: center; opacity: 0.3; font-size: 0.9em;'>No README found for project.</div>"
    content_container.append(dv.el('div', `${readme_contents}`))
}