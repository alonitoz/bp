const resError = (res, ex) => {
    res.status(500).json({
        error: 'An unexpected error occurred',
        message: ex.message
    });
};

const resJsonSuccess = (res, obj) => {
    res.status(200).json(obj);
};

const setCrudMethods = (router, Model) => {
    router
        .route('/')
        .get(async (req, res) => {
            try {
                const docs = await Model.find();
                resJsonSuccess(res, docs);
            } catch (ex) {
                resError(res, ex);
            }
        })
        .post(async (req, res) => {
            try {
                const doc = await Model.create(req.body);
                resJsonSuccess(res, doc);
            } catch (ex) {
                resError(res, ex);
            }
        });

    router.get('/:id', async (req, res) => {
        try {
            const doc = await Model.findById(req.params.id);
            resJsonSuccess(res, doc);
        } catch (ex) {
            resError(res, ex);
        }
    });
};

module.exports = {
    resError,
    resJsonSuccess,
    setCrudMethods
};
