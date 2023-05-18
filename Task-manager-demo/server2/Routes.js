const tasksRouter = express.Router();
tasksRouter.route('/').get((req, res) => {
    Task.find((err, tasks) => {
        if (err) {
            console.log(err);
        } else {
            res.json(tasks);
        }
    });
});
tasksRouter.route('/:id').get((req, res) => {
    let id = req.params.id;
    Task.findById(id, (err, task) => {
        res.json(task);
    });
});
tasksRouter.route('/add').post((req, res) => {
    let task = new Task(req.body);
    task.save()
        .then(task => {
            res.status(200).json({'task': 'task added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new task failed');
        });
});
tasksRouter.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if (!task)
            res.status(404).send("data is not found");
        else
            task.title = req.body.title;
            task.description = req.body.description;
            task.deadline = Date.parse(req.body.deadline);
            task.category = req.body.category;

            task.save().then(task => {
                res.json('Task updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});
tasksRouter.route('/delete/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id, (err, task) => {
        if (!task)
            res.status(404).send("data is not found");
        else
            res.json('Task deleted!');
    });
});
app.use('/tasks', tasksRouter);
