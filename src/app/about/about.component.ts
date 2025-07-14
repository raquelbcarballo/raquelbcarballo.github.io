import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {
  experienceModules: ExperienceModule[] = [
    new ExperienceModule(
      "IT Technician",
      "June 2024 - Present",
      "Ministerio de Transportes y Movilidad Sostenible.",
      "Mainly working with Python and Artificial Intelligence (AI) projects, contributing to the development of applications and improvements in the sustainable mobility sector.",
      ["Python", "Artificial Intelligence", "PostgreSQL", "Docker"]
    ),
    new ExperienceModule(
      "Full-Stack Software Development Engineer",
      "August 2022 - June 2024",
      "Efimob",
      "Development of a web application for electric mobility management. Artificial Intelligence and optimization projects.",
      ["Python", "Machine Learning", "Angular", "Scrum", "Kubernetes", "Docker", "PostgreSQL", "InfluxDB", "NestJS", "Git", "MQTT", "Go"]
    ),
    new ExperienceModule(
      "Full-Stack Software Development Engineer",
      "June 2021 - August 2022",
      "Salcotech S.L.",
      "Development of a hybrid mobile and web application for truck fleet tire management. Data and systems management stored in AWS. 3D part design.",
      ["Python", "Flask", "Flutter", "Vue.js", "MySQL", "C", "Arduino", "Git", "FreeCAD"]
    ),
    new ExperienceModule(
      "Industrial Engineer",
      "September 2019 - June 2021",
      "i+D3",
      "Integration of new electronics and software development in C++ for access control, traffic, and mobility installations.",
      ["C++", "Raspberry Pi", "Git"]
    ),
    new ExperienceModule(
      "Industrial Engineer Intern",
      "July 2017 - August 2017",
      "Ledisson AIT",
      "Programming of Kuka and Fanuc robots. Support in organization engineering and technical management.",
      ["Kuka", "Fanuc"]
    ),
    new ExperienceModule(
      "Ballet Teacher",
      "2020 - 2023",
      "Escuela de Danza Inés Núñez",
      "Classes for children.",
      []
    ),
    new ExperienceModule(
      "Ballet Teacher",
      "2019 - 2020",
      "Baas Ballet",
      "Classes for children.",
      []
    ),
    new ExperienceModule(
      "Staff Manager at Industrial Automation Conference",
      "2017 - 2018",
      "Universidade de Vigo",
      "Management and organization of university conferences.",
      []
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
