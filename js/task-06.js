const inputElement = document.querySelector('#validation-input');

      inputElement.addEventListener('blur', function() {
        const requiredLength = Number(this.getAttribute('data-length'));
        const inputValue = this.value.trim().length;

        if (inputValue === requiredLength) {
          this.classList.remove('invalid');
          this.classList.add('valid');
        } else {
          this.classList.remove('valid');
          this.classList.add('invalid');
        }
      });