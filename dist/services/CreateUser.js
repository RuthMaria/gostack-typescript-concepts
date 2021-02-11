"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password, techs = _a.techs, repositories = _a.repositories;
    var user = {
        name: name,
        email: email,
        password: password,
        techs: techs,
        repositories: repositories
    };
    return user;
}
exports.default = createUser;
