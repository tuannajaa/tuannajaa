$( "#same-data" ).change(function() {
if($(this).is(':checked')){
  
$( "#addresss_mom" ).val($( "#addresss" ).val());
$( "#road_mom" ).val($( "#road" ).val());
$( "#tambol_mom" ).val($( "#tambol" ).val());
$( "#district_mom" ).val($( "#district" ).val());
$( "#provice_mom" ).val($( "#provice" ).val());
$( "#moo_mom" ).val($( "#moo" ).val());
$( "#district_mom" ).val($( "#district" ).val());
$( "#provice_mom" ).val($( "#provice" ).val());
  
$( "#addresss" ).change(function() {
$( "#addresss_mom" ).val($( "#addresss" ).val());
});

$( "#addresss_mom" ).change(function() {
$( "#addresss" ).val($( "#addresss_mom" ).val());
});

$( "#road" ).change(function() {
$( "#road_mom" ).val($( "#road" ).val());
});
  
$( "#road_mom" ).change(function() {
$( "#road" ).val($( "#road_mom" ).val());
});

$( "#tambol" ).change(function() {
$( "#tambol_mom" ).val($( "#tambol" ).val());
});
    
$( "#tambol_mom" ).change(function() {
$( "#tambol" ).val($( "#tambol_mom" ).val());
});

$( "#moo" ).change(function() {
$( "#moo_mom" ).val($( "#moo" ).val());
});
      
$( "#moo_mom" ).change(function() {
$( "#moo" ).val($( "#moo_mom" ).val());
});

$( "#district" ).change(function() {
$( "#district_mom" ).val($( "#district" ).val());
});
        
$( "#district_mom" ).change(function() {
$( "#district" ).val($( "#district_mom" ).val());
});

$( "#provice" ).change(function() {
$( "#provice_mom" ).val($( "#provice" ).val());
});
          
$( "#provice_mom" ).change(function() {
$( "#provice" ).val($( "#provice_mom" ).val());
});

    }



  else{
    $( "#addresss" ).off('change');
    $( "#addresss_mom " ).off('change');
    $( "#road" ).off('change');
    $( "#road_mom " ).off('change');
    $( "#tambol" ).off('change');
    $( "#tambol_mom " ).off('change');
    $( "#moo" ).off('change');
    $( "#moo_mom " ).off('change');
    $( "#district" ).off('change');
    $( "#district_mom " ).off('change');
    $( "#provice" ).off('change');
    $( "#provice_mom " ).off('change');
  }
});
