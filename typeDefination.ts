export interface Book{
    ISBN: number;
    Title: string;
    Author: string;
    Publisher: string;
    PublicationDate: Date;
    NumberOfPages: number;
    Availability: "Paperback" | "eBook" | "Audiobook";
    EditionNumber?: number;
}