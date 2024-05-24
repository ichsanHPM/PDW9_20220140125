// Fungsi untuk menangani pengiriman formulir saat tombol submit ditekan
function submission() {
     // Mengambil nilai dari input nama, email, jumlah, dan bucket
    var name = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("jumlah").value;
    var bucket = document.getElementById("bucket").value;

    var paymentMethod = "";
    // Memeriksa radio button yang dipilih untuk metode pembayaran
    if (document.getElementById("pembayaran1").checked) {
        paymentMethod = document.getElementById("pembayaran1").value;
    } else if (document.getElementById("pembayaran2").checked) {
        paymentMethod = document.getElementById("pembayaran2").value;
    } else if (document.getElementById("pembayaran3").checked) {
        paymentMethod = document.getElementById("pembayaran3").value;
    }

     // Memeriksa apakah semua field sudah diisi
    if (!name || !email || !quantity || !bucket || !paymentMethod) {
          // Menampilkan pesan error jika ada field yang kosong
        Swal.fire({
            title: "Error",
            text: "Harap isi semua field yang diperlukan!",
            icon: "error",
            customClass: {
                title: "swal-title",
                closeButton: "swal-close-button",
                popup: "swal-popup"
            }
        });
        return;
    }

    // Memformat HTML untuk ditampilkan pada SweetAlert
    var alertHTML = `
        <div class="form-values">
            <div class="form-group">
                <label for="nama" style="width: 130px;">Nama : </label>
                <input type="text" value="${name}" readonly />
            </div>
            <div class="form-group">
                <label for="email" style="width: 130px;">Email :</label>
                <input type="text" value="${email}" readonly />
            </div>
            <div class="form-group">
                <label for="jumlah" style="width: 130px;">Jumlah :</label>
                <input type="text" value="${quantity}" readonly />
            </div>
            <div class="form-group">
                <label for="bucket" style="width: 130px;">Bucket :</label>
                <input type="text" value="${bucket}" readonly />
            </div>
            <div class="form-group">
                <label for="paymentMethod" style="width: 130px;">Metode Pembayaran :</label>
                <input type="text" value="${paymentMethod}" readonly />
            </div>
        </div>`;

    // Menampilkan SweetAlert untuk konfirmasi pembelian
    Swal.fire({
        title: "Konfirmasi Pembelian",
        html: alertHTML,
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#3885d6",
        cancelButtonColor: "#d33",
        customClass: {
            title: "swal-title",
            htmlContainer: "swal-html-container",
            confirmButton: "swal-confirm-button",
            cancelButton: "swal-cancel-button",
            popup: "swal-popup"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            var formulir = {
                name: name,
                email: email,
                jumlah: quantity,
                bucket: bucket,
                paymentMethod: paymentMethod
            };
            console.log(formulir);
            Swal.fire({
                title: "Terima Kasih",
                text: "Pesanan Sedang Diproses",
                icon: "success",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
            document.getElementById("form-bunga").reset();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire({
                title: "Dibatalkan",
                text: "Dibatalkan :(",
                icon: "error",
                customClass: {
                    title: "swal-title",
                    closeButton: "swal-close-button",
                    popup: "swal-popup"
                },
                onOpen: function() {
                    document.querySelector('.swal-modal').style.top = '50%';
                    document.querySelector('.swal-modal').style.left = '50%';
                    document.querySelector('.swal-modal').style.transform = 'translate(-50%, -50%)';
                }
            });
        }
    });
}
