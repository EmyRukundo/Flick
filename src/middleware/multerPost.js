import express from "express";
import multer from 'multer';

const multerPost = multer({dest: '../uploads/images', 
rename: function(fieldname, filename){
    return filename
}})
module.exports = multerPost;