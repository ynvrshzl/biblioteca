import { tree } from "../tree.js";
import { Element, Header, Image } from "../../wiki/lib.js";
import { Button } from "../../lib/com.webtools3/main.js";


const container = new Element('div')
    .css_list('modal', 'container', 'greeting', 'hello', 'onboarding')
    .chain([
        new Button().c('-').css_list('exit', 'close', 'mod-action').evtclick(function_modal_close),
        new Element('div').css_list('modal', 'header').chain([
            new Image({ src: 'https://images.pexels.com/photos/33441869/pexels-photo-33441869.jpeg?w=900' })
        ]),
        new Element('div').css_list('modal', 'body', 'content').chain([
            // new Element('h1').c('Biblioteca'),
            new Element('h2').c('Welcome to the Biblioteca Web'),
            new Element('p').c('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis hic nemo tenetur blanditiis enim aperiam voluptatum rem, tempore dolor alias non eum sint nostrum. Provident quod corporis dolores fuga.'),
            new Element('hr'),
            new Element('div').c('To gauge your experience around the Cosmoverse, What is your Cosmonaut level?'),

            new Element('div').css_list('modal', 'buttons-container').chain([
                new Button().c('Disable in Settings'),
                new Button().c('I know my way around'),
                new Button().c('Walk me through a Tour'),
            ]),
        ])
    ]).attach(tree.shell)

const bg = new Element('div')
    .css_list('modal', 'backdrop')
    .attach(tree.shell)

function function_modal_close(e) {
    container.src.remove();
    bg.src.remove();
}
/**
 * description: todo moving proper re-useable component logic
 */
bg.src.addEventListener('pointerdown', function_modal_close, { once: true })