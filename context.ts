export const formatPhone = (phone: string | null | undefined): string => {
    if (phone != null) {
        const phoneNumber = String(phone).replace(/^1/, '').replace(/[^\d]/g, '');
        const phoneNumberLength = phoneNumber.length;
        if (phoneNumberLength < 4) {
            return phoneNumber;
        } else if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
        } else {
            return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-
${phoneNumber.slice(6, 10)}`;
        }
    }
    return '';
};