// questions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const questions = new Schema(
    {
      student_id: { type: Number, required: true },
      question: { type: String, required: true },
      status: { type: String, required: true, default: 'new' },
      helper_id: { type: Number }
    },
    { timestamps: true }
  );

  return mongooseClient.model('questions', questions);
};
