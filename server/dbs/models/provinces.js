import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    require: true
  },
  value: {
    type: String,
    require: true
  }
})

export default mongoose.model('provinces',Schema)
