import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';

dayjs.extend(utc);

class DateProvider {
    static dateNow() {
        return dayjs().toDate();
    }

    static addDays(days) {
        return dayjs().add(days, 'day').toDate();
    }
}

export { DateProvider };
