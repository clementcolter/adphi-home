export interface EventModel {
  id: number;
  title: string;
  date: Date;
  location: string;
  description: string;
  image?: string;
  category?: 'Social' | 'Philanthropy' | 'Recruitment' | 'Alumni';
  locationIframe?: string;
}