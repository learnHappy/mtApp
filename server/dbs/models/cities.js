import mongoose from 'mongoose'

const Schema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    require: true
  },
  value: {
    type: Array
  }
})

export default mongoose.model('cities',Schema)
