const alarmTimes = process.argv.slice(2);//cut first two arguments from command line
const numbers = alarmTimes.filter(alarmTimes => alarmTimes > 0);//filter out 0, ends up filtering letters as well, since they are not greater than 0
console.log(numbers);

const timer = function() {
  for (const num of numbers) {
    setTimeout(() => {
      return process.stdout.write('.');//this is the alarm
    }, num * 1000);//multiple by 1000 to make the numbers seconds
  }
};

timer(numbers);