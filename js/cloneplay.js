// second video play toggle
$('#play-pause-button-2').click(function () {
    var mediaVideo = $("#extended");
    // by having the same id for different videos, only max 4 can play at once. potentially a cool glitch???
    mediaVideo.each(function (k, v) {
        if (v.paused) {
            v.play();
        } else {
            v.pause();
        }
    })
});



// play all

$('#play-pause-button').click(function () {
    var mediaVideo = $("#videoplay, #videoplay, #videoplay, #videoplay");
    // by having the same id for different videos, only max 4 can play at once. potentially a cool glitch???
    mediaVideo.each(function (k, v) {
        if (v.paused) {
            v.play();
        } else {
            v.pause();
        }
    })
});


var cloneCount = 1;;
$("#click").click(function () {
    $('#id')
        .clone()
        .attr('id', 'id' + cloneCount++)
        .insertAfter($('[id^=id]:last'))
        .text('id ' + (cloneCount - 1));
});


$("#add").click(function () {

    var $clone = $('#upload').clone();

    //$clone.attr('id',$clone.attr('id').replace(/\d+$/, function(str) { return parseInt(str) + 1; }) ); 
    $clone.attr('id', 'upload' + cloneCount++)
    // Find all elements in $clone that have an ID, and iterate using each()
    $clone.find('[id]').each(function () {
        //Perform the same replace as above
        var $th = $(this);
        var newID = $th.attr('id').replace(/\d+$/, function (str) {
            return parseInt(str) + cloneCount;
        });
        //var newName = $th.attr('name').replace(/\d+$/, function(str) { return parseInt(str) + 1; });
        console.log(newID);
        //console.log(newName);

        $th.attr('id', newID);
    });

    $clone.insertAfter($('[id^=upload]:last'))
});

// remove clone object, does not protect original at this point

$("#delete").on("click", function () {
    if ($('.container video').length > 1) {
        $(".container video:last").remove();
    }

});