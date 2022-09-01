
export class ExperienceModule {
  constructor(title:string,dates:string,company:string,details:string, technoligies:string[]) { 
    this.title=title;
    this.dates=dates;
    this.company=company;
    this.details=details;
    this.technologies=technoligies;
  }

  title:string="";
  dates:string="";
  company:string="";
  details:string="";
  technologies:string[]=[]; 

}