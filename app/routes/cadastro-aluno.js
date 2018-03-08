module.exports = function(application){
    application.get('/cadastro-aluno', function(req,res){
        res.render('admin/cadastro-aluno');
    })
}