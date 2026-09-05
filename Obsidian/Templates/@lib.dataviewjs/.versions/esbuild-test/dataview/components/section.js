// Execute dataviewjs function call using "input"
Section(input);

/**
 * Passing in {Text, Body}, this component will create a generate a collapsible section of HTML.
 */
function Section({ Text, Body, Open }) {

		/** Add det */
    const details = dv.el('details');
    details.append(dv.el('summary', Text));
    
    if (Open){
        details.setAttribute('open', true);
    }
    
    // details.style.cssText = `font-size: .8em; position: sticky; left: 0;`

    // If there is no HTML attached to section
    if (!Body){
        const empt = dv.el('div', "Section is empty, no HTML attached");
        empt.style.cssText = 'height: 35vh; opacity: 0.3; width: 100%;  display: flex; justify-content: center; align-items: center;'
        details.append(empt);
    } else { 
        Body.style.cssText += 'margin-left: 1.5rem; padding-bottom: 1rem;'
        details.append(Body);
    }
    return details;
}
