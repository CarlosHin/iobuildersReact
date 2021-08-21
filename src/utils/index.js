import Swal from 'sweetalert2'

export const showError = error => {
    Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
        confirmButtonText: 'Cool'
    })
}