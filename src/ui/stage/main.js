import { Element} from "../../../lib/com.webtools3/main.js";
import { tree } from "../../tree.js";

tree.stage.content = new Element('section').cssq('width-[readable] content body');
tree.stage.insert(tree.stage.content);