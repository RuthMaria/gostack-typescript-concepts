"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
var Techs;
(function (Techs) {
    Techs[Techs["React"] = 0] = "React";
    Techs[Techs["Angular"] = 1] = "Angular";
    Techs[Techs["Vue"] = 2] = "Vue";
})(Techs || (Techs = {}));
;
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'ruthmariia01@gmail.com',
        password: '12344',
        techs: [
            "NodeJs",
            "ReactJS",
            "React Native",
            {
                title: 'jacascript',
                experience: 100
            }
        ],
        repositories: ["Frontend", "backend", "mobile"]
    });
    return response.json(user);
}
exports.helloWorld = helloWorld;
