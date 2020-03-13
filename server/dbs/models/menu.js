import mongoose from 'mongoose'

let Schema = mongoose.Schema({
  menu: {
    type: Array,
    require: true
  }
})

export default mongoose.model('Menu',Schema)
