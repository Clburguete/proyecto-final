webpackJsonp([1,5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatasheetsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DatasheetsService = (function () {
    function DatasheetsService(http) {
        this.http = http;
        this.options = { withCredentials: true };
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL;
    }
    DatasheetsService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    DatasheetsService.prototype.investFormRelate = function (userId, formId) {
        return this.http.post(this.BASEURL + "/signup/invrelate", [formId, userId], this.options)
            .map(function (res) {
            console.log("FORM RELATED WITH USER!");
            //return res.json();
        })
            .catch(this.handleError);
    };
    DatasheetsService.prototype.investmentCreate = function (form, userId) {
        var _this = this;
        return this.http.post(this.BASEURL + "/signup/investordata", form, this.options)
            .map(function (res) {
            _this.investFormRelate(userId, res.json()._id).subscribe();
            return res.json();
        })
            .catch(this.handleError);
    };
    DatasheetsService.prototype.investmentUpdate = function (form, userId) {
        return this.http.post(this.BASEURL + "/edit/investordata", [form, userId], this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DatasheetsService.prototype.startupFormCreate = function (form, userId) {
        var _this = this;
        console.log("IDS-->" + form + " " + userId);
        return this.http.post(this.BASEURL + "/signup/startupdata", form, this.options)
            .map(function (res) {
            console.log("Con raul-->", res);
            _this.startupFormRelate(userId, res.json()._id).subscribe();
            return res.json();
        })
            .catch(this.handleError);
    };
    DatasheetsService.prototype.startupFormRelate = function (userId, formId) {
        console.log("RELATE IDS-->" + formId + " " + userId);
        return this.http.post(this.BASEURL + "/signup/startrelate", [formId, userId], this.options)
            .map(function (res) {
            console.log("FORM RELATED WITH USER!");
            //return res.json();
        })
            .catch(this.handleError);
    };
    DatasheetsService.prototype.startupUpdate = function (form, userId) {
        return this.http.post(this.BASEURL + "/edit/startupdata", [form, userId], this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    DatasheetsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DatasheetsService);
    return DatasheetsService;
    var _a;
}());
//# sourceMappingURL=datasheets.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    BASE_URL: "http://localhost:3000"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 1064:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessageService = (function () {
    function MessageService(http, session) {
        this.http = http;
        this.session = session;
        this.options = { withCredentials: true };
        this.messageEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].BASE_URL;
    }
    MessageService.prototype.createMessage = function (message) {
        return this.http.post(this.BASEURL + "/message/new", message, this.options)
            .map(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    MessageService.prototype.showMessages = function (id) {
        var _this = this;
        return this.http.get(this.BASEURL + "/messages/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    MessageService.prototype.showUserMessages = function (id) {
        var _this = this;
        return this.http.get(this.BASEURL + "/inbox/" + id, this.options)
            .map(function (res) { return res.json(); })
            .map(function (messages) { _this.messageEvent.emit(messages); return messages; })
            .catch(function (err) { return _this.handleError(err); });
    };
    MessageService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    MessageService.prototype.deleteMessage = function (id) {
        var _this = this;
        return this.http.get(this.BASEURL + "/delete-message/" + id, this.options)
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    MessageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__session_service__["a" /* SessionService */]) === 'function' && _b) || Object])
    ], MessageService);
    return MessageService;
    var _a, _b;
}());
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http) {
        this.http = http;
        this.options = { withCredentials: true };
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL;
        this.loginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SessionService.prototype.getLoginEmitter = function () {
        return this.loginEvent;
    };
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.BASEURL + "/signup", user, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASEURL + "/login", user, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { _this.loggedUser = user; _this.loginEvent.emit(user); return user; })
            .catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.BASEURL + "/logout", {}, this.options)
            .map(function (res) { return res.json(); })
            .map(function (response) { _this.loggedUser = null; _this.loginEvent.emit(null); return response; })
            .catch(this.handleError);
    };
    SessionService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(this.BASEURL + "/loggedin", this.options)
            .map(function (res) { console.log('EL USUARSSS', _this.loggedUser); return res.json(); })
            .map(function (user) { _this.loggedUser = user; _this.loginEvent.emit(user); return user; })
            .catch(function (err) { return _this.handleError(err); });
    };
    SessionService.prototype.getPrivateData = function () {
        return this.http.get(this.BASEURL + "/private", this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    SessionService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SessionService);
    return SessionService;
    var _a;
}());
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditinvestorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditinvestorComponent = (function () {
    function EditinvestorComponent(session, dataService) {
        this.session = session;
        this.dataService = dataService;
        this.InvestorForm = {
            connections: '',
            interests: '',
            budget: '',
            investreturn: ''
        };
    }
    EditinvestorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.getLoginEmitter().subscribe(function (user) { return _this.loggedUser = user; });
        this.loggedUser = this.session.loggedUser;
    };
    EditinvestorComponent.prototype.update = function () {
        var _this = this;
        this.dataService.investmentUpdate(this.InvestorForm, this.loggedUser._id)
            .subscribe(function (data) { return _this.successCb(data); }, function (err) { return _this.errorCb(err); });
    };
    EditinvestorComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.data = null;
    };
    EditinvestorComponent.prototype.successCb = function (data) {
        this.data = data;
        this.error = null;
    };
    EditinvestorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editinvestor',
            template: __webpack_require__(770),
            styles: [__webpack_require__(745)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */]) === 'function' && _b) || Object])
    ], EditinvestorComponent);
    return EditinvestorComponent;
    var _a, _b;
}());
//# sourceMappingURL=editinvestor.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditstartupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditstartupComponent = (function () {
    function EditstartupComponent(session, dataService) {
        this.session = session;
        this.dataService = dataService;
        this.StartupForm = {
            category: '',
            lookingfor: '',
            investinterest: '',
            budget: '',
            lastrevenue: [],
            expectedrevenue: []
        };
    }
    EditstartupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.getLoginEmitter().subscribe(function (user) { return _this.loggedUser = user; });
        this.loggedUser = this.session.loggedUser;
        console.log("USERRRRRR", this.loggedUser);
    };
    EditstartupComponent.prototype.update = function () {
        var _this = this;
        this.dataService.startupUpdate(this.StartupForm, this.loggedUser._id)
            .subscribe(function (data) { return _this.successCb(data); }, function (err) { return _this.errorCb(err); });
    };
    EditstartupComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.data = null;
    };
    EditstartupComponent.prototype.successCb = function (data) {
        this.data = data;
        this.error = null;
    };
    EditstartupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editstartup',
            template: __webpack_require__(771),
            styles: [__webpack_require__(746)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */]) === 'function' && _b) || Object])
    ], EditstartupComponent);
    return EditstartupComponent;
    var _a, _b;
}());
//# sourceMappingURL=editstartup.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(info, session) {
        this.info = info;
        this.session = session;
        this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true
        };
        this.barChartLabels = ['Technology', 'Services', 'Hardware'];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [], label: 'Investors' },
            { data: [], label: 'Startups' }
        ];
        this.barChartColors = [
            {
                backgroundColor: "#184242",
                borderColor: 'rgba(225,10,24,0)',
                pointBackgroundColor: 'rgba(225,10,24,0)',
            },
            {
                backgroundColor: '#edfff6',
                borderColor: 'rgba(225,10,24,0)',
                pointBackgroundColor: 'rgba(225,10,24,0)',
            }];
        this.doughnutChartLabels = ['Investors', 'Startups'];
        this.doughnutChartData = [300, 500, 100];
        this.doughnutChartColors = [{ backgroundColor: ["#184242", '#edfff6', "#a4c73c", "#a4add3"], borderColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)', 'rgba(0,0,0,0)'] }];
        this.doughnutChartType = 'doughnut';
        this.chartDisabled = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUser = this.session.loggedUser;
        this.session.getLoginEmitter().subscribe(function (user) { return _this.loggedUser = user; });
        $('.slider').slider({ indicators: false, interval: 2500, transition: 2000 });
        this.info.homeShowAll()
            .subscribe(function (response) { return _this.successCb(response); }, function (err) { return _this.errorCb(err); });
    };
    HomeComponent.prototype.memberCalculate = function (list) {
        var invList = [];
        var startList = [];
        var techInv = [];
        var techStart = [];
        var servInv = [];
        var servStart = [];
        var hardInv = [];
        var hardStart = [];
        list.forEach(function (user) {
            if (user.role === 'investor')
                invList.push(user);
            if (user.role === 'startup')
                startList.push(user);
        });
        this.doughnutChartData = [startList.length, invList.length];
        console.log('STARTUPS', startList);
        startList.forEach(function (startup) {
            if (startup.start_datasheets.category === 'technology')
                techStart.push(startup);
            if (startup.start_datasheets.category === 'services')
                servStart.push(startup);
            if (startup.start_datasheets.category === 'hardware')
                hardStart.push(startup);
        });
        invList.forEach(function (investor) {
            if (investor.inv_datasheets.interests === 'technology')
                techInv.push(investor);
            if (investor.inv_datasheets.interests === 'services')
                servInv.push(investor);
            if (investor.inv_datasheets.interests === 'hardware')
                hardInv.push(investor);
        });
        this.barChartData[0].data[0] = techInv.length;
        this.barChartData[0].data[1] = servInv.length;
        this.barChartData[0].data[2] = hardInv.length;
        this.barChartData[1].data[0] = techStart.length;
        this.barChartData[1].data[1] = servStart.length;
        this.barChartData[1].data[2] = hardStart.length;
        this.chartDisabled = false;
        console.log("TechInv: ", techInv);
        console.log('TechStart: ', techStart);
        console.log('servInv: ', servInv);
        console.log('servStrt: ', servStart);
        console.log('hardInv: ', hardInv);
        console.log('hardStart: ', hardStart);
    };
    HomeComponent.prototype.investCalculate = function (list) {
        var realInvestors = [];
        list.forEach(function (investor) {
            if (investor.role === "investor") {
                realInvestors.push(investor.inv_datasheets.budget);
            }
        });
        var totalMoney = realInvestors.reduce(function (firstValue, secondValue) { return firstValue + secondValue; });
        this.totalInvestment = totalMoney;
        console.log(realInvestors);
        console.log(this.totalInvestment);
    };
    HomeComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.investorList = [null];
    };
    HomeComponent.prototype.successCb = function (list) {
        this.investorList = list;
        this.error = null;
        this.investCalculate(this.investorList);
        this.memberCalculate(this.investorList);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(772),
            styles: [__webpack_require__(747)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InboxComponent = (function () {
    function InboxComponent(session, inbox, route) {
        this.session = session;
        this.inbox = inbox;
        this.route = route;
    }
    InboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("entraa", this.session.loggedUser);
        this.session.isLoggedIn().subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.route.params
            .subscribe(function (params) {
            _this.receiverId = params['id'];
            _this.inbox.showUserMessages(_this.receiverId)
                .subscribe(function (response) {
                return _this.messageList = response;
            }, function (err) { return _this.error = err; });
        });
    };
    InboxComponent.prototype.delete = function (id) {
        var _this = this;
        this.inbox.deleteMessage(id).subscribe(function (success) {
            _this.inbox.showUserMessages(_this.receiverId)
                .subscribe(function (response) {
                return _this.messageList = response;
            }, function (err) { return _this.error = err; });
        });
    };
    InboxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inbox',
            template: __webpack_require__(773),
            styles: [__webpack_require__(748)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], InboxComponent);
    return InboxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=inbox.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorDashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvestorDashboardComponent = (function () {
    function InvestorDashboardComponent() {
    }
    InvestorDashboardComponent.prototype.ngOnInit = function () {
    };
    InvestorDashboardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-investor-dashboard',
            template: __webpack_require__(774),
            styles: [__webpack_require__(749)]
        }), 
        __metadata('design:paramtypes', [])
    ], InvestorDashboardComponent);
    return InvestorDashboardComponent;
}());
//# sourceMappingURL=investor-dashboard.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestordetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestordetailComponent = (function () {
    function InvestordetailComponent(route, userService, session) {
        this.route = route;
        this.userService = userService;
        this.session = session;
    }
    InvestordetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            console.log(user);
            _this.loggedUser = user;
        });
        this.route.params
            .subscribe(function (params) {
            _this.investorId = params['id'];
            _this.userService.showOne(_this.investorId)
                .subscribe(function (response) { return _this.successCb(response); }, function (err) { return _this.errorCb(err); });
        });
    };
    InvestordetailComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    InvestordetailComponent.prototype.successCb = function (user) {
        this.user = user;
        this.error = null;
    };
    InvestordetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-investordetail',
            template: __webpack_require__(775),
            styles: [__webpack_require__(750)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === 'function' && _c) || Object])
    ], InvestordetailComponent);
    return InvestordetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=investordetail.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestorformComponent = (function () {
    function InvestorformComponent(session, dataService, router) {
        this.session = session;
        this.dataService = dataService;
        this.router = router;
        this.InvestorForm = {
            connections: '',
            interests: '',
            budget: '',
            investreturn: ''
        };
    }
    InvestorformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            _this.loggedUser = user;
        });
    };
    InvestorformComponent.prototype.create = function () {
        var _this = this;
        this.dataService.investmentCreate(this.InvestorForm, this.loggedUser._id)
            .subscribe(function (data) {
            return _this.successCb(data);
        }, function (err) { return _this.errorCb(err); });
    };
    InvestorformComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.data = null;
    };
    InvestorformComponent.prototype.successCb = function (data) {
        this.data = data;
        this.error = null;
    };
    InvestorformComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-investorform',
            template: __webpack_require__(776),
            styles: [__webpack_require__(751)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_datasheets_service__["a" /* DatasheetsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], InvestorformComponent);
    return InvestorformComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=investorform.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvestorsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvestorsComponent = (function () {
    function InvestorsComponent(investors, session, router) {
        this.investors = investors;
        this.session = session;
        this.router = router;
    }
    InvestorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.session.loggedUser;
        this.investors.showAll()
            .subscribe(function (response) { return _this.successCb(response); }, function (err) { return _this.errorCb(err); });
    };
    InvestorsComponent.prototype.goToStartups = function () {
        this.router.navigate(['startups']);
    };
    InvestorsComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.investorList = [null];
    };
    InvestorsComponent.prototype.successCb = function (list) {
        this.investorList = list;
        this.error = null;
        console.log(this.investorList);
    };
    InvestorsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-investors',
            template: __webpack_require__(777),
            styles: [__webpack_require__(752)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], InvestorsComponent);
    return InvestorsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=investors.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.formInfo = {
            username: '',
            password: '',
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        //  this.session.isLoggedIn().subscribe();
        this.session.getLoginEmitter().subscribe(function (user) { return _this.user = user; });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.formInfo)
            .subscribe(function (user) {
            _this.successCb(user);
        }, function (err) { return _this.errorCb(err); });
    };
    LoginComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    LoginComponent.prototype.successCb = function (user) {
        this.user = user;
        if (this.user.role === "investor") {
            this.router.navigate(['startups']);
        }
        else if (this.user.role === "startup") {
            this.router.navigate(['investors']);
        }
        this.error = null;
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(778),
            styles: [__webpack_require__(753)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewMessageComponent = (function () {
    function NewMessageComponent(userService, route, session, messaging, router) {
        this.userService = userService;
        this.route = route;
        this.session = session;
        this.messaging = messaging;
        this.router = router;
    }
    NewMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            _this.loggedUser = user;
        });
        this.loggedUser = this.session.loggedUser;
        this.route.params
            .subscribe(function (params) {
            _this.receiverId = params['id'];
            _this.userService.showOne(_this.receiverId)
                .subscribe(function (response) { return _this.successUserCb(response); }, function (err) { return _this.errorUserCb(err); });
        });
    };
    NewMessageComponent.prototype.create = function () {
        console.log("creating...");
        var newMessage = {
            to: this.receiverId,
            from: this.loggedUser._id,
            content: this.content
        };
        this.messaging.createMessage(newMessage)
            .subscribe();
    };
    NewMessageComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.data = null;
    };
    NewMessageComponent.prototype.successCb = function (data) {
        this.data = data;
        this.error = null;
    };
    NewMessageComponent.prototype.errorUserCb = function (err) {
        this.error = err;
        this.receiver = null;
    };
    NewMessageComponent.prototype.successUserCb = function (data) {
        this.receiver = data;
        this.error = null;
    };
    NewMessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-message',
            template: __webpack_require__(779),
            styles: [__webpack_require__(754)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["a" /* MessageService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === 'function' && _e) || Object])
    ], NewMessageComponent);
    return NewMessageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(session, router) {
        this.session = session;
        this.router = router;
        this.formInfo = {
            username: '',
            password: '',
            role: '',
        };
        this.privateData = '';
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        console.log(this.formInfo);
        this.session.signup(this.formInfo)
            .subscribe(function (user) {
            _this.successCb(user), _this.session.login(_this.formInfo)
                .subscribe(function (user) { return _this.successCb(user); }, function (err) { return _this.errorCb(err); });
        }, function (err) { return _this.errorCb(err); });
    };
    SignupComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.user = null;
    };
    SignupComponent.prototype.successCb = function (user) {
        this.user = user;
        if (user.role === "investor") {
            this.router.navigate(['investordata']);
        }
        else if (user.role === "startup") {
            this.router.navigate(['startupdata']);
        }
        this.error = null;
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(780),
            styles: [__webpack_require__(755)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupdetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartupdetailComponent = (function () {
    function StartupdetailComponent(route, business, session) {
        this.route = route;
        this.business = business;
        this.session = session;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Last revenue (in €)' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expected revenue (in €)' },
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(43,123,123,0.5)',
                borderColor: 'rgba(148,159,177,0)',
                pointBackgroundColor: 'rgba(148,159,177,0)',
                pointBorderColor: 'rgba(148,159,177,0)',
                pointHoverBackgroundColor: 'rgba(148,159,177,0)',
                pointHoverBorderColor: 'rgba(148,159,177,0.0)'
            },
            {
                backgroundColor: 'rgba(133,208,208,0.5)',
                borderColor: 'rgba(148,159,177,0)',
                pointBackgroundColor: 'rgba(148,159,177,0)',
                pointBorderColor: 'rgba(148,159,177,0)',
                pointHoverBackgroundColor: 'rgba(148,159,177,0)',
                pointHoverBorderColor: 'rgba(148,159,177,0.0)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    StartupdetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loggedUser = this.session.loggedUser;
        this.route.params
            .subscribe(function (params) {
            _this.startupId = params['id'];
            _this.business.showOne(_this.startupId)
                .subscribe(function (response) { _this.successCb(response); }, function (err) { _this.errorCb(err); });
        });
    };
    StartupdetailComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.startup = null;
    };
    StartupdetailComponent.prototype.successCb = function (startup) {
        this.startup = startup;
        this.lineChartData[0].data = this.startup.start_datasheets.lastrevenue;
        this.lineChartData[1].data = this.startup.start_datasheets.expectedrevenue;
        console.log("Startup-->", this.startup);
        this.error = null;
    };
    StartupdetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-startupdetail',
            template: __webpack_require__(783),
            styles: [__webpack_require__(758)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_session_service__["a" /* SessionService */]) === 'function' && _c) || Object])
    ], StartupdetailComponent);
    return StartupdetailComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=startupdetail.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_datasheets_service__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartupformComponent = (function () {
    function StartupformComponent(session, router, data) {
        this.session = session;
        this.router = router;
        this.data = data;
        this.StartupForm = {
            category: '',
            lookingfor: '',
            investinterest: '',
            budget: '',
            lastrevenue: [],
            expectedrevenue: []
        };
    }
    StartupformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            _this.loggedUser = user;
        });
    };
    StartupformComponent.prototype.create = function () {
        var _this = this;
        console.log(this.StartupForm);
        this.data.startupFormCreate(this.StartupForm, this.loggedUser._id)
            .subscribe(function (data) {
            return _this.successCb(data);
        }, function (err) { return _this.errorCb(err); });
    };
    StartupformComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.data = null;
    };
    StartupformComponent.prototype.successCb = function (data) {
        this.data = data;
        console.log("Data-->" + this.data);
        this.error = null;
    };
    StartupformComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-startupform',
            template: __webpack_require__(784),
            styles: [__webpack_require__(759)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_datasheets_service__["a" /* DatasheetsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_datasheets_service__["a" /* DatasheetsService */]) === 'function' && _c) || Object])
    ], StartupformComponent);
    return StartupformComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=startupform.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartupComponent = (function () {
    function StartupComponent(startups, session) {
        this.startups = startups;
        this.session = session;
    }
    StartupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.isLoggedIn().subscribe(function (user) {
            console.log(user);
            _this.user = user;
        });
        this.startups.showAll()
            .subscribe(function (response) { return _this.successCb(response); }, function (err) { return _this.errorCb(err); });
    };
    StartupComponent.prototype.errorCb = function (err) {
        this.error = err;
        this.startupList = [null];
    };
    StartupComponent.prototype.successCb = function (list) {
        this.startupList = list;
        this.error = null;
    };
    StartupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-startups',
            template: __webpack_require__(785),
            styles: [__webpack_require__(760)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === 'function' && _b) || Object])
    ], StartupComponent);
    return StartupComponent;
    var _a, _b;
}());
//# sourceMappingURL=startups.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 514;


/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(607);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(104);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messages_service__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(messages, session, router) {
        this.messages = messages;
        this.session = session;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.session.getLoginEmitter().subscribe(function (user) {
            _this.loggedUser = user;
            _this.showNumberMessages();
        });
        this.messages.messageEvent.subscribe(function (messages) { return _this.userMessages = messages; });
    };
    AppComponent.prototype.showNumberMessages = function () {
        var _this = this;
        if (!this.loggedUser)
            return;
        console.log("User Logged in, getting messages....");
        this.messages.showUserMessages(this.loggedUser._id).subscribe(function (message) { return _this.userMessages = message; });
    };
    AppComponent.prototype.logout = function () {
        this.session.logout().subscribe();
        this.router.navigate(['']);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(769),
            styles: [__webpack_require__(744)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_messages_service__["a" /* MessageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_paths__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts__ = __webpack_require__(763);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_session_service__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_datasheets_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_messages_service__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_capitalize_pipe__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__investors_investors_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__single_investor_single_investor_component__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__investordetail_investordetail_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__startups_startups_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__single_startup_single_startup_component__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__startupdetail_startupdetail__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__investor_dashboard_investor_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__editinvestor_editinvestor_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__investorform_investorform_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__startupform_startupform_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__new_message_new_message_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__inbox_inbox_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__editstartup_editstartup_component__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pipes_capitalize_pipe__["a" /* CapitalizePipe */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_15__investors_investors_component__["a" /* InvestorsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__single_investor_single_investor_component__["a" /* SingleInvestorComponent */],
                __WEBPACK_IMPORTED_MODULE_17__investordetail_investordetail_component__["a" /* InvestordetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__startups_startups_component__["a" /* StartupComponent */],
                __WEBPACK_IMPORTED_MODULE_19__single_startup_single_startup_component__["a" /* SingleStartupComponent */],
                __WEBPACK_IMPORTED_MODULE_20__startupdetail_startupdetail__["a" /* StartupdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_21__investor_dashboard_investor_dashboard_component__["a" /* InvestorDashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__editinvestor_editinvestor_component__["a" /* EditinvestorComponent */],
                __WEBPACK_IMPORTED_MODULE_23__investorform_investorform_component__["a" /* InvestorformComponent */],
                __WEBPACK_IMPORTED_MODULE_24__startupform_startupform_component__["a" /* StartupformComponent */],
                __WEBPACK_IMPORTED_MODULE_25__new_message_new_message_component__["a" /* NewMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_26__inbox_inbox_component__["a" /* InboxComponent */],
                __WEBPACK_IMPORTED_MODULE_27__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_28__editstartup_editstartup_component__["a" /* EditstartupComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__route_paths__["a" /* Paths */]),
                __WEBPACK_IMPORTED_MODULE_6_ng2_charts__["ChartsModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__services_session_service__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_8__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__services_datasheets_service__["a" /* DatasheetsService */],
                __WEBPACK_IMPORTED_MODULE_10__services_messages_service__["a" /* MessageService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CapitalizePipe = (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (input, args) {
        if (!input) {
            return '';
        }
        input = input.toLowerCase();
        return input.substring(0, 1).toUpperCase() + input.substring(1);
    };
    CapitalizePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'capitalize'
        }), 
        __metadata('design:paramtypes', [])
    ], CapitalizePipe);
    return CapitalizePipe;
}());
//# sourceMappingURL=capitalize.pipe.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__investors_investors_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__investordetail_investordetail_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__startups_startups_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__startupdetail_startupdetail__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__investor_dashboard_investor_dashboard_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editinvestor_editinvestor_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__investorform_investorform_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__startupform_startupform_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_message_new_message_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inbox_inbox_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__editstartup_editstartup_component__ = __webpack_require__(344);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Paths; });














var Paths = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'investordata', component: __WEBPACK_IMPORTED_MODULE_8__investorform_investorform_component__["a" /* InvestorformComponent */] },
    { path: 'startupdata', component: __WEBPACK_IMPORTED_MODULE_9__startupform_startupform_component__["a" /* StartupformComponent */] },
    { path: 'investors', component: __WEBPACK_IMPORTED_MODULE_2__investors_investors_component__["a" /* InvestorsComponent */] },
    { path: 'investors/:id', component: __WEBPACK_IMPORTED_MODULE_3__investordetail_investordetail_component__["a" /* InvestordetailComponent */] },
    { path: 'investors/:id/edit', component: __WEBPACK_IMPORTED_MODULE_7__editinvestor_editinvestor_component__["a" /* EditinvestorComponent */] },
    { path: 'startups', component: __WEBPACK_IMPORTED_MODULE_4__startups_startups_component__["a" /* StartupComponent */] },
    { path: 'startups/:id', component: __WEBPACK_IMPORTED_MODULE_5__startupdetail_startupdetail__["a" /* StartupdetailComponent */] },
    { path: 'startups/:id/edit', component: __WEBPACK_IMPORTED_MODULE_13__editstartup_editstartup_component__["a" /* EditstartupComponent */] },
    { path: 'invboard', component: __WEBPACK_IMPORTED_MODULE_6__investor_dashboard_investor_dashboard_component__["a" /* InvestorDashboardComponent */] },
    { path: 'message/:id', component: __WEBPACK_IMPORTED_MODULE_10__new_message_new_message_component__["a" /* NewMessageComponent */] },
    { path: 'inbox/:id', component: __WEBPACK_IMPORTED_MODULE_11__inbox_inbox_component__["a" /* InboxComponent */] }
];
//# sourceMappingURL=route-paths.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleInvestorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleInvestorComponent = (function () {
    function SingleInvestorComponent(router, session) {
        this.router = router;
        this.session = session;
    }
    SingleInvestorComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.session.loggedUser;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleInvestorComponent.prototype, "investor", void 0);
    SingleInvestorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-investor',
            template: __webpack_require__(781),
            styles: [__webpack_require__(756)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === 'function' && _b) || Object])
    ], SingleInvestorComponent);
    return SingleInvestorComponent;
    var _a, _b;
}());
//# sourceMappingURL=single-investor.component.js.map

/***/ }),

/***/ 642:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__(16);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleStartupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SingleStartupComponent = (function () {
    function SingleStartupComponent(session) {
        this.session = session;
    }
    SingleStartupComponent.prototype.ngOnInit = function () {
        this.loggedUser = this.session.loggedUser;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SingleStartupComponent.prototype, "startup", void 0);
    SingleStartupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'single-startup',
            template: __webpack_require__(782),
            styles: [__webpack_require__(757)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === 'function' && _a) || Object])
    ], SingleStartupComponent);
    return SingleStartupComponent;
    var _a;
}());
//# sourceMappingURL=single-startup.component.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].BASE_URL;
    }
    UserService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    UserService.prototype.homeShowAll = function () {
        var _this = this;
        return this.http.get(this.BASEURL + "/home/investors", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UserService.prototype.showAll = function () {
        var _this = this;
        return this.http.get(this.BASEURL + "/investors", { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UserService.prototype.showOne = function (id) {
        var _this = this;
        return this.http.get(this.BASEURL + "/investors/" + id, { withCredentials: true })
            .map(function (res) { return res.json(); })
            .catch(function (err) { return _this.handleError(err); });
    };
    UserService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UserService);
    return UserService;
    var _a;
}());
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.brand-logo{\n  padding-left: 20px;\n}\nnav{\n  background-color: #2b7b7b;\n  box-shadow: none;\n}\n.side-nav{\n  background-color:#2b7b7b ;\n\n}\nnav a{\n  color: #fff9f9;\n  font-size: 18px;\n  font-weight: 100;\n}\nnav a.brand-logo{\n  font-size: 28px;\n  font-weight: 300;\n}\n.username{\n  font-weight: normal!important;\n}\n.message-number{\n  height: 40px;\n  width: 40px;\n  display: inline;\n  border-radius: 50%;\n  background: black;\n  color: white\n}\n.logo-image{\n  margin-top: 10px;\n  height: 34px;\n  width: 34px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 745:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n}\na{\n  background-color: #588c73;\n}\n[type=\"radio\"]:checked + label:after{\n  background-color: #f9d0d6;\n  border: #f9d0d6;\n}\n\ninput[type=number]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n.waves-effect{\n\n    background-color: maroon;\n    float: right;\n  \n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 746:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n}\na{\n  background-color: #588c73;\n}\n[type=\"radio\"]:checked + label:after{\n  background-color: #f9d0d6;\n  border: #f9d0d6;\n}\n\ninput[type=number]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n.waves-effect{\n\n    background-color: maroon;\n    float: right;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".container{\n  margin: auto;\n}\n.home-image{\n  height: 150px;\n  padding-left: 40px;\n  padding-top: 50px;\n}\nh1{\n  font-weight: bolder;\n  color: white;\n}\n.image-container{\n  padding: 30px\n}\n.money{\n  color:#184242;\n}\n.chart{\n  margin-left: 10px;\n  display: inline-block;\n}\nh3{\n  padding-top: 25px;\n  font-weight: bolder;\n  color: rgba(0,0,0,0.8);\n}\nul, li{\n  background-color: rgba(0,0,0,0);\n}\n.link-contain{\n  padding: 40px;\n  text-align: center;\n}\n.links{\n  color: maroon;\n  display: inline;\n  font-weight: bolder;\n  font-size: 3.8rem;\n    line-height: 110%;\n    margin: 2.1rem 0 1.68rem 0;\n}\n.links:hover{\n  color:white;\n}\n.slider .slides{\n   background-color: rgba(0,0,0,0);\n }\n .main-container{\n   padding-top: 40px;\n   background: linear-gradient(180deg, #2b7b7b, rgba(108, 183, 183,0));\n    background-size: 100% 100%;\n    width: 100%;\n\n\n-webkit-animation: AnimationName 20s ease infinite;\nanimation: AnimationName 20s ease infinite;\n\n }\n\n\n @-webkit-keyframes AnimationName {\n     0%{background-position:0% 130%}\n     50%{background-position:80% 50%}\n     100%{background-position:0% 100%}\n }\n @keyframes AnimationName {\n     0%{background-position:0% 100%}\n     50%{background-position:80% 50%}\n     100%{background-position:0% 100%}\n }\n\n@media (max-width: 600px) {\n  h1, h3, links {\n    text-align: center;\n    font-size:2.5rem;\n }\n .home-image{\n   padding-left: 30px;;\n   margin: auto;\n}\n .slider{\n   max-height: 200px;\n   background-color: rgba(0,0,0,0);\n }\n\nli, ul{\n   max-height: 200px;\n }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".message-container{\n  padding-top: 40px;\n}\nlabel{\n  padding-top: 30px;\n  color: #588c73;\n  font-size: 1.2em;\n}\nh2 {\n  color: maroon;\n  font-weight: 300;\n}\n.username{\n  font-weight: 900;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\nul{\n  border-style: none;\n}\n.collection.with-header{\n  margin-top: 40px;\n}\n.collection.with-header .collection-header{\n  border-style: none;\n  border-bottom: 1px solid maroon;\n  background-color:  #59ffffff;\n  padding: 10px;\n}\n.collection-item{\n  border-style: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".row{\n  padding-top: 20px;\n}\n.col{\n  text-align: center;\n  height: 100px;\n   cursor: pointer;\n}\n.technology{\n  background-color: #f2e394;\n}\n.services{\n  background-color: #f2ae72;\n}\n.hardware{\n  background-color: #d96459;\n}\n.all{\n  background-color: #8c4646;\n}\n\nh3{\n  padding: 12px;\n  color: white;\n  -webkit-animation: color-change 3s linear infinite;\n  animation: color-change 3s linear infinite;\n}\n@-webkit-keyframes color-change {\n    0% {\n        color: rgba(255, 255, 255, 0.2);\n    }\n    25% {\n        color: rgba(255, 255, 255, 0.5);\n    }\n    50% {\n        color: rgba(255, 255, 255, 0.8);\n    }\n    75% {\n        color: rgba(255, 255, 255, 0.5)\n    }\n    100% {\n        color: rgba(255, 255, 255, 0.2)\n    }\n}\n\n@keyframes color-change {\n    0% {\n        color: rgba(255, 255, 255, 0.2);\n    }\n    25% {\n        color: rgba(255, 255, 255, 0.5);\n    }\n    50% {\n        color: rgba(255, 255, 255, 0.8);\n    }\n    75% {\n        color: rgba(255, 255, 255, 0.5)\n    }\n    100% {\n        color: rgba(255, 255, 255, 0.2)\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".col{\n  padding: 15px;\n}\n.card{\n  background-color: #edfff6;\n}\nh2 {\n  color: maroon;\n  padding: 15px;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 10px;\n}\n.money{\n  \n  color: #36654e;\n}\nh5{\n  padding: 1.44rem;\n  font-weight: lighter;\n}\n.waves-effect{\n  margin: 4px;\n  float: right;\n  background-color: #e1d1d1;\n  color: maroon;\n}\n\nh4{\n  font-weight: normal;\n  display: inline;\n  text-align: right;\n  padding-left: 15px;\n}\nlabel{\n  font-size: 17px;\n  padding-left: 15px;\n}\n.invest-container{\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n}\na{\n  background-color: #588c73;\n}\n[type=\"radio\"]:checked + label:after{\n  background-color: #f9d0d6;\n  border: #f9d0d6;\n}\ninput[type=text]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\ninput[type=number]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 752:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h1{\n  font-weight: bolder;\n  color: #588c73;\n}\n.waves-effect{\n  background-color: #e1d1d1;\n  color: maroon;\n}\n.title{\n  color: #e1d1d1;\n  display: inline;\n  font-weight: bolder;\n  font-size: 3.8rem;\n    line-height: 110%;\n    margin: 2.1rem 0 1.68rem 0;\n}\n.page{\n  color:\tmaroon;\n}\n\n.title:hover{\n  color: #2b7b7b;\n\n}\n.title-container{\nmargin: auto;\npadding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n  color: maroon;\n}\na{\n  background-color: #588c73;\n}\n.error{\n  font-size: 25px;\n  font-weight: bold;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\ninput[type=text]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\ninput[type=password]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".message-container{\n  padding-top: 40px;\n}\nlabel{\n  padding-top: 30px;\n}\nh2 {\n  color: maroon;\n  padding: 15px;\n  font-weight: 300;\n}\n.username{\n  font-weight: 900;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\ninput:not([type]):focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n  color: rgba(0,0,0,0);\n}\na{\n  background-color: #588c73;\n}\n.error{\n  font-size: 25px;\n  font-weight: bold;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\ninput[type=text]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\ninput[type=password]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n[type=\"radio\"]:checked + label:after{\n  background-color: #f9d0d6;\n  border: #f9d0d6;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".collection.with-header {\n  border-style: none;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\nul{\n  border-style: none;\n\n\n}\nh4, .invest{\n  text-align: right;\n}\n\n.collection-item{\n\n  border-style: none;\n  background-color: #edfff6;\n\n}\n.collection.with-header .collection-header{\n  background: linear-gradient(0deg, rgba(240,221,223,0), rgba(240,221,223,1));\n}\n.waves-effect{\n  margin-right: 10px;\n\n  float: right;\n  background-color: #e1d1d1;\n  color: maroon;\n}\n.money{\n  color: darkblue;\n  font-weight: bolder;\n  text-align: right;\n}\n.light{\n  font-weight: lighter;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".collection.with-header {\n  border-style: none;\n}\n.collection-item{\n  margin-bottom: 15px;\n  background-color: #edfff6;\n}\n.collection.with-header .collection-header{\n   background: linear-gradient(0deg, rgba(240,221,223,0), rgba(240,221,223,1));\n}\n.waves-effect{\n  margin-right: 10px;\n  float: right;\n  background-color: #e1d1d1;\n  color: maroon;\n}\n.money{\n  color: #184242;\n  font-weight: bolder;\n  text-align: right;\n}\n.username{\n  font-weight: 900;\n  color: #184242;\n}\n.light{\n  font-weight: lighter;\n}\n.leftlight{\n  font-weight: lighter;\n  text-align: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, ".col{\n  padding: 15px;\n}\n\nh2 {\n  color: maroon;\n  padding: 15px;\n  font-weight: 600;\n  text-align: center;\n  padding-top: 10px;\n}\n.chart-container{\n  padding:35px;\n}\n.money{\n  font-weight: bolder;\n  color: #36654e;\n}\n.card{\n  background-color: #edfff6;\n}\nh5{\n  padding: 1.44rem;\n  font-weight: lighter;\n}\n.waves-effect{\n  margin: 4px;\n  float: right;\n  background-color: #e1d1d1;\n  color: maroon;\n}\n\nh4{\n  font-weight: normal;\n  display: inline;\n  text-align: right;\n  padding-left: 15px;\n}\n\n@media (max-width: 600px) {\n\nh4, h2{\n  text-align: center;\n}\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h2{\n  font-weight: bolder;\n}\na{\n  background-color: #588c73;\n}\n[type=\"radio\"]:checked + label:after{\n  background-color: #f9d0d6;\n  border: #f9d0d6;\n}\n\ninput[type=number]:focus{\n  border-bottom: 1px solid maroon;\nbox-shadow: 0 1px 0 0 maroon;\n}\n.waves-effect{\n  background-color: maroon;\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "h1{\n\n    font-weight: bolder;\n    color: #588c73;\n    font-size: 4.2rem;\n      line-height: 110%;\n      margin: 2.1rem 0 1.68rem 0;\n\n}\n.title{\n  color: lightgrey;\n  display: inline;\n  font-weight: bolder;\n  font-size: 3.8rem;\n    line-height: 110%;\n    margin: 2.1rem 0 1.68rem 0;\n}\n.page{\n  color:\t#8B0000;\n}\n.title:hover, .investors:active{\n  color: #2b7b7b;\n\n}\n.waves-effect{\n\n  background-color: #e1d1d1;\n  color: maroon;\n}\n.title-container{\nmargin: auto;\npadding: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 369,
	"./af.js": 369,
	"./ar": 376,
	"./ar-dz": 370,
	"./ar-dz.js": 370,
	"./ar-kw": 371,
	"./ar-kw.js": 371,
	"./ar-ly": 372,
	"./ar-ly.js": 372,
	"./ar-ma": 373,
	"./ar-ma.js": 373,
	"./ar-sa": 374,
	"./ar-sa.js": 374,
	"./ar-tn": 375,
	"./ar-tn.js": 375,
	"./ar.js": 376,
	"./az": 377,
	"./az.js": 377,
	"./be": 378,
	"./be.js": 378,
	"./bg": 379,
	"./bg.js": 379,
	"./bn": 380,
	"./bn.js": 380,
	"./bo": 381,
	"./bo.js": 381,
	"./br": 382,
	"./br.js": 382,
	"./bs": 383,
	"./bs.js": 383,
	"./ca": 384,
	"./ca.js": 384,
	"./cs": 385,
	"./cs.js": 385,
	"./cv": 386,
	"./cv.js": 386,
	"./cy": 387,
	"./cy.js": 387,
	"./da": 388,
	"./da.js": 388,
	"./de": 391,
	"./de-at": 389,
	"./de-at.js": 389,
	"./de-ch": 390,
	"./de-ch.js": 390,
	"./de.js": 391,
	"./dv": 392,
	"./dv.js": 392,
	"./el": 393,
	"./el.js": 393,
	"./en-au": 394,
	"./en-au.js": 394,
	"./en-ca": 395,
	"./en-ca.js": 395,
	"./en-gb": 396,
	"./en-gb.js": 396,
	"./en-ie": 397,
	"./en-ie.js": 397,
	"./en-nz": 398,
	"./en-nz.js": 398,
	"./eo": 399,
	"./eo.js": 399,
	"./es": 401,
	"./es-do": 400,
	"./es-do.js": 400,
	"./es.js": 401,
	"./et": 402,
	"./et.js": 402,
	"./eu": 403,
	"./eu.js": 403,
	"./fa": 404,
	"./fa.js": 404,
	"./fi": 405,
	"./fi.js": 405,
	"./fo": 406,
	"./fo.js": 406,
	"./fr": 409,
	"./fr-ca": 407,
	"./fr-ca.js": 407,
	"./fr-ch": 408,
	"./fr-ch.js": 408,
	"./fr.js": 409,
	"./fy": 410,
	"./fy.js": 410,
	"./gd": 411,
	"./gd.js": 411,
	"./gl": 412,
	"./gl.js": 412,
	"./gom-latn": 413,
	"./gom-latn.js": 413,
	"./he": 414,
	"./he.js": 414,
	"./hi": 415,
	"./hi.js": 415,
	"./hr": 416,
	"./hr.js": 416,
	"./hu": 417,
	"./hu.js": 417,
	"./hy-am": 418,
	"./hy-am.js": 418,
	"./id": 419,
	"./id.js": 419,
	"./is": 420,
	"./is.js": 420,
	"./it": 421,
	"./it.js": 421,
	"./ja": 422,
	"./ja.js": 422,
	"./jv": 423,
	"./jv.js": 423,
	"./ka": 424,
	"./ka.js": 424,
	"./kk": 425,
	"./kk.js": 425,
	"./km": 426,
	"./km.js": 426,
	"./kn": 427,
	"./kn.js": 427,
	"./ko": 428,
	"./ko.js": 428,
	"./ky": 429,
	"./ky.js": 429,
	"./lb": 430,
	"./lb.js": 430,
	"./lo": 431,
	"./lo.js": 431,
	"./lt": 432,
	"./lt.js": 432,
	"./lv": 433,
	"./lv.js": 433,
	"./me": 434,
	"./me.js": 434,
	"./mi": 435,
	"./mi.js": 435,
	"./mk": 436,
	"./mk.js": 436,
	"./ml": 437,
	"./ml.js": 437,
	"./mr": 438,
	"./mr.js": 438,
	"./ms": 440,
	"./ms-my": 439,
	"./ms-my.js": 439,
	"./ms.js": 440,
	"./my": 441,
	"./my.js": 441,
	"./nb": 442,
	"./nb.js": 442,
	"./ne": 443,
	"./ne.js": 443,
	"./nl": 445,
	"./nl-be": 444,
	"./nl-be.js": 444,
	"./nl.js": 445,
	"./nn": 446,
	"./nn.js": 446,
	"./pa-in": 447,
	"./pa-in.js": 447,
	"./pl": 448,
	"./pl.js": 448,
	"./pt": 450,
	"./pt-br": 449,
	"./pt-br.js": 449,
	"./pt.js": 450,
	"./ro": 451,
	"./ro.js": 451,
	"./ru": 452,
	"./ru.js": 452,
	"./sd": 453,
	"./sd.js": 453,
	"./se": 454,
	"./se.js": 454,
	"./si": 455,
	"./si.js": 455,
	"./sk": 456,
	"./sk.js": 456,
	"./sl": 457,
	"./sl.js": 457,
	"./sq": 458,
	"./sq.js": 458,
	"./sr": 460,
	"./sr-cyrl": 459,
	"./sr-cyrl.js": 459,
	"./sr.js": 460,
	"./ss": 461,
	"./ss.js": 461,
	"./sv": 462,
	"./sv.js": 462,
	"./sw": 463,
	"./sw.js": 463,
	"./ta": 464,
	"./ta.js": 464,
	"./te": 465,
	"./te.js": 465,
	"./tet": 466,
	"./tet.js": 466,
	"./th": 467,
	"./th.js": 467,
	"./tl-ph": 468,
	"./tl-ph.js": 468,
	"./tlh": 469,
	"./tlh.js": 469,
	"./tr": 470,
	"./tr.js": 470,
	"./tzl": 471,
	"./tzl.js": 471,
	"./tzm": 473,
	"./tzm-latn": 472,
	"./tzm-latn.js": 472,
	"./tzm.js": 473,
	"./uk": 474,
	"./uk.js": 474,
	"./ur": 475,
	"./ur.js": 475,
	"./uz": 477,
	"./uz-latn": 476,
	"./uz-latn.js": 476,
	"./uz.js": 477,
	"./vi": 478,
	"./vi.js": 478,
	"./x-pseudo": 479,
	"./x-pseudo.js": 479,
	"./yo": 480,
	"./yo.js": 480,
	"./zh-cn": 481,
	"./zh-cn.js": 481,
	"./zh-hk": 482,
	"./zh-hk.js": 482,
	"./zh-tw": 483,
	"./zh-tw.js": 483
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 761;


/***/ }),

/***/ 769:
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-wrapper\">\n      <a  [routerLink]=\"['']\" class=\"brand-logo\"><img class='logo-image' src=\"http://i.imgur.com/PFgrpAS.png\" alt=\"\"> Early Birds</a>\n      <a materialize=\"collapsible\" href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a *ngIf=\"!loggedUser\"[routerLink]=\"['login']\">Login</a></li>\n        <li><a *ngIf=\"!loggedUser\"[routerLink]=\"['signup']\">Signup</a></li>\n        <li><a *ngIf=\"loggedUser && loggedUser.role ==='investor'\" class=\"username\" [routerLink] = \"['/investors',loggedUser._id]\" >{{loggedUser.username | capitalize}}</a></li>\n        <li><a *ngIf=\"loggedUser && loggedUser.role ==='startup'\" class=\"username\"[routerLink] = \"['/startups',loggedUser._id]\" >{{loggedUser.username | capitalize}}</a></li>\n        <li><a *ngIf=\"loggedUser && userMessages\" [routerLink]=\"['inbox',loggedUser._id]\"><span class = 'username'>{{userMessages.length}}</span> Notification<span *ngIf= \"userMessages.length > 1 || userMessages.length === 0\">s</span></a></li>\n        <li><a *ngIf=\"loggedUser\" (click)=\"logout()\">Logout</a></li>\n\n\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a *ngIf=\"!loggedUser\"[routerLink]=\"['login']\">Login</a></li>\n        <li><a *ngIf=\"!loggedUser\"[routerLink]=\"['signup']\">Signup</a></li>\n        <li><a *ngIf=\"loggedUser && loggedUser.role ==='investor'\" class=\"username\" [routerLink] = \"['/investors',loggedUser._id]\" >{{loggedUser.username | capitalize}}</a></li>\n        <li><a *ngIf=\"loggedUser && loggedUser.role ==='startup'\" class=\"username\"[routerLink] = \"['/startups',loggedUser._id]\" >{{loggedUser.username | capitalize}}</a></li>\n        <li><a *ngIf=\"loggedUser &&userMessages\" [routerLink]=\"['inbox',loggedUser._id]\"><span class = 'username'>{{userMessages.length}}</span> Notification<span *ngIf= \"userMessages.length > 1|| userMessages.length === 0\">s</span></a></li>\n        <li><a *ngIf=\"loggedUser\" (click)=\"logout()\">Logout</a></li>\n\n\n      </ul>\n\n    </div>\n  </nav>\n\n\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ 770:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br><br>\n  <div *ngIf=\"loggedUser\" class=\"\">\n    <form >\n      <h2> {{loggedUser.username | capitalize }}, edit your profile </h2>\n      <div class=\"col s6\">\n        <label for=\"\">What connections can you offer?</label>\n        <p>\n          <input name=\"connections\" type=\"radio\" id=\"connections1\" [(ngModel)]=\"InvestorForm.connections\" value=\"CTO\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"connections1\">CTO</label>\n\n          <input name=\"connections\" type=\"radio\" id=\"connections2\" [(ngModel)]=\"InvestorForm.connections\" value=\"Investors\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"connections2\">Investors</label>\n\n          <input name=\"connections\" type=\"radio\" id=\"connections3\" [(ngModel)]=\"InvestorForm.connections\" value=\"Developers\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"connections3\">Developers</label>\n\n          <input name=\"connections\" type=\"radio\" id=\"connections4\" [(ngModel)]=\"InvestorForm.connections\" value=\"Counseling\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"connections4\">Counseling</label>\n        </p>\n        <label for=\"\">What is your area of interest?</label>\n        <p>\n          <input name=\"interests\" type=\"radio\" id=\"interests1\" [(ngModel)]=\"InvestorForm.interests\" value=\"technology\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"interests1\">Technology</label>\n\n          <input name=\"interests\" type=\"radio\" id=\"interests2\" [(ngModel)]=\"InvestorForm.interests\" value=\"services\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"interests2\">Services</label>\n\n          <input name=\"interests\" type=\"radio\" id=\"interests3\" [(ngModel)]=\"InvestorForm.interests\" value=\"hardware\" [attr.disabled]=\"isDisabled?true:null\"/>\n          <label for=\"interests3\">Hardware</label>\n        </p>\n      </div>\n      <br>\n      <label> How much $ are you willing to invest? </label>\n      <input type=\"number\" [(ngModel)]=\"InvestorForm.budget\" name=\"budget\"/>\n      <br>\n      <label for=\"\">When do you expect profits from your investment?</label>\n      <p>\n        <input name=\"investreturn\" type=\"radio\" id=\"return1\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"short\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"return1\">Short Term</label>\n\n        <input name=\"investreturn\" type=\"radio\" id=\"return2\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"medium\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"return2\">Medium Term</label>\n\n        <input name=\"investreturn\" type=\"radio\" id=\"return3\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"long\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"return3\">Long Term</label>\n      </p>\n      <a (click)=\"update()\" [routerLink] = \"['/startups']\" class=\"waves-effect waves-light btn\"> Create your datasheet </a>\n\n    </form>\n  </div>\n\n  <p class=\"error\"> {{ error }} </p>\n\n</div>\n"

/***/ }),

/***/ 771:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form >\n    <h2> {{loggedUser.username | capitalize }}, edit your profile </h2>\n    <h5> Fill out this simple form and let other users know what you're up to!</h5>\n    <div class=\"col s6\">\n      <label for=\"\">What area do you work in?</label>\n      <p>\n        <input name=\"category\" type=\"radio\" id=\"category1\" [(ngModel)]=\"StartupForm.category\" value=\"technology\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category1\">Technology</label>\n        <br>\n        <input name=\"category\" type=\"radio\" id=\"category2\" [(ngModel)]=\"StartupForm.category\" value=\"services\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category2\">Services</label>\n        <br>\n        <input name=\"category\" type=\"radio\" id=\"category3\" [(ngModel)]=\"StartupForm.category\" value=\"hardware\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category3\">Hardware</label>\n      </p>\n      <label for=\"\">What are you looking for?</label>\n      <p>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor1\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"CTO\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor1\">CTO</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor2\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Investors\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor2\">Investors</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor3\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Developers\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor3\">Developers</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor4\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Counseling\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor4\">Counseling</label>\n      </p>\n    </div>\n    <label for=\"\">How pressing is your need?</label>\n    <p>\n      <input name=\"investinterest\" type=\"radio\" id=\"return1\" [(ngModel)]=\"StartupForm.investinterest\" value=\"short\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return1\">Short Term</label>\n\n      <input name=\"investinterest\" type=\"radio\" id=\"return2\" [(ngModel)]=\"StartupForm.investinterest\" value=\"medium\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return2\">Medium Term</label>\n\n      <input name=\"investinterest\" type=\"radio\" id=\"return3\" [(ngModel)]=\"StartupForm.investinterest\" value=\"long\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return3\">Long Term</label>\n    </p>\n    <br>\n    <label> How much $ do you need? </label>\n    <input type=\"number\" [(ngModel)]=\"StartupForm.budget\" name=\"budget\"/>\n    <br>\n    <div class=\"row\">\n      <h6>Update your last revenues</h6>\n      <div class=\"col s2 m2 lg2\">\n        <label>January</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[0]\" name=\"lastrevenue[0]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>February</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[1]\" name=\"lastrevenue[1]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>March</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[2]\" name=\"lastrevenue[2]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>April</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[3]\" name=\"lastrevenue[3]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>May</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[4]\" name=\"lastrevenue[4]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>June</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[5]\" name=\"lastrevenue[5]\"/>\n      </div>\n    </div>\n    <div class=\"row\">\n      <h6>Update your revenue expectations for next year</h6>\n      <div class=\"col s2 m2 lg2\">\n        <label>January</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[0]\" name=\"expectedrevenue[0]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>February</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[1]\" name=\"expectedrevenue[1]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>March</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[2]\" name=\"expectedrevenue[2]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>April</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[3]\" name=\"expectedrevenue[3]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>May</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[4]\" name=\"expectedrevenue[3]\"/>\n      </div>\n      <div class=\"col s2 m2 lg2\">\n        <label>June</label>\n        <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[5]\" name=\"expectedrevenue[3]\"/>\n      </div>\n    </div>\n    <a (click)=\"update()\" [routerLink]=\"['/investors']\" class=\"waves-effect waves-light btn\"> Update your datasheet </a>\n\n  </form>\n  <p class=\"error\"> {{ error }} </p>\n\n</div>\n"

/***/ }),

/***/ 772:
/***/ (function(module, exports) {

module.exports = "<div class=\"row main-container\">\n  <div class=\"row\">\n\n    <div class=\"container\">\n\n      <div class=\"col s12 m6 lg4 slider-container\">\n        <div class=\"slider\">\n          <ul class=\"slides\">\n            <li>\n              <div>\n                <h1>Invest now, contribute to the future</h1>\n              </div>\n            </li>\n            <li>\n              <div>\n                <h1 class='money'>{{totalInvestment | currency:'EUR':true}} currently looking to be invested</h1>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"chart col s12 m6 lg4\">\n        <canvas *ngIf='chartDisabled === false' baseChart [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\" [colors]='barChartColors'></canvas>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"container\">\n      <div class=\"col s12 m6 lg4\">\n        <div class=\"chart\">\n          <canvas baseChart [data]=\"doughnutChartData\" [labels]=\"doughnutChartLabels\" [chartType]=\"doughnutChartType\" [colors]=\"doughnutChartColors\">\n          </canvas>\n\n\n\n        </div>\n\n      </div>\n      <div class=\"col s12 m6 lg8\">\n\n        <img src=\"http://i.imgur.com/PFgrpAS.png\" class='home-image' alt=\"\">\n        <img src=\"http://i.imgur.com/lWb8ydi.png\" class='home-image' alt=\"\">\n\n        <h3>Join our early birds community and enjoy the ride</h3>\n\n      </div>\n\n    </div>\n\n  </div>\n<div class=\"row link-contain\">\n  <a class ='links' *ngIf='!loggedUser' [routerLink] = \"['/signup']\">\n    Interested? Sign up now\n  </a>\n</div>\n</div>\n"

/***/ }),

/***/ 773:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <h2 *ngIf='messageList'>You have <span class='username'>{{messageList.length}}</span> message<span *ngIf='messageList.length > 1 || messageList.length === 0 '>s</span></h2>\n  <div *ngFor=\"let message of messageList\">\n    <ul class= \"collection with-header\">\n\n      <li class=\"collection-header\"><h4>From: <span class='username'>{{message.from.username | capitalize}}</span></h4></li>\n      <li class=\"collection-item\"><label>{{message.created_at| date:fullDate}}</label></li>\n\n      <li class =\"collection-item\"><br><p>{{message.content}}</p></li>\n    </ul>\n    <div class=\"row\">\n      <a [routerLink]=\"['/message',message.from._id]\" class=\"waves-effect waves-light btn\">Reply</a>\n\n      <a (click)=\"delete(message._id)\" class=\"waves-effect waves-light btn\">Delete this message</a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ 774:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n    <div class=\" services col s12 m6 lg6\"><h3>SERVICES</h3></div>\n    <div class=\" technology col s12 m6 lg6\"><h3>TECHNOLOGY</h3></div>\n    <div class=\" hardware col s12 m6 lg6\"><h3>HARDWARE</h3></div>\n    <div class=\" all col s12 m6 lg6\" [routerLink]=\"['../investors']\"><h3>ALL</h3></div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 775:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"user\">\n\n  <div class=\"row\">\n    <div class=\"col s12 m12\">\n\n\n        <div class=\"card darken-1\">\n            <div class=\"container\">\n          <span class=\"card-title\"><h2>{{user.username | capitalize}}</h2></span>\n          <div class=\"row\">\n\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Interested in</h5>\n              <h4>{{user.inv_datasheets.interests | capitalize}}</h4>\n            </div>\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Can connect with</h5>\n              <h4>{{user.inv_datasheets.connections}}</h4>\n            </div>\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Expects return in...</h5>\n              <h4>{{user.inv_datasheets.investreturn| capitalize}} term</h4>\n            </div>\n\n          </div>\n          <div class=\"row\">\n\n\n            <div class=\"invest-container\">\n              <h5 for=\"\">Willing to invest</h5>\n              <h2 class=\"money\">{{user.inv_datasheets.budget | currency:'EUR':true}}</h2>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <a *ngIf=\"loggedUser && user && loggedUser._id === user._id\" [routerLink]=\"['/investors',user._id,'edit']\" class=\"waves-effect waves-light btn\"> Edit your profile </a>\n\n    <a *ngIf='user' [routerLink]=\"['/message',user._id]\" class=\"waves-effect waves-light btn\"> Contact! </a>\n    <a [routerLink]=\"['../']\" class=\"waves-effect waves-light btn\"> Back to full list </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 776:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedUser\" class=\"container\">\n  <form >\n    <h2> {{loggedUser.username | capitalize }}, what are your expectations? </h2>\n    <h5> Fill out this simple form and let other users know what you're up to!</h5>\n    <div class=\"col s6\">\n      <label for=\"\">What connections can you offer?</label>\n      <p>\n        <input name=\"connections\" type=\"radio\" id=\"connections1\" [(ngModel)]=\"InvestorForm.connections\" value=\"CTO\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"connections1\">CTO</label>\n\n        <input name=\"connections\" type=\"radio\" id=\"connections2\" [(ngModel)]=\"InvestorForm.connections\" value=\"Investors\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"connections2\">Investors</label>\n\n        <input name=\"connections\" type=\"radio\" id=\"connections3\" [(ngModel)]=\"InvestorForm.connections\" value=\"Developers\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"connections3\">Developers</label>\n\n        <input name=\"connections\" type=\"radio\" id=\"connections4\" [(ngModel)]=\"InvestorForm.connections\" value=\"Counseling\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"connections4\">Counseling</label>\n      </p>\n      <label for=\"\">What is your area of interest?</label>\n      <p>\n        <input name=\"interests\" type=\"radio\" id=\"interests1\" [(ngModel)]=\"InvestorForm.interests\" value=\"technology\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"interests1\">Technology</label>\n\n        <input name=\"interests\" type=\"radio\" id=\"interests2\" [(ngModel)]=\"InvestorForm.interests\" value=\"services\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"interests2\">Services</label>\n\n        <input name=\"interests\" type=\"radio\" id=\"interests3\" [(ngModel)]=\"InvestorForm.interests\" value=\"hardware\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"interests3\">Hardware</label>\n      </p>\n    </div>\n    <br>\n    <label> How much $ are you willing to invest? </label>\n    <input type=\"number\" [(ngModel)]=\"InvestorForm.budget\" name=\"budget\"/>\n    <br>\n    <label for=\"\">When do you expect profits from your investment?</label>\n    <p>\n      <input name=\"investreturn\" type=\"radio\" id=\"return1\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"short\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return1\">Short Term</label>\n\n      <input name=\"investreturn\" type=\"radio\" id=\"return2\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"medium\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return2\">Medium Term</label>\n\n      <input name=\"investreturn\" type=\"radio\" id=\"return3\" [(ngModel)]=\"InvestorForm.investreturn\" value=\"long\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return3\">Long Term</label>\n    </p>\n    <a (click)=\"create()\" [routerLink]=\"['/startups']\" class=\"waves-effect waves-light btn\"> Create your datasheet </a>\n\n  </form>\n</div>\n\n<p class=\"error\"> {{ error }} </p>\n"

/***/ }),

/***/ 777:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"row title-container\">\n      <a class ='title' [routerLink] = \"['/startups']\">\n        The entrepeneurs\n      </a>\n      <span class='title'> / </span>\n      <a class ='page title' [routerLink] = \"['/investors']\">\n        The investors\n      </a>\n\n    </div>\n  </div>\n  <div class=\"row\">\n\n    <div *ngFor= \"let investor of investorList\">\n      <single-investor [investor]='investor'></single-investor>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 778:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <form >\n    <h2> Login</h2>\n    <p class=\"error\"> {{ error }} </p>\n\n    <br>\n\n    <label> Username </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n    <br>\n    <label> Password </label>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n\n\n    <a (click)=\"login()\" class=\"waves-effect waves-light btn\"> login </a>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ 779:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"message-container\">\n    <h2 *ngIf=\"receiver\">What do you want to tell <span class=\"username\">{{receiver.username | capitalize}}</span> ?</h2>\n    <div class=\"input-field col s12\">\n      <label for=\"message\">Type your message</label>\n      <br>\n      <br><br><br>\n      <input id=\"message\"[(ngModel)]=\"content\" class=\"materialize-textarea\">\n    </div>\n\n  </div>\n\n  <a (click)=\"create()\" [routerLink]=\"['/inbox',loggedUser._id]\" class=\"waves-effect waves-light btn\"> Submit Message </a>\n\n</div>\n"

/***/ }),

/***/ 780:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <form >\n    <h2> Signup </h2>\n    <p class=\"error\"> {{ error }} </p>\n    <div class=\"col s6\">\n      <label for=\"\">What are you?</label>\n      <p>\n        <input name=\"role\" type=\"radio\" id=\"test1\" [(ngModel)]=\"formInfo.role\" value=\"investor\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"test1\">Investor</label>\n\n        <input name=\"role\" type=\"radio\" id=\"test2\" [(ngModel)]=\"formInfo.role\" value=\"startup\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"test2\">Startup</label>\n      </p>\n    </div>\n    <br>\n\n    <label> Username </label>\n    <input type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\"/>\n    <br>\n    <label> Password </label>\n    <input type=\"password\" [(ngModel)]=\"formInfo.password\" name=\"password\"/>\n\n\n\n\n    <a (click)=\"signup()\" class=\"waves-effect waves-light btn\"> signup </a>\n\n  </form>\n</div>\n"

/***/ }),

/***/ 781:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n  <div class=\"row\" *ngIf=\"investor && investor.role==='investor'\">\n    <ul class= \"collection with-header\">\n      <li class=\"collection-header\"><h5>{{investor.username | capitalize}}</h5></li>\n      <li class=\"collection-item\"><h5><span class='light'>Interested in: </span>{{investor.inv_datasheets.interests | capitalize}}</h5></li>\n      <li class=\"collection-item\">\n        <h5 class='invest light'>Willing to invest:</h5>\n        <h4>{{investor.inv_datasheets.budget | currency:'EUR':true}} </h4>\n\n      </li>\n\n\n    </ul>\n    <div class=\"row\">\n      <a class ='waves-effect waves-light btn' [routerLink] = \"['/investors',investor._id]\">\n        Details\n      </a>\n\n      <a [routerLink]=\"['/message',investor._id]\" class=\"waves-effect waves-light btn\"> Contact </a>\n    </div>\n    <div class=\"row\">\n      <a *ngIf=\"loggedUser._id === investor._id\"class ='waves-effect waves-light btn' [routerLink]=\"['/investors',investor._id,'edit']\">\n        Edit your profile\n      </a>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 782:
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n  <div class=\"row\" *ngIf=\"startup && startup.role==='startup'\">\n\n    <ul class= \"collection with-header\">\n      <li class=\"collection-header\"><h5 class='username'>{{startup.username | capitalize}}</h5></li>\n      <li class=\"collection-item\"><h5 class='light'>Looking for:</h5><h6>{{startup.start_datasheets.lookingfor}}</h6></li>\n      <li class=\"collection-item\"><h5 class ='leftlight'>Investment goal: </h5><h5 class='money'>{{startup.start_datasheets.budget| currency:'EUR':true}}</h5></li>\n    </ul>\n    <div class=\"row\">\n\n      <a class ='waves-effect waves-light btn' [routerLink]=\"['/startups',startup._id]\">\n        Details\n      </a>\n      <a [routerLink]=\"['/message',startup._id]\" class=\"waves-effect waves-light btn\"> Contact </a>\n    </div>\n\n    <div class=\"row\">\n      <a *ngIf=\"loggedUser._id === startup._id\"class ='waves-effect waves-light btn' [routerLink]=\"['/startups',startup._id,'edit']\">\n        Edit your profile\n      </a>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 783:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"startup\">\n\n\n\n  <div class=\"row\">\n    <div class=\"col s12 m12\">\n      <div class=\"card darken-1\">\n        <span class=\"card-title\"><h2>{{startup.username | capitalize}}</h2></span>\n        <div class=\"row\">\n          <div class=\"container\">\n\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Industry</h5>\n              <h4>{{startup.start_datasheets.category | capitalize}}</h4>\n            </div>\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Looking for</h5>\n              <h4>{{startup.start_datasheets.lookingfor}}</h4>\n            </div>\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">What kind of investment are we looking for?</h5>\n              <h4>{{startup.start_datasheets.investinterest| capitalize}} term</h4>\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"row\">\n          <div class=\"container\">\n\n            <div class=\"chart-container col s12 m8 lg8\">\n              <div style=\"display: block;\">\n                <canvas baseChart width=\"400\" height=\"400\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\" [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"></canvas>\n              </div>\n\n            </div>\n\n            <div class=\"col s12 m4 lg4\">\n              <h5 for=\"\">Investment goal</h5>\n              <h4 class=\"money\">{{startup.start_datasheets.budget | currency:'EUR':true}}</h4>\n            </div>\n          </div>\n\n\n\n\n        </div>\n      </div>\n    </div>\n    <a *ngIf=\"startup && loggedUser && loggedUser._id === startup._id\" [routerLink]=\"['/startups',startup._id,'edit']\" class=\"waves-effect waves-light btn\"> Edit your profile </a>\n    <a [routerLink]=\"['../']\" class=\"waves-effect waves-light btn\"> Back to full list </a>\n    <a *ngIf='startup' [routerLink]=\"['/message',startup._id]\" class=\"waves-effect waves-light btn\"> Contact </a>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 784:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <form >\n    <h2>What do you need? </h2>\n    <h5> Fill out this simple form and let other users know what you're up to!</h5>\n    <div class=\"col s6\">\n      <label for=\"\">What area do you work in?</label>\n      <p>\n        <input name=\"category\" type=\"radio\" id=\"category1\" [(ngModel)]=\"StartupForm.category\" value=\"technology\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category1\">Technology</label>\n        <br>\n        <input name=\"category\" type=\"radio\" id=\"category2\" [(ngModel)]=\"StartupForm.category\" value=\"services\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category2\">Services</label>\n        <br>\n        <input name=\"category\" type=\"radio\" id=\"category3\" [(ngModel)]=\"StartupForm.category\" value=\"hardware\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"category3\">Hardware</label>\n      </p>\n      <label for=\"\">What are you looking for?</label>\n      <p>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor1\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"CTO\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor1\">CTO</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor2\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Investors\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor2\">Investors</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor3\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Developers\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor3\">Developers</label>\n        <br>\n        <input name=\"lookingfor\" type=\"radio\" id=\"lookingfor4\" [(ngModel)]=\"StartupForm.lookingfor\" value=\"Counseling\" [attr.disabled]=\"isDisabled?true:null\"/>\n        <label for=\"lookingfor4\">Counseling</label>\n      </p>\n    </div>\n    <label for=\"\">How pressing is your need?</label>\n    <p>\n      <input name=\"investinterest\" type=\"radio\" id=\"return1\" [(ngModel)]=\"StartupForm.investinterest\" value=\"short\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return1\">Short Term</label>\n\n      <input name=\"investinterest\" type=\"radio\" id=\"return2\" [(ngModel)]=\"StartupForm.investinterest\" value=\"medium\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return2\">Medium Term</label>\n\n      <input name=\"investinterest\" type=\"radio\" id=\"return3\" [(ngModel)]=\"StartupForm.investinterest\" value=\"long\" [attr.disabled]=\"isDisabled?true:null\"/>\n      <label for=\"return3\">Long Term</label>\n    </p>\n    <br>\n    <label> How much $ do you need? </label>\n    <input type=\"number\" [(ngModel)]=\"StartupForm.budget\" name=\"budget\"/>\n    <br>\n  <div class=\"row\">\n    <h6>Please introduce your last revenues</h6>\n    <div class=\"col s2 m2 lg2\">\n      <label>January</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[0]\" name=\"lastrevenue[0]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>February</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[1]\" name=\"lastrevenue[1]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>March</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[2]\" name=\"lastrevenue[2]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>April</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[3]\" name=\"lastrevenue[3]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>May</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[4]\" name=\"lastrevenue[4]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>June</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.lastrevenue[5]\" name=\"lastrevenue[5]\"/>\n    </div>\n\n  </div>\n  <div class=\"row\">\n    <h6>Please share your revenue expectations for next year</h6>\n    <div class=\"col s2 m2 lg2\">\n      <label>January</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[0]\" name=\"expectedrevenue[0]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>February</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[1]\" name=\"expectedrevenue[1]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>March</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[2]\" name=\"expectedrevenue[2]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>April</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[3]\" name=\"expectedrevenue[3]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>May</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[4]\" name=\"expectedrevenue[4]\"/>\n    </div>\n    <div class=\"col s2 m2 lg2\">\n      <label>June</label>\n      <input type=\"number\" [(ngModel)]=\"StartupForm.expectedrevenue[5]\" name=\"expectedrevenue[5]\"/>\n    </div>\n  </div>\n\n  </form>\n  <a (click)=\"create()\" [routerLink]=\"['/investors']\" class=\"waves-effect waves-light btn\"> Create your datasheet </a>\n  <p class=\"error\"> {{ error }} </p>\n\n</div>\n"

/***/ }),

/***/ 785:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"row title-container\">\n      <a class ='page title' [routerLink] = \"['/startups']\">\n        The entrepeneurs\n      </a>\n      <span class='title'> / </span>\n      <a class ='title' [routerLink] = \"['/investors']\">\n        The investors\n      </a>\n\n    </div>\n  </div>\n  <div *ngFor= \"let startup of startupList\">\n\n    <single-startup  [startup]='startup'></single-startup>\n\n  </div>\n\n</div>\n"

/***/ })

},[1064]);
//# sourceMappingURL=main.bundle.js.map