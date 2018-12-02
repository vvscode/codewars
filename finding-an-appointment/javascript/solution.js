const workDayStart = 9 * 60;
const workDayEnd = 19 * 60;

function getStartTime(schedules, duration) {
  const workDayLine = Array.from({ length: workDayEnd - workDayStart }).fill(0);

  schedules.forEach(personalSchedule => {
    personalSchedule.forEach(([start, end]) => {
      const [startH, startM] = start.split(':');
      const [endH, endM] = end.split(':');

      const startIndex = startH * 60 + +startM - workDayStart;
      const endIndex = endH * 60 + +endM - workDayStart;
      for (let i = startIndex; i < endIndex; i++) {
        workDayLine[i] += 1;
      }
    });
  });

  let meetingEnd = 0;
  let startIndex = 0;
  let counter = 0;
  for (let i = 0; i < workDayLine.length; i++) {
    if (workDayLine[i] === 0) {
      meetingEnd = i;
      counter++;

      if (counter >= duration) {
        break;
      }
    } else {
      counter = 0;
    }
  }
  if (counter >= duration) {
    const endTime = meetingEnd - duration + 1 + workDayStart;
    const minutes = endTime % 60;
    const hours = (endTime - minutes) / 60;
    return `${`0${hours}`.substr(-2)}:${`0${minutes}`.substr(-2)}`;
  }
  return null;
}
