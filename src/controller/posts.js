import Post from '../model/postModel';

const NewPost = function(req, res){
    Post.get(function(err, posts){
        if(err){
            res.json({
                status: 400,
                message: 'No post found',
            });
        }
        res.json({
            status: 200,
            message: "Her some posts we found",
            data: posts
        })
    })
}
export{
    NewPost
}