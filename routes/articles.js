const express = require('express');
const router = express.Router();
const multer = require('multer');
const Articles = require('../models/articles');

const storage = multer.diskStorage({
    destination: (req,file,callback) =>{
        callback(null,"./client/public/uploads/")
    },filename:(req,file,callback) =>{
        callback(null,file.originalname)
    }
})

const upload = multer({storage: storage});

//gets all articles
router.get('/',(req,res) =>{
    Articles.find()
            .then(article => res.json(article))
            .then(err => res.status(400))
}); 

//find article by id
router.get('/:id',(req,res) =>{
        Articles.findById(req.params.id)
                .then(article =>res.json(article))
                .catch(err => res.status(400).json(`Error: ${err}`))
})

//delete article
router.delete('/:id',(req,res) =>{
       Articles.findByIdAndDelete(req.params.id)
               .then(() => res.json('Article Deleted succsessfully!'))
               .catch(err => res.status(400).json(`Error: ${err}`))
});

//find article by id and update
router.put('/update/:id', upload.single('articleImage'),(req,res) => { 
    Articles.findById(req.params.id)
            .then(item =>{
                item.title = req.body.title;
                item.article = req.body.article;
                item.authorname = req.body.authorname;
                item.articleImage = req.file.originalname;
                item.videolink=req.body.videolink;

                        item.save()
                       .then(() => res.json('The article was updated!'))
                       .catch(err => res.status(400).json(`Error: ${err}`))
            })
            .catch(err =>res.status(400).json(`Error: ${err}`))
});

//add article
router.post('/add',upload.single('articleImage'),(req,res) =>{
    const newArticle = new Articles({
        title:req.body.title,
        article:req.body.article,
        authorname:req.body.article,
        articleImage: req.file.originalname,
        videolink:req.body.videolink
    });

    newArticle.save()
              .then(() => res.json('New Article created!'))
              .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;