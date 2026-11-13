import { html } from "../../../lib/com.webtools3/main.js";
import { tree } from "../../tree.js";

tree.stage.content = new html('section').cssq('width-[readable] content body');
tree.stage.insert(tree.stage.content);