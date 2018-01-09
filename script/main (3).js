$(document).ready(function(){
    
    $('#error').hide();
    
    $('#form').submit(function(event){
        event.preventDefault();
        
        var first = $('#first').val();
        var second = $('#second').val();
        var third = $('#third').val();
        var fourth = $('#fourth').val();
        var cidr = $('#cidr').val();
        var net
        var ip = first+'.'+second+"."+third+"."+fourth;
        $('#netid').text(ip);
        
        var n = 32 - cidr;
        var nbh = Math.pow(2,n)-2;
        $('#plage').text(nbh);
         
        // Remplir tous les champs
        
        var field1 = $('#first').val();
        var lenField1 = field1.length;
        
        if (lenField1 == 0) {
            $('#netid').text('');
            $('#netmask').text('');
            $('#broadcast').text('');
            $('#firstaddr').text('');
            $('#lastaddr').text('');
            $('#plage').text('');
            $('#classe').text('');
            $('#error').show();
        }
        
        var field2 = $('#second').val();
        var lenField2 = field2.length;
        
        if (lenField2 == 0) {
            $('#netid').text('');
            $('#netmask').text('');
            $('#broadcast').text('');
            $('#firstaddr').text('');
            $('#lastaddr').text('');
            $('#plage').text('');
            $('#classe').text('');
            $('#error').show();
        }
        
        var field3 = $('#third').val();
        var lenField3 = field3.length;
        
        if (lenField3 == 0) {
            $('#netid').text('');
            $('#netmask').text('');
            $('#broadcast').text('');
            $('#firstaddr').text('');
            $('#lastaddr').text('');
            $('#plage').text('');
            $('#classe').text('');
            $('#error').show();
        }
        
        var field4 = $('#fourth').val();
        var lenField4 = field4.length;
        
        if (lenField4 == 0) {
            $('#netid').text('');
            $('#netmask').text('');
            $('#broadcast').text('');
            $('#firstaddr').text('');
            $('#lastaddr').text('');
            $('#plage').text('');
            $('#classe').text('');
            $('#error').show();
        }
        
        var field5 = $('#cidr').val();
        var lenField5 = field5.length;
        
        if (lenField5 == 0) {
            $('#netid').text('');
            $('#netmask').text('');
            $('#broadcast').text('');
            $('#firstaddr').text('');
            $('#lastaddr').text('');
            $('#plage').text('');
            $('#classe').text('');
            $('#error').show();
        }
        
        // Erreur si le chiffre rentré est supérieur à 255
        
        if (first > 256) {
            $('#netid').text('Erreur');
            $('#netmask').text('Erreur');
            $('#broadcast').text('Erreur');
            $('#firstaddr').text('Erreur');
            $('#lastaddr').text('Erreur');
            $('#plage').text('Erreur');
            $('#classe').text('Erreur');
            
         } else if (second > 256) {
            $('#netid').text('Erreur');
            $('#netmask').text('Erreur');
            $('#broadcast').text('Erreur');
            $('#firstaddr').text('Erreur');
            $('#lastaddr').text('Erreur');
            $('#plage').text('Erreur');
            $('#classe').text('Erreur');
            
        } else if (third > 256) {
            $('#netid').text('Erreur');
            $('#netmask').text('Erreur');
            $('#broadcast').text('Erreur');
            $('#firstaddr').text('Erreur');
            $('#lastaddr').text('Erreur');
            $('#plage').text('Erreur');
            $('#classe').text('Erreur');
            
        } else if (fourth > 256) {
            $('#netid').text('Erreur');
            $('#netmask').text('Erreur');
            $('#broadcast').text('Erreur');
            $('#firstaddr').text('Erreur');
            $('#lastaddr').text('Erreur');
            $('#plage').text('Erreur');
            $('#classe').text('Erreur');
            
        } else if (cidr > 33) {
            $('#netid').text('Erreur');
            $('#netmask').text('Erreur');
            $('#broadcast').text('Erreur');
            $('#firstaddr').text('Erreur');
            $('#lastaddr').text('Erreur');
            $('#plage').text('Erreur');
            $('#classe').text('Erreur');
        }
        
        // Déterminer les classes
        
        function getClass(classe) {
            if (first >=0 && first <= 126) {
                return 'Classe A';
                console.log('Classe A');
            } else if (first == 127) {
                return 'Loopback APIPA';
                console.log('Loopback APIPA');
            } else if (first >= 128 && first <= 191) {
                return 'Classe B';
                console.log('Classe B');
            } else if (first == 162 && second == 254) {
                return 'Workgroup APIPA';
                console.log('Classe B');
            } else if (first >= 192 && first <= 223) {
                return 'Classe C';
                console.log('Classe C');
            } else if (first >= 224 && first <= 239) {
                return 'Classe D Multicast';
                console.log('Classe D Multicast');
            } else if (first >= 240 && first <= 255) {
                return 'Classe E (Experimental)';
                console.log('Classe E (Experimental)');
            } else {
                return "Erreur: n'existe pas !";
                console.log("Erreur: n'existe pas !");
            }
        }
        
        $('#classe').text(getClass());
        
        
    });
    
});