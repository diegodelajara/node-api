"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movies_1 = __importDefault(require("./routes/movies"));
const posts_1 = __importDefault(require("./routes/posts"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        const mongoUri = 'mongodb+srv://admin:Rena2413@cluster0-eox56.gcp.mongodb.net/test?retryWrites=true&w=majority';
        mongoose_1.default.set('useFindAndModify', true);
        mongoose_1.default.connect(mongoUri || process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(db => console.log('connected'));
        this.app.set('port', process.env.PORT || 3001);
        //Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(compression_1.default());
        this.app.use(cors_1.default());
    }
    routes() {
        this.app.use(movies_1.default);
        this.app.use('/api/', posts_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')}`);
        });
    }
}
const server = new Server();
server.start();
