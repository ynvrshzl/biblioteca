import { Cell, Element, Header, Hyperlink, Image } from "../wiki/lib.js";
import { tree } from "../src/tree.js";
import { database } from "../lib/com.editor/database.js";

/**
 * todo: moving this to stage-api
 */
const stage = tree.stage;
/**
 * test: testing actual domains
 */
const domains = ['Library', 'Observatory', 'Youniverse', 'Kosmokonica', 'Science', 'Mathematics', 'Youniversity', 'Newsroom', 'Data Centre (DB)', 'Matrix'];

stage.empt()
stage.chain([
    /**
     * todo: making this a template flow row container
     * tracking-id: fcd-9df
     */
    new Element('section').css_list('hero-fluid-row', 'container', 'row', 'gap-[5px]').chain([
        /**
         * todo: how can we more elegantly map the array of elements here?
         * premise: build loop+chain method?
         */
        ...domains.map((domain, i) =>
            new Element('div').css_list('hero-card', 'flex', 'gap-[5px]', 'space-apart').attr({ draggable: "true" }).chain([

                /**
                 * label: Left-region content container
                 */
                new Element('span').css_list('flex', 'column', 'max-height', 'align-end').chain([
                    /**
                     * label: Index label
                     */
                    new Element('span').css_list('flex', 'column').chain([
                        new Element('span').c(i),
                    ]),
                    /**
                     * label: Title
                     */
                    new Element('span').css_list('flex', 'column', 'max-height', 'align-end').chain([

                        new Element('span').css_list('placeholder-thumbnail', 'sample-thumbnail'),
                        new Element('hr'),
                        new Element('span').css_list('title').c(domain),
                        new Element('span').css_list('label').c('Description about space goes here...'),
                    ]),
                ]),
                /**
                 * label: Right-hand contaner
                 */
                new Element('span').css_list('flex', 'column', 'max-height', 'align-end').chain([
                    new Element('button').css_list('title').c('Open'),
                ]),
                /**
                 * label: Background image
                 */
                // new Image({ src: 'https://images.pexels.com/photos/5549190/pexels-photo-5549190.jpeg' }).css_list('background-hero-card'),

            ])

        )
    ]),
    /**
     * type: label
     * todo: abstract into semantic class 'label' so it is self-explanatory
     */
    new Element('hr'),
    new Element('div').css_list('label', 'flex', 'center').c('Featured Domains'),
    /**
     * todo: make this into template beautiful
     */
    new Element('section').css_list('flex', 'column', 'center', 'hero-pre-header').attr({ style: '' }).chain([
        new Element('span').css_list('title').c('Biblioteca'),
        new Element('span').css_list('label').c('Read more about this project ').insert(new Hyperlink({ href: '#', text: 'here.' })),
        new Element('span').css_list('label').insert(new Cell().lorem())
    ]),

    new Element('section').css_list('flex', 'column', 'center', 'hero-pre-header').attr({ style: '' }).chain([
        new Element('span').css_list('title').c('Pinned'),
        new Element('span').css_list('label').insert(new Cell().lorem())
    ]),
    new Element('section').css_list('flex', 'center', 'hero-pre-header').chain([
        new Element('span').css_list('label').c('Coming soon.')
    ])

]);
