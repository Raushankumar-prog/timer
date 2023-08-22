 console.log("hello , checking ");
const countdown = setInterval(() => {
        const goalDate = new Date('December 31, 2023');
        const currentDate = new Date();

        const timeDiff = goalDate.getTime() - currentDate.getTime();
        const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((timeDiff % (1000 * 60)) / 1000);

        const timer = document.getElementById('timer');
        timer.innerHTML = `${daysLeft} days:: ${hoursLeft} hours:: ${minutesLeft} minutes:: ${secondsLeft} seconds left`;

        if (timeDiff < 0) {
          clearInterval(countdown);
          timer.innerHTML = 'Goal achieved!';
        }
      }, 0.1);