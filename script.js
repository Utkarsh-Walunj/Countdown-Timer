const countdownElement = document.getElementById('countdown');
        const startButton = document.getElementById('startBtn');
        const stopButton = document.getElementById('stopBtn');
        const timingSelect = document.getElementById('timingSelect');

        let intervalId;

        function startCountdown(duration) {
            let seconds = duration / 1000;

            intervalId = setInterval(function () {
                const hours = Math.floor(seconds / 3600);
                const minutes = Math.floor((seconds % 3600) / 60);
                const remainingSeconds = seconds % 60;

                countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

                if (seconds <= 0) {
                    clearInterval(intervalId);
                    countdownElement.textContent = '00:00:00';
                    startButton.disabled = false;
                    stopButton.disabled = true;
                }

                seconds--;
            }, 1000);
        }

        startButton.addEventListener('click', function () {
            const selectedTiming = timingSelect.value;
            startCountdown(selectedTiming);
            startButton.disabled = true;
            stopButton.disabled = false;
        });

        stopButton.addEventListener('click', function () {
            clearInterval(intervalId);
            countdownElement.textContent = '00:00:00';
            startButton.disabled = false;
            stopButton.disabled = true;
        });