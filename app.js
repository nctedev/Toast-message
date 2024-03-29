

function toast({title = '', message = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        const timeout = (duration + 1000);

        // Auto remove toast
        const autoRemove =  setTimeout(function() {
            main.removeChild(toast);
        }, timeout);

        // Remove toast when click
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            error: 'fa-solid fa-circle-xmark'
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation= `slideInLeft ease .4s, fadeOut linear 1s ${delay}s forwards`;

        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-solid fa-xmark"></i>
        </div>`;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message: 'Thành công trong việc yêu Thư (iu dợ nhắm moaa)',
        type: 'success',
        duration: 5000
    })
}

function showErrorToast() {
    toast({
        title: 'Thất bại!',
        message: 'Bị lỗi 1 xíu thôi hong sao...',
        type: 'danger',
        duration: 5000
    })
}

function showInfoToast() {
    toast({
        title: 'Thông tin',
        message: 'Thông tin về vợ của anh',
        type: 'info',
        duration: 5000
    })
}