$(window).load(function(){
    game.init();
});

var game={
    //comienza inicializando los objetos precargando los assets y mostrando la pantalla de inicio
    init: function(){
        //levels.init();
        //loader.init();
        //mouse.init();
        //Oculta todas las capas del juego y muestra la pantalla de inicio
        $('.gamelayer').hide();
        $('#gamestartscreen').show();
        //Obtener el controlador para el canvas y el contexto del juego
        game.canvas=$('#gamecanvas')[0];
        game.context=game.canvas.getcontext('2d');
    },

}

var levels={
    //nivel de datos
    data:[
        {
            //primer nivel
            foreground:'desert-foreground',
            background:'clouds-background',
            entities:[]
        },
        {
            //segundo nivel
            foreground:'desert-foreground',
            background:'clouds-background',
            entities:[]
        }
    ],

    init:function(){
        var html="";
        for (var  i = 0; i < levels.data.length; i++) {
           var level=levels.data[i];
           html +='<input type="button" value=" '+(i+1)+'">';            
        };
        $('#levelselectscreen').hmtl(html);

        $('#levelselectscreen input').click(function(){
            levels.load(this.value-1);
            $('@levelselectscreen').hide();
        });
    },
    load:function(number){

    }
}