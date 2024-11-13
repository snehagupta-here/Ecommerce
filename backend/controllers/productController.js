import {v2 as cloudinary} from "cloudinary";
//function for adding a product
const addProduct = async (req,res) =>{
    try{
        const {name,description,price,category,sizes,subCategory,bestseller} = req.body;
        // if(!name || !description || !price || !category || !subCategory || !sizes){
        //    res.json({success:false,msg:"Invalid Credentials"});
        // }
        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const images = [image1,image2,image3,image4].filter((item)=>item !== undefined);
        const imageUrl = await Promise.all(images.map(async (el)=>{
            const url = await cloudinary.uploader.upload(el.path,{resource_type:'image'});
            return url.secure_url;
        }));
        console.log(imageUrl);
        console.log(images);
        console.log(req.files);
        console.log(name,description,price,sizes,bestseller,category,subCategory);
        console.log(image1,image2,image3);
        res.send({success:true,msg:"added data"});
    }catch(e){
        res.send({success:false,msg:e.message});
    }
}

//function for deleting a product
const deleteProduct = async (req,res) =>{
    
}

//function for getting all products
const getAllProducts = async (req,res) =>{

}

//function for getting a product
const getProduct = async (req,res) => {

}
export {addProduct,deleteProduct,getAllProducts,getProduct};
