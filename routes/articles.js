const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

//gets all articles
router.get('/',(req,res) =>{
    Articles.find()
            .then(article => res.json(article))
            .then(err => res.status(400).res.json(`Error: ${err}`))
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
router.put('/update/:id',(req,res) => { 
    Articles.findById(req.params.id)
            .then(item =>{
                item.title = req.body.title;
                item.article = req.body.article;
                item.authorname = req.body.authorname;

                        item.save()
                       .then(() => res.json('The article was updated!'))
                       .catch(err => res.status(400).json(`Error: ${err}`))
            })
            .catch(err =>res.status(400).json(`Error: ${err}`))
});

//add article
router.post('/add',(req,res) =>{
    const newArticle = new Articles({
        title:req.body.title,
        article:req.body.article,
        authorname:req.body.article

    })
    newArticle.save()
              .then(() => res.json('New Article created!'))
              .catch(err => res.status(400).json(`Error: ${err}`));
});

module.exports = router;