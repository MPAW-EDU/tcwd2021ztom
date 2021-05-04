
const handleImage = (req,res, db) => {

    const { id } = req.body;

    db('users')
        .where('id','=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            res.status(200).json(entries[0]);
        })
        .catch(err => res.status(400).json('Unable to get entries'))

}

module.exports = {
    handleImage
}