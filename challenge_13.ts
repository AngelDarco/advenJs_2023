/* 
The elves are preparing for Christmas Eve and they need your help to determine if they have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the duration is HH:mm:ss, the deliveries start at 00:00:00 and the time limit is 07:00:00.

Your function must return the time they will lack or the time they will have left over in order to finish the deliveries. The format of the returned duration should be HH:mm:ss.

If they finish before 07:00:00, the remaining time until 07:00:00 should be displayed with a negative sign. For example, if they have 1 hour and 30 minutes left over, return -01:30:00

calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime([
  '00:45:00',
  '00:45:00',
  '00:00:30',
  '00:00:30'
]) // '-05:29:00'
*/

function calculateTime(deliveries: string[]): string {
  const times = deliveries.map((time) => time.split(":"));

  let totalSeconds = 0;
  const maxTime = 7 * 60 * 60 * 1000;

  for (let i = 0; i < times.length; i++) {
    const [h, m, s] = times[i];
    totalSeconds += +h * 3600 + +m * 60 + +s;
  }

  if (totalSeconds === 0) {
    return "00:00:00";
  }

  const deliveriesTime = Math.abs(maxTime - totalSeconds * 1000);
  const formatedTime = new Date(deliveriesTime).toISOString().slice(11, 19);

  if (maxTime > totalSeconds * 1000) {
    return `-${formatedTime}`;
  } else {
    return formatedTime;
  }
}

console.log(calculateTime(["00:10:00", "01:00:00", "03:30:00"])); // '-02:20:00'

console.log(calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"])); // '-05:29:00'
console.log(calculateTime(["02:00:00", "05:00:00", "00:30:00"])); // '00:30:00'
console.log(calculateTime(["00:00:00", "00:00:00", "00:00:00"])); // '00:00:00

console.log(calculateTime(["01:01:01", "09:59:59", "01:01:01"])); //"05:02:01"
console.log(calculateTime(["01:01:01", "03:59:59", "01:01:01", "00:57:58"])); // "-00:00:01"

console.log(calculateTime(["00:00:00", "00:00:00", "6:00:01"])); // '00:59:59'
