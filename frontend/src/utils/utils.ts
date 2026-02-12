export function formatTime(date: string) {
    return new Date(date).toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

export function calcAge(date: string | null){
    if (!date) return null;

    const today = new Date();
    const birth = new Date(date);
    let age = today.getFullYear() - birth.getFullYear();
    const mounth = today.getMonth() - birth.getMonth();

    if (mounth < 0 || (mounth === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}