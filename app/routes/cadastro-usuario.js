module.exports = function(application){
    application.get('/cadastro-usuario', function(req,res){
        res.render('admin/cadastro-usuario');
    });

    application.post('/cadastro-usuario/salvar', function(req,res){
        var usuario = req.body;
       

        var connection = application.config.dbConnection();
        var noticiasModel = new application.app.models.NoticiasDAO(connection);

        noticiasModel.salvarusuario(usuario, function(error, result){
            res.redirect('/cadastro-usuario');
        });
    });
}