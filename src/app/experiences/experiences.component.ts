import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
})
export class ExperiencesComponent {
  experienceModules: ExperienceModule[] = [
    new ExperienceModule(
      "Computer Assistant Technician",
      "June 2024 - Present",
      "Ministerio de Transportes y Movilidad Sostenible. Dirección General de Organización e Inspección. Subdirección General de Tecnologías de la Información y Administración Digital",
      "Public employment",
      []
      ),
    new ExperienceModule(
      "Full-Stack Engineer",
      "August 2022 - June 2024",
      "Efimob",
      "Company in charge of the electric mobility sector.",
      ["Python", "Machine Learning", "Angular", "Scrum", "Kubernetes", "Docker", "PostgreSQL", "InfluxDB", "NestJS", "Git", "MQTT", "Go"]
      ),
    new ExperienceModule(
      "Full-Stack Engineer",
      "June 2021 - August 2022",
      "Salcotech S.L.",
      "Company in charge of the development of a new technology in relation to the tire.",
      ["Python", "Flask", "Flutter", "Vue.js", "MySQL", "C", "Arduino", "Git", "FreeCad"]
      ),
    new ExperienceModule(
      "Developer Engineer",
      "September 2019 - June 2021",
      "i+D3",
      "Company in charge of the development and instalation of parkings.",
      ["C++", "Raspberry Pi", "Git"]
      ),
    new ExperienceModule(
      "Industrial Engineer",
      "July 2017 - August 2017",
      "Ledisson AIT",
      "Company in charge of the automatization of process to increase productivity, eficience and solve problems.",
      ["i+D", "ABB", "Kuka", "Fanuc"]
      ),
    new ExperienceModule(
      "Dance teacher",
      "September 2020 - March 2023",
      "Inés Núñez",
      "Classes for children between 3 and 12 years old", []
      ),
    new ExperienceModule(
      "Dance teacher",
      "October 2019 - April 2020",
      "Baas Ballet",
      "Classes for children between 6 and 16 years old", []
      ),
  ];
}



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
