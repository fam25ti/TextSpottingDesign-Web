document.getElementById('detect-btn').addEventListener('click',function(){
    document.getElementById('ocr-part').style.display='block';
    document.getElementById('detect').style.display='block';
});

$(function() {
    document.getElementById('my-image-previewer-part').src=document.getElementsByClassName('my-small-img')[0].src;
    document.getElementById('my-small-img-part').scrollLeft=20;
    document.getElementById('ocr-button').addEventListener('click',function () {
      document.getElementById('ocr-text').innerText='This is a test!';
    });
    $('#my-small-img-part .my-small-img').each(function (index, img) {
        img.addEventListener('click',function () {
            document.getElementById('my-image-previewer-part').src=img.src;
            var leftPos = img.offsetLeft;
            $('#my-small-img-part').scrollLeft(leftPos-6*img.width);
        });

    });
    var array_icon = [];
    $('#my-small-img-part .my-small-img').each(function (index, element) {
        array_icon.push(element);
    });

    // console.log(array_icon);
//to define previouse function
    $('#previouse').click(function () {
        var main_src = document.getElementById('my-image-previewer-part').src;
        for (var i = 0; i < array_icon.length; i++) {

            if (main_src == array_icon[i].src) {
                if (i > 0) {
                    var j = i - 1;
                    var leftPos = array_icon[j].offsetLeft;
                    document.getElementById('my-small-img-part').scrollLeft = leftPos - 5 * array_icon[i].width;
                    document.getElementById('my-image-previewer-part').src = array_icon[j].src;
                    break;
                }
            }
        }

    });
//to define function onclick of next button
    $('#next').click(function () {
        var main_src = document.getElementById('my-image-previewer-part').src;
        for (var i = 0; i < array_icon.length; i++) {
            if (main_src == array_icon[i].src) {
                if (i < array_icon.length - 1) {
                    var j = i + 1;
                    var leftPos = array_icon[j].offsetLeft;
                    //to scroll images(little images) at the bottom of album page when we click on next button
                    document.getElementById('my-small-img-part').scrollLeft = leftPos - 5 * array_icon[i].width;
                    document.getElementById('my-image-previewer-part').src = array_icon[j].src;
                    main_src = array_icon[j].src;
                    break;
                }
            }
        }

    });
        document.getElementById('right').addEventListener('click',function () {
            var left=document.getElementById('my-small-img-part').scrollLeft;
            // console.log(left);
            $('#my-small-img-part').scrollLeft(left+20);

        });
        document.getElementById('left').addEventListener('click',function () {
            var left=document.getElementById('my-small-img-part').scrollLeft;
            $('#my-small-img-part').scrollLeft(left-20);

        })

});
