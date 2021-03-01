$(document).ready(function(){

  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // let sum = subject_points[0];
    // sum = sum + subject_points[1];
    // sum = sum + subject_points[2];
    // sum = sum + subject_points[3];
    // sum = sum + subject_points[4];

     let sum = subject_points.reduce(function(a,b){
       return a+b;
    });

    

    $('#sum_indicate').text(sum);
    let count = subject_points.length;
    let average =  sum / count;

    $('#average_indicate').text(average);
  };

  function get_achievement(){ 
    let averageIndicate = $("#average_indicate").text();

      if ( averageIndicate >= 80){
       return "A";   

    } else if ( averageIndicate >= 60) {
       return "B";  

    } else if ( averageIndicate >= 40) {
      return "C";

    } else {
      return "D";
    };  
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;  
    let judge ="合格"
    for(let i = 0; i < number; i++){

      if(subject_points[i]<60){
         judge="不合格";  
      };
      // $('#judge').text(judge);
    };
    return judge
  };

    function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
     return `あなたの成績は${achievement}で${pass_or_failure}です`
    // $('#declaration').text(`あなたの成績は${achievement}で${pass_or_failure}です`);
    };
 
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });

    $('#btn-judge').click(function() {
     $('#judge').text(get_pass_or_failure());
  });

  // $(function(){
  //   $('#btn-declaration').on('click',function(){
  //     $('#declaration').text(judgement())
  //   })
  //   .on('click',function(){
  //     $('#declaration').css('background-color','aqua');
  //   });
  // });
  $('#btn-declaration').click(function() {
    $("#declaration").text(judgement())
  })
  .on('click',function(){
    $('#declaration').css('background-color','aqua');
  });
});

