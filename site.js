var day1Puzzle1 = function () {
    var file = document.getElementById('1-1-file').files[0];
    var text = "";
    var floorNumber = 0;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        // browser completed reading file - display it
        text = e.target.result;
        for(var i=0; i<text.length; i++){
            text[i] == '(' ? floorNumber++ : floorNumber--;
        }
        $('#1-1 .answer span').text(floorNumber);
        $('#1-1 .answer').show();
    };
}

var day1Puzzle2 = function () {
    var file = document.getElementById('1-2-file').files[0];
    var text = "";
    var floorNumber = 0;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        // browser completed reading file - display it
        text = e.target.result;
        for(var i=0; i<text.length; i++){
            text[i] == '(' ? floorNumber++ : floorNumber--;
            if(floorNumber == "-1"){
                $('#1-2 .answer span').text(i+1);
                $('#1-2 .answer').show(); 
                break;
            }
        }
        
    };
}