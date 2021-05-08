var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var app = require('./app');
var http = require('http');
var Server = require('socket.io').Server;
var config = require('./utils/config');
var Chat = require('./modals/Chat');
var Chatroom = require('./modals/Chatroom');
var server = http.createServer(app);
var io = new Server(server, { cors: { origin: '*' } });
io.on('connection', function (socket) {
    socket.on('create-room', function (roomInfo) { return __awaiter(_this, void 0, void 0, function () {
        var name, email, newRoom, room;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    name = roomInfo.name, email = roomInfo.email;
                    newRoom = new Chatroom({ name: name, email: email, chat: [] });
                    return [4 /*yield*/, newRoom.save()];
                case 1:
                    room = _a.sent();
                    if (room) {
                        io.emit('created-room', room);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    socket.on('new-message', function (newMessage) { return __awaiter(_this, void 0, void 0, function () {
        var message, name, type, roomId, chat, newChat, savedChat, foundRoom;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    message = newMessage.message, name = newMessage.name, type = newMessage.type, roomId = newMessage.roomId;
                    chat = { message: message, name: name, type: type, time: new Date(), room: roomId };
                    newChat = new Chat(chat);
                    return [4 /*yield*/, newChat.save()];
                case 1:
                    savedChat = _a.sent();
                    return [4 /*yield*/, Chatroom.find({ _id: roomId })];
                case 2:
                    foundRoom = _a.sent();
                    if (!foundRoom) return [3 /*break*/, 4];
                    return [4 /*yield*/, Chatroom.findOneAndUpdate({ _id: roomId }, { $push: { chat: savedChat.id } }, { upsert: true })
                            .then(function (result) {
                            io.emit('returned-message', savedChat);
                        })["catch"](function (error) {
                            console.log(error);
                        })];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    }); });
    socket.on('fetch-rooms', function () { return __awaiter(_this, void 0, void 0, function () {
        var rooms;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Chatroom.find({}).populate('chat')];
                case 1:
                    rooms = _a.sent();
                    io.emit('all-chatrooms', rooms);
                    return [2 /*return*/];
            }
        });
    }); });
    socket.on('fetch-chat', function (id) { return __awaiter(_this, void 0, void 0, function () {
        var room, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Chatroom.findOne({ _id: id }).populate('chat')];
                case 1:
                    room = _a.sent();
                    if (room) {
                        io.emit('fetched-chat', room.chat);
                    }
                    else {
                        io.emit('room-not-found');
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    io.emit('room-not-found');
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    socket.on('delete-room', function (id) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, Chatroom.findOneAndDelete({ _id: id }, function (err) { return __awaiter(_this, void 0, void 0, function () {
                            var rooms;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!!err) return [3 /*break*/, 3];
                                        return [4 /*yield*/, Chatroom.find({}).populate('chat')];
                                    case 1:
                                        rooms = _a.sent();
                                        io.emit('all-chatrooms', rooms);
                                        return [4 /*yield*/, Chat.deleteMany({ room: id })];
                                    case 2:
                                        _a.sent();
                                        _a.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2.message);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); });
    socket.on('disconnect', function () {
        console.log('USER DISCONNECTED!!');
    });
});
server.listen(process.env.PORT || config.PORT, function () {
    console.log("Server running on port " + config.PORT);
});
