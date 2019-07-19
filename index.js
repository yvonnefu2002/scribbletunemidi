const scribble = require('scribbletune');

function generatePattern(num_eigth_notes){
    var pattern = [];
  
    for(var b=0; b<num_eigth_notes;b++){
        if(Math.random() < 0.33){
          pattern.push('l');
        } else if(Math.random() < 0.5 ) {
          pattern.push('r') ;
        } else {
          pattern.push('h') ;
        }
    }
    
    return(pattern);
  }
  
  function convertPatternToBeatString(pattern, note){
    var string = '';
    for(var i=0; i<pattern.length; i++){
      pattern[i] == note
       
      if (pattern[i]==note) {
        string=string +'x'
      } else {
        string=string +'-'
      }
    }
    return string;
  }

  var pattern = generatePattern(16)

  var ohClip = scribble.clip({
    notes: 'c4',
    pattern: convertPatternToBeatString(pattern, 'l'),
    //sample: 'wav/low.wav'
  });

  var ohClip2 = scribble.clip({
    notes: 'c5',
    pattern: convertPatternToBeatString(pattern, 'h'),
    //sample: 'wav/high.wav'
  });

  //ohClip.loop = 2;
  //ohClip2.loop = 2;

  scribble.midi(ohClip, 'low.mid');
  scribble.midi(ohClip2, 'high.mid')