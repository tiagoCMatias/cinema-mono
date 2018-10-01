const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = Schema({
    title: { type: String, require },
    runtime: { type: Number },
    plot: { type: String },
    releaseDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }        
});

module.exports = mongoose.model('Movie', movieSchema);