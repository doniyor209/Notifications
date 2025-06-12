
const alertsContainer = document.getElementById('alertsContainer');

const alertTemplates = {
    success: {
        className: 'success',
        html: `<span>Well done!</span>`
    },
    fail: {
        className: 'fail',
        html: `<span class="main-text">Oh snap!</span>
               <span class="sub-text">Change a few things up submitting again.</span>`
    },
    warning: {
        className: 'warning',
        html: `<span>Warning!</span>`
    }
};

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const type = button.getAttribute('data-type');
        showAlert(type);
    });
});

function showAlert(type) {
    if (!alertTemplates[type]) return;

    const alert = document.createElement('div');
    alert.className = 'alert ' + alertTemplates[type].className;
    alert.innerHTML = alertTemplates[type].html;

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close alert');
    closeBtn.onclick = () => closeAlert(alert);
    alert.appendChild(closeBtn);

    alertsContainer.appendChild(alert);

    // Автоматическое закрытие через 5 секунд
    setTimeout(() => {
        closeAlert(alert);
    }, 5000);
}

function closeAlert(alert) {
    alert.classList.add('closing');
    alert.addEventListener('animationend', () => {
        if (alert.parentElement) {
            alert.parentElement.removeChild(alert);
        }
    });
}
