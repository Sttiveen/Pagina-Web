var images = ['./imagenes/fortnite1.jpg', './imagenes/fortnite2.jpg', './imagenes/fortnite3.jpg'];
        var currentIndex = 0;

        function showImage(index) {
            var img = document.getElementById('carousel');
            img.src = images[index];
        }

        function next() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }