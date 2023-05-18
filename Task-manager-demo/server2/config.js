const app = express();
const port = process.env.PORT || 5000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/taskmanager';
mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});
app.use(cors());
app.use(bodyParser.json());
