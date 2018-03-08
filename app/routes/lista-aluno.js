module.exports = function(application){
    application.get('/lista-aluno', function(req,res){
        res.render('alunos/lista-aluno');
    })
}