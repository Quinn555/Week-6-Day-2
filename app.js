let grid = $('#grid');

for (let i = 0; i < 16; i++) {
    let box = $('<div class="box"><div class="box-inner"></div></div>');
    grid.append(box);
}

$('.box').click(function() {
    $(this).toggleClass('clicked');
});

  