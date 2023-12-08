export class UtilsService {
    public static includesToday(BeginDate: Date, EndDate: Date): boolean {
        const date = new Date();

        return (
            date.getMonth() >= BeginDate.getMonth() && // Mois
            date.getMonth() <= EndDate.getMonth() &&
            date.getDate() >= BeginDate.getDate() && // Jour
            date.getDate() <= EndDate.getDate() &&
            date.getTime() >= BeginDate.getTime() && // Temps
            date.getTime() <= EndDate.getTime()
        );
    }

}