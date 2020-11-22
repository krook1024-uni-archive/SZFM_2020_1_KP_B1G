module.exports = (model) => {
    return async (req, res, next) => {
        const { _start, _end, _sort, _order } = req.query;
        const newOrder = _order === "ASC" ? 1 : -1;
        req.sorting = {
            skip: parseInt(_start),
            limit: parseInt(_end) - parseInt(_start),
            sort: { [_sort]: newOrder },
        };
        try {
            const totalCount = await model.countDocuments({ deleted_at: null }).exec();
            res.header("X-Total-Count", totalCount);
        } catch (err) {
            console.log("Couldn't get total count", err);
        }
        next();
    };
};
