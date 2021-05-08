
require('dotenv').config()

const Clarifai =  require('clarifai');

const app = new Clarifai.App({
  apiKey: process.env.API_KEY,
});


const handleApiCall = (req, res) => {
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
      .then(data => {
        res.status(200).json(data);
      })
      .catch(err => res.status(400).json('Unable to Access API'));
  };


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
    handleImage,
    handleApiCall
}