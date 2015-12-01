var day1Puzzle1 = function () {
    var floorNumber = 0;

    fileReader('1-1-file', function (text) {
        for (var i = 0; i < text.length; i++) {
            text[i] == '(' ? floorNumber++ : floorNumber--;
        }
        showAnswer('#1-1', floorNumber);
    });
};

var day1Puzzle2 = function () {
    var floorNumber = 0;

    fileReader('1-2-file', function (text) {
        var count = 1;
        while (floorNumber > -1) {
            text[count] == '(' ? floorNumber++ : floorNumber--;
            count++;
        }
        showAnswer('#1-2', count);
    });
};

var fileReader = function (inputElementId, callback) {
    var file = document.getElementById(inputElementId).files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        callback(e.target.result)
    }
};

var showAnswer = function (puzzleId, answer) {
    $(puzzleId + " .answer span").text(answer);
    $(puzzleId + " .answer").show();
};