function getDim() {

	var x = 0,
	y = 0,
	parents = [];

	Array.from(document.getElementsByClassName('dim-check')).forEach(function(dimImg){
		parents[y] = dimImg.closest('.dim-par');

		var img = new Image();
		img.load_order = x;
		img.onload = function() {
			var dim_width = this.width;
			var dim_height = this.height;
			var width_to_height = dim_width / dim_height * 100;
			var target_parent = parents[this.load_order];

			if( width_to_height < 75 ){
				target_parent.className += ' dim-par--long';
			} else {
				target_parent.className += ' dim-par--wide';
			}
		}
		img.src = dimImg.src;
		x++; y++;
	});

}

getDim();
