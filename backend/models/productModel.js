import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    images:{
        main:{
            type:String
        },
        sub:{
            type:String
        }
    },
    featured:{
        type:Boolean,
        required:true,
        default:false
    },
},{
    timestamps:true
})

const Product=mongoose.model('Product',productSchema)

export default Product