import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

export function getNearExpireLicenses(data) {
    return data.filter((item) => {
        const expire = dayjs.utc(item.license_expire_at);
        const today = dayjs.utc();
        const diffDays = expire.diff(today, "day");
        return diffDays >= 0 && diffDays <= 7;
    });
}

export function getDaysLeft(expireDate) {
    const expire = dayjs.utc(expireDate);
    const today = dayjs.utc();
    return expire.diff(today, "day");
}

export function formatDate(date) {
    return new Date(date).toLocaleDateString();
}