import { Exports as Cybernetica } from "./main.js";

new Cybernetica.System.Program("Prototype");
new Cybernetica.Arch.Log().msg("A new program has been created: {t = program}. It can now be referenced, queried, and interacted as data.");

new Cybernetica.System.Data(32).as('y');
new Cybernetica.Arch.Log().msg("A new data block has been created in the program");
new Cybernetica.Arch.Log().issue("How do we log the 'Data' above into the console? If variable classical programming syntax is changed, how does Cybernetica keep track of Data internally?");

new Cybernetica.Arch.Log().msg("The value of 'y' is {y}");