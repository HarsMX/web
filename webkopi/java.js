        document.getElementById('commentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const comment = document.getElementById('comment').value;
            console.log('Nama:', name);
            console.log('Komentar:', comment);
            // Anda bisa menambahkan kode di sini untuk mengirim data ke server menggunakan AJAX, dll.
        });
		
		document.getElementById("button").addEventListener("click",function(){
			alert("telah di pesan...");
		});